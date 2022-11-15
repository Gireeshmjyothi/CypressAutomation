const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  projectId: 'hi2fvo',
  "reporter": 'mochawesome',
  "runMode":1,
  // "openMode":99,
  "defaultCommandTimeout": 8000,
  "pageLoadTimeout": 3000,
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/integration/Examples/*.js'

  },
  "env": {
    "url": "https://rahulshettyacademy.com/angularpractice/"
  }
});
