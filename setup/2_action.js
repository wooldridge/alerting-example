declareUpdate();
var alert = require("/MarkLogic/alert.xqy");

// This function creates the specified action. When a rule associated with the
// action matches a document, the action's module will be invoked with the
// following external variables set:
//
// var configUri;
// var doc;
// var rule;
// var action;

var action = alert.makeAction(
  "test-action",              // name
  "Action for alerting test", // description
  "0",                        // module-db (0 for file system)
  "/",                        // module-root
  "/alert/test.sjs",          // module
  // options
  {
    "actionOption": "456"
  }
);

alert.actionInsert(
  "http://example.org/alert/test",
  action
);
