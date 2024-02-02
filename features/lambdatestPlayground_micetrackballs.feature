Feature: Mice and trackball page of the ecommerce playground.lambdatest.io website 

    Background:
        Given Navigate to the url

    Scenario: Select an item after choosing a category
        When Select shop by category to open the slide menu
        Then Select mice and trackball from the slide menu
        Then Select the name of any item on the page
    
    Scenario: Select item from category and save in cart
        When Select category to open the slide menu
        Then Select mice and trackball category from menu
        Then Click another item from the page
        Then Save item to cart