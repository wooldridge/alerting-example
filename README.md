## ml-alerting-example

Steps for creating a simple MarkLogic alerting example in JavaScript.

1. In MarkLogic, create a forest named "alert" and attach it to a new
   database named "alert". Use the default settings for both the forest
   and the database.

2. Run the following scripts in Query Console (http://localhost:8000/qconsole)
   in the context of the "alert" database:

   - `setup/1_config.js` configures the alerting example
   - `setup/2_action.js` defines an action with a module to execute
   - `setup/3_rule.js` defines a rule with a reverse query to match

3. Save `test.sjs` to the modules directory (i.e., `/alert`).

4. Run `invoke.js` in Query Console to test the alert. Data should display in
   the MarkLogic console.

See the MarkLogic alerting documentation: 

https://docs.marklogic.com/guide/search-dev/alerts
