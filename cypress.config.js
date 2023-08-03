const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ti4zwr',
  e2e: {
    setupNodeEvents(on, config) {
      { "reporter"; "mochawesome", 
        "reporterOptions"; 
          { "reportDir"; "cypress/report/mochawesome-report", 
           "overwrite"; true, 
           "html"; true, 
           "json"; false, 
           "timestamp"; "mmddyyyy_HHMMss" }}
    },
  },
});
