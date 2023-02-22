const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3n6563',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
