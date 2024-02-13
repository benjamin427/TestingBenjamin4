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


Here are the commands to use the framework for test execution (make sure to change directory to be in the actual name of the project folder used for the framework in the command line in the windows terminal):

To test in prodcution environment:

npm run cy:prod:open:Chrome - To open Chrome browser in production environment. 
npm run cy:prod:open:Firefox - To open Firefox browser in production environment. 
npm run cy:prod:open:Edge - To open Edge browser in the production environment.

To test in development environment:

npm run cy:dev:open:Chrome - To open Chrome browser in development environment. 
npm run cy:dev:open:Firefox - To open Firefox browser in development environment. 
npm run cy:dev:open:Edge - To open Edge browser in the development environment.

To test in live environment:

npm run cy:live:open:Chrome - To open Chrome browser in live environment. 
npm run cy:live:open:Firefox - To open Firefox browser in live environment. 
npm run cy:live:open:Edge - To open Edge browser in live environment.

To test in headless mode (in any environment - production, development, or live):

npm run cy:prod:run:Chrome - To run test execution headless from Chrome browser. 
npm run cy:prod:run:Firefox - To run test execution headless from Firefox browser. 
npm run cy:prod:run:Edge - To run test execution headless from Edge browser.

To generate reports, make sure you start here to follow these steps. It is not necessary to use the commands listed above because there will be a 
command that will test the entire testing suite before reports are generated.

npm run clean-report - Create a new empty folder in the framework. 
npm run pretest - To test the empty report to ensure no malfunctions. 
npm run scripts - To start the test execution of the entire suite. 
npm run combine-report - To combine test results after report data are generated. 
npm run generate-report - To save the generated test reports in the folder.

Reminder: After you type the first three commands listed above, you can use one of these commands as an option.

npm run posttest 
npm run create-report
