Introduction:
This developed framework was used to test the e-commerce website ECommerce-Playground (https://ecommerce-playground.lambdatest.io/). This website is designed for selling electronic merchandice.

Installation:
To use Cypress, make sure to download and install NodeJS. 

Project setup:
Go to the Windows terminal and create a project folder by typing the command "mkdir" and "the name of your folder". Also, type the change directory command "cd", and the name of your folder so you're able to be inside the path where the source of the Cypress tool will be located.
Type the command "npm init" to initialize the project setup.
After project setup is complete, you will have the opportunity to install any tools from the NodeJS library.

Tools to install in the project using the "npm install" command:
npm install @badeball/cypress-cucumber-preprocessor - Tool used to install Cucumber.
npm install @bahmutov/cypress-esbuild-preprocessor - Tool used to install the esbuild plugins.
npm install cypress - Cypress UI automation tool.
npm install mocha - Automation framework used in conjuction with Cypress.
npm install chai - Assertion tool used in conjunction with the mocha framework.
npm install mochawesome - Tool used to generate a report file.
npm install mochawesome-merge - Tool used for combining results after test execution.
npm install mochawesome-report-generator - Tool used for generating a report results after combining the test results.

Starting Cypress:
Type the command "npx cypress open"
There's a possibility that you will notice a message indicating that you're using Cypress with a version number.
After typing the cypress open command, there's a pop-up window that will display the cypress logo, and two setup options. 
Select the "end-to-end" option.
Follow the rest of the instructions to be completed.

Installing cucumber:
Make sure you insert code in the cypress.config.js file in your IDE as shown here

    const { defineConfig } = require("cypress");
    const createBuilder = require('@bahmutov/cypress-esbuild-preprocessor');
    const addCucumberpreprocessor = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
    const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin

    module.exports = defineConfig({
    e2e: {
      setupNodeEvents(on, config) {
      // implement node event listeners here
        const builder = createBuilder({
        plugins: [createEsbuildPlugin(config)]
        })
        on('file:preprocessor', builder);
        addCucumberpreprocessor(on, config);
        return config;
     },
     specPattern: "**/*.feature",

Create a folder that will contain features within the "cypress" folder structure, and then create a ".feature" file
Create a step definition file that will correspond to the ".feature" file.
Go back to the terminal and type "npx cypress open".
Select the end-to-end configuration option.
Select which browser to execute ("Chrome", "Firefox", or "Electron" - default browser)
After you made the selection, you will see a list of the features that will be executed

Install mochawesome:
Make sure you insert code in the cypress.config.js file in your IDE as shown here

    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: False,
      quite: False,
      html: true,
      json: true
    }
This code shown above should be located after you type the specPattern: "**/*.feature" location.
