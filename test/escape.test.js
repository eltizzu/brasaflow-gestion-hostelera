const assert = require("node:assert");
const test = require("node:test");
const { escapeHtml, escapeAttribute } = require("../src/server/escape");

test("escapeHtml escapes text node characters", () => {
  assert.equal(escapeHtml("<b>&</b>"), "&lt;b&gt;&amp;&lt;/b&gt;");
});

test("escapeAttribute escapes quotes", () => {
  assert.equal(escapeAttribute(`bad" onclick='x'`), "bad&quot; onclick=&#39;x&#39;");
});
