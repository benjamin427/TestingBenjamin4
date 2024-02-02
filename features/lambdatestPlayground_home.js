import navigate_home from '../pages/lambdatestPlayground_home';
const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');


Given("Navigate to the url", () => {
    navigate_home.go_to_url();
})
When("Select special from home menu", () => {
    navigate_home.select_special();
})
Then("Select blog from home menu", () => {
    navigate_home.select_blog();
})
Then("Select mega menu from home menu", () => {
    navigate_home.select_mega_menu();
})
Then("Select add-ons from home menu", () => {
    navigate_home.select_addons();
})
Then("Select my-account from home menu", () => {
    navigate_home.select_my_account();
})

