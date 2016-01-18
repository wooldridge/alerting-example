var alert = require("/MarkLogic/alert.xqy");

// Invoke alerting

var node = xdmp.unquote('{"test": "bar"}', null, "format-json");
alert.invokeMatchingActions("http://example.org/alert/test", node, {});
