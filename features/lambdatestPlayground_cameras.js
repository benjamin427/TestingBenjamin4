import navigate_home from "../pages/lambdatestPlayground_home";
import dashboardslideMenu from "../pages/lambdatestPlayground_slideMenu";
import cameras_page_1 from "../pages/page_1";
const {When, Given, Then} = require('@badeball/cypress-cucumber-preprocessor');


Given("Navigate to the url", () => {
    navigate_home.go_to_url();
})
When("Select shop by category to open the slide menu", () => {
    navigate_home.select_shop_by_category();
})
Then("Select camera category from the slide menu", () => {
    dashboardslideMenu.select_category_cameras();
})
Then("Select the name of any item on the page", () => {
    cy.contains(cameras_page_1.select_HTC_Touch_HD).click();
})



When("Select category to open the slide menu", () => {
    navigate_home.select_shop_by_category();
})
Then("Select camera category from menu", () => {
    dashboardslideMenu.select_category_cameras();
})
Then("Click another item from the page", () => {
    cy.contains(cameras_page_1.select_MacBook_Air).click();
})
Then("Save item to cart", () => {
    cy.click_add_to_cart();
})