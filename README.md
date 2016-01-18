## alerting-example

Steps for creating a simple MarkLogic alerting example in JavaScript.

1. In MarkLogic, create a database named "alert" with the default settings.
s
2. Run the following scripts in Query Console (http://localhost:8000/qconsole)
   in the context of the "alert" database:

   `setup/1_config.js` configures the alerting example
   `setup/2_action.js` defines an action with module to execute
   `setup/3_rule.js` defines a rule with reverse query to match

3. Save `test.sjs` to the modules directory (i.e., `/alert`).

4. Run `invoke.js` in Query Console to test the alert. Data should display in
   the MarkLogic console.
