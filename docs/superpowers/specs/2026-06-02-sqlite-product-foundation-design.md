# SQLite Product Foundation Design

## Goal

Move the Brasa apps from demo-only JSON state toward a product-ready local backend using SQLite, shared server utilities, explicit validation, and a data layer that can later migrate to PostgreSQL or Supabase without rewriting the UI.

## Scope

This phase covers the product foundation, not the final SaaS product. The apps should keep working as local demos while gaining safer storage, clearer boundaries, and early product concepts.

In scope:

- Add a root Node project with scripts for setup, migration, seeding, testing, and running apps.
- Add SQLite as the primary local database.
- Create a shared backend module for static serving, request parsing, validation helpers, session scaffolding, and database access.
- Replace raw whole-state JSON writes with a controlled state API backed by SQLite snapshots first.
- Keep demo data available through seed scripts.
- Add tests for backend safety, state persistence, escaping, and public reservation validation.
- Preserve the current UI behavior unless a change is required for safety or clarity.

Out of scope for this phase:

- Full cloud deployment.
- Payment flows.
- Real SMS, WhatsApp, or email delivery.
- Full PostgreSQL/Supabase migration.
- Complete rewrite of the frontend monoliths.
- Real cross-app business workflows beyond storing the foundation needed for them.

## Architecture

The first implementation uses Node's built-in SQLite support in a root `data/brasa-product.sqlite` database and shared backend code under `src/server`. The current four app folders continue to exist. Each app server imports the shared server factory instead of duplicating request handling.

The first database version stores app state as versioned snapshots per app. This is intentionally conservative: it gives safer persistence, backups, tests, and migration structure without forcing a full frontend rewrite immediately.

After the shared backend is stable, later phases can split snapshots into relational tables such as businesses, users, employees, reservations, tables, orders, suppliers, catalog items, and audit events.

## Data Model

Initial SQLite tables:

- `apps`: registered app ids and display names.
- `state_snapshots`: one current JSON payload per app, with version, timestamps, and checksum.
- `state_history`: previous payloads for rollback and audit during demo/product transition.
- `demo_seeds`: named seed payloads for restoring demo states.
- `users`: local demo/product users with role, email, password hash field, and app access.
- `sessions`: session tokens for future authenticated routes.

The first phase keeps frontend payload shape compatible with the current apps. This reduces migration risk and lets the UI continue to call `/api/state`.

## Security

The server must:

- Limit JSON request bodies.
- Reject invalid JSON with clear errors.
- Use safe static file resolution that cannot escape the app root.
- Write state through SQLite transactions.
- Keep a history row before replacing current state.
- Return clear save/load errors to the client.
- Separate public reservation routes from internal state routes in preparation for real permissions.

The frontend must:

- Use `escapeHtml` for text nodes.
- Use `escapeAttribute` for HTML attributes.
- Validate public reservation input before save.
- Avoid silent save failures in core workflows.

## App Flow

BrasaFlow remains the operational staff app.
BrasaReservas remains the reservations app and keeps its public booking page.
BrasaComandas remains the live service app.
BrasaConnect remains the supplier app.

For now, each app uses its own app id in the shared state API:

- `brasaflow`
- `brasareservas`
- `brasacomandas`
- `brasaconnect`

The existing `/api/state` endpoint can remain for compatibility inside each app server, but internally it maps to the app id and SQLite storage.

## Error Handling

The backend returns structured errors:

```json
{
  "error": "invalid_json",
  "message": "El estado enviado no es valido."
}
```

The frontend should display non-invasive save/load status where practical. Alerts can remain for existing business-rule errors in this phase, but persistence failures should be visible and specific.

## Testing

Add a lightweight test harness using Node's built-in test runner.

Required tests:

- Static server rejects path traversal.
- State API rejects oversized payloads.
- State API saves and loads per app id.
- State replacement creates a history row.
- Demo seed can reset an app state.
- Escape helpers escape text and attributes correctly.
- Public reservation validation rejects missing name, invalid people count, and missing time/date.

## Migration Strategy

1. Keep existing JSON files as source for initial seeds.
2. Create SQLite database and schema.
3. Import current `data/app-state.json` files into seed rows.
4. Serve existing apps from the same URLs and ports.
5. Keep `/api/state` compatibility while moving implementation behind it.
6. Add tests before replacing each duplicated server.

## Success Criteria

- All four apps still load locally.
- Existing demo flows still work.
- State persists through SQLite, not direct JSON file overwrite.
- Backend tests pass.
- Public reservation input is validated.
- Server path traversal and oversized payload risks are covered by tests.
- The codebase has a clear next step toward relational product tables.
