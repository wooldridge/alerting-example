declareUpdate();
var alert = require("/MarkLogic/alert.xqy");

// Create an alerting configuration associated with a particular URI. The URI
// will be used to create a protected collection when the config is inserted
// into the database with alert.configInsert. This URI will also be used as a
// directory for all documents (config, actions, and rules) associated with the
// config.

var config = alert.makeConfig(
  "http://example.org/alert/test", // URI
  "test-config",                   // name
  "Config for alerting test",     // description
  // options
  {
    "configOption": "123"
  }
);

alert.configInsert(config);
