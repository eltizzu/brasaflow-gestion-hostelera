-- Enable Row Level Security for every public table and restrict rows to
-- the authenticated user that owns the record.
--
-- Rule applied:
--   authenticated users can read, insert, update and delete only rows where
--   owner_id or user_id matches auth.uid().
--
-- Important:
--   every public base table must have owner_id or user_id. If any table does
--   not have either column, this migration stops so the schema can be fixed
--   instead of leaving a table accidentally exposed.

do $$
declare
  table_row record;
  has_owner_id boolean;
  has_user_id boolean;
  ownership_condition text;
  skipped_tables text[] := array[]::text[];
begin
  for table_row in
    select
      t.table_schema,
      t.table_name
    from information_schema.tables t
    where t.table_schema = 'public'
      and t.table_type = 'BASE TABLE'
      and t.table_name not in ('schema_migrations')
    order by t.table_name
  loop
    select exists (
      select 1
      from information_schema.columns c
      where c.table_schema = table_row.table_schema
        and c.table_name = table_row.table_name
        and c.column_name = 'owner_id'
    )
    into has_owner_id;

    select exists (
      select 1
      from information_schema.columns c
      where c.table_schema = table_row.table_schema
        and c.table_name = table_row.table_name
        and c.column_name = 'user_id'
    )
    into has_user_id;

    if not has_owner_id and not has_user_id then
      skipped_tables := array_append(
        skipped_tables,
        format('%I.%I', table_row.table_schema, table_row.table_name)
      );
      continue;
    end if;

    ownership_condition := '';

    if has_owner_id then
      ownership_condition := format('%I::text = auth.uid()::text', 'owner_id');
    end if;

    if has_user_id then
      ownership_condition := concat_ws(
        ' or ',
        nullif(ownership_condition, ''),
        format('%I::text = auth.uid()::text', 'user_id')
      );
    end if;

    execute format(
      'alter table %I.%I enable row level security',
      table_row.table_schema,
      table_row.table_name
    );

    execute format(
      'alter table %I.%I force row level security',
      table_row.table_schema,
      table_row.table_name
    );

    execute format(
      'drop policy if exists %I on %I.%I',
      'owner_or_user_select',
      table_row.table_schema,
      table_row.table_name
    );

    execute format(
      'drop policy if exists %I on %I.%I',
      'owner_or_user_insert',
      table_row.table_schema,
      table_row.table_name
    );

    execute format(
      'drop policy if exists %I on %I.%I',
      'owner_or_user_update',
      table_row.table_schema,
      table_row.table_name
    );

    execute format(
      'drop policy if exists %I on %I.%I',
      'owner_or_user_delete',
      table_row.table_schema,
      table_row.table_name
    );

    execute format(
      'create policy %I on %I.%I for select to authenticated using (%s)',
      'owner_or_user_select',
      table_row.table_schema,
      table_row.table_name,
      ownership_condition
    );

    execute format(
      'create policy %I on %I.%I for insert to authenticated with check (%s)',
      'owner_or_user_insert',
      table_row.table_schema,
      table_row.table_name,
      ownership_condition
    );

    execute format(
      'create policy %I on %I.%I for update to authenticated using (%s) with check (%s)',
      'owner_or_user_update',
      table_row.table_schema,
      table_row.table_name,
      ownership_condition,
      ownership_condition
    );

    execute format(
      'create policy %I on %I.%I for delete to authenticated using (%s)',
      'owner_or_user_delete',
      table_row.table_schema,
      table_row.table_name,
      ownership_condition
    );

    raise notice 'RLS enabled on %.% with condition: %',
      table_row.table_schema,
      table_row.table_name,
      ownership_condition;
  end loop;

  if array_length(skipped_tables, 1) > 0 then
    raise exception
      'RLS migration stopped. These public tables do not have owner_id or user_id: %',
      array_to_string(skipped_tables, ', ');
  end if;
end $$;

-- Audit query to verify the result after running the migration:
--
-- select
--   n.nspname as schema_name,
--   c.relname as table_name,
--   c.relrowsecurity as rls_enabled,
--   c.relforcerowsecurity as rls_forced,
--   count(p.polname) as policy_count
-- from pg_class c
-- join pg_namespace n on n.oid = c.relnamespace
-- left join pg_policy p on p.polrelid = c.oid
-- where n.nspname = 'public'
--   and c.relkind = 'r'
-- group by n.nspname, c.relname, c.relrowsecurity, c.relforcerowsecurity
-- order by c.relname;
