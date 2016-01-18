declareUpdate();
var alert = require("/MarkLogic/alert.xqy");

// This function creates the specified rule. If the caller does not have the
// alert-admin privilege then $user-id must be the ID of the current user
// from the security database. If $user-id is 0, it will be automatically
// replaced with the current user's ID.

var rule = alert.makeRule(
  "test-rule",              // name
  "Rule for alerting test", // description
  xdmp.getCurrentUserid(),  // user-id
  // query
  cts.orQuery([
     cts.wordQuery("foo"),
     cts.wordQuery("bar")]),
  "test-action",            // action
  // options
  {
    "ruleOption": "789"
  }
)

alert.ruleInsert(
  "http://example.org/alert/test",
  rule
)
