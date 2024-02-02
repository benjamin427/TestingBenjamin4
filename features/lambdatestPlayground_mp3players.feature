Feature: MP3 players page of the ecommerce playground.lambdatest.io website 

    Background:
        Given Navigate to the url

    Scenario: Select an item after choosing a category
        When Select shop by category to open the slide menu
        Then Select mp3 player from the slide menu
        Then Select the name of any item on the page
    
    Scenario: Select item from category and save in cart
        When Select category to open the slide menu
        Then Select mp3 players category from menu
        Then Click another item from the page
        Then Save item to cart