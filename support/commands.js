// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//Dashboard menu selection search bar
Cypress.Commands.add("searchbar_menu_selections", () => {
    cy.contains("All Categories").click({force: true});
})

//Dashboard menu selections
Cypress.Commands.add("searchbar_menu_desktops", () => {
    cy.contains("Desktops").click({force: true});
})
Cypress.Commands.add("searchbar_menu_laptops", () => {
    cy.contains("Laptops").click({force: true});
})
Cypress.Commands.add("searchbar_menu_components", () => {
    cy.contains("Shop by Category").click({force: true});
})
Cypress.Commands.add("searchbar_menu_tablets", () => {
    cy.contains("Tablets").click({force: true});
})
Cypress.Commands.add("searchbar_menu_software", () => {
    cy.contains("Software").click({force: true});
})
Cypress.Commands.add("searchbar_menu_phones_pda", () => {
    cy.contains("Phones & PDAs").click({force: true});
})
Cypress.Commands.add("searchbar_menu_cameras", () => {
    cy.contains("Cameras").click({force: true});
})
Cypress.Commands.add("searchbar_menu_mp3_players", () => {
    cy.contains("MP3 Players").click({force: true});
})
Cypress.Commands.add("view_cart", () => {
    cy.get(".badge badge-pill badge-info cart-item-total").click({force: true});
});


//Dashboard menu selections
Cypress.Commands.add("shop_by_category", () => {
    cy.contains("Shop by Category").click({force: true});
})
Cypress.Commands.add("home", () => {
    cy.contains("Home").click({force: true});
})
Cypress.Commands.add("special", () => {
    cy.contains("Special").click({force: true});
})
Cypress.Commands.add("blog", () => {
    cy.contains("Blog").click({force: true});
})
Cypress.Commands.add("mega_menu", () => {
    cy.contains("Mega Menu").click({force: true});
})

//Mega menu selections - mobile
Cypress.Commands.add("mega_menu_option_mobile_apple", () => {
    cy.contains("Apple").click({force: true});
})
Cypress.Commands.add("mega_menu_option_mobile_htc", () => {
    cy.contains("HTC").click({force: true});
})
Cypress.Commands.add("mega_menu_option_mobile_lg", () => {
    cy.contains("LG").click({force: true});
})
Cypress.Commands.add("mega_menu_option_mobile_nokia", () => {
    cy.contains("Nokia").click({force: true});
})
Cypress.Commands.add("mega_menu_option_mobile_samsung", () => {
    cy.contains("Samsung").click({force: true});
})
Cypress.Commands.add("mega_menu_option_mobile_xiomi", () => {
    cy.contains("Xiomi").click({force: true});
})

//Mega menu selections - accessories
Cypress.Commands.add("mega_menu_option_accessories_headphones", () => {
    cy.contains("Headphones").click({force: true});
})
Cypress.Commands.add("mega_menu_option_accessories_memory_card", () => {
    cy.contains("Memory Card").click({force: true});
})
Cypress.Commands.add("mega_menu_option_accessories_cases", () => {
    cy.contains("Mobile cases").click({force: true});
})
Cypress.Commands.add("mega_menu_option_accessories_power_bank", () => {
    cy.contains("Power bank").click({force: true});
})
Cypress.Commands.add("mega_menu_option_accessories_screenguards", () => {
    cy.contains("Screenguards").click({force: true});
})

//Mega menu selections - computers
Cypress.Commands.add("mega_menu_option_computers_desktop", () => {
    cy.contains("Desktop").click({force: true});
})
Cypress.Commands.add("mega_menu_option_computers_hard_disk", () => {
    cy.contains("Hard Disk").click({force: true});
})
Cypress.Commands.add("mega_menu_option_computers_mouse_keyboard", () => {
    cy.contains("Mouse & Keyboard").click({force: true});
})
Cypress.Commands.add("mega_menu_option_computers_pen_drive", () => {
    cy.contains("Pen Drive").click({force: true});
})
Cypress.Commands.add("mega_menu_option_computers_printer", () => {
    cy.contains("Shop by Category").click({force: true});
})

//Mega menu selections - laptop
Cypress.Commands.add("mega_menu_selection_laptop_apple_macbook", () => {
    cy.contains("Apple Macbook").click({force: true});
})
Cypress.Commands.add("mega_menu_selection_laptop_asus", () => {
    cy.contains("Asus").click({force: true});
})
Cypress.Commands.add("mega_menu_selection_laptop_hp", () => {
    cy.contains("HP").click({force: true});
})
Cypress.Commands.add("mega_menu_selections_laptop_lenovo", () => {
    cy.contains("Lenovo").click({force: true});
})

//Mega menu selections - smart wearable
Cypress.Commands.add("mega_menu_selections_smart_wearable_smart_watch", () => {
    cy.contains("Smart Watch").click({force: true});
})
Cypress.Commands.add("mega_menu_selections_smart_wearable_smart_band", () => {
    cy.contains("Smart band").click({force: true});
})

//Mega menu selections - tablets
Cypress.Commands.add("mega_menu_selections_tablets_apple_ipad", () => {
    cy.contains("Apple Ipad").click({force: true});
})

//Mega menu selections - sound system
Cypress.Commands.add("mega_menu_selections_sound_system_bluetooth_speaker", () => {
    cy.contains("Bluetooth Speaker").click({force: true});
})
Cypress.Commands.add("mega_menu_selections_sound_system_dth", () => {
    cy.contains("DTH").click({force: true});
})
Cypress.Commands.add("mega_menu_selections_sound_system_home_audio", () => {
    cy.contains("Home Audio").click({force: true});
})
Cypress.Commands.add("mega_menu_selections_sound_system_home_theatre", () => {
    cy.contains("Home Theatre").click({force: true});
})
Cypress.Commands.add("mega_menu_selections_sound_system_sound_bar", () => {
    cy.contains("SoundBar").click({force: true});
})
Cypress.Commands.add("add_ons", () => {
    cy.contains("AddOns").click({force: true});
})

//Add ons selections 
Cypress.Commands.add("add_ons_selection_modules", () => {
    cy.contains("Modules").click({force: true});
})
Cypress.Commands.add("add_ons_selection_designs", () => {
    cy.contains("Shop by Category").click({force: true});
})
Cypress.Commands.add("add_ons_selection_widgets", () => {
    cy.contains("Widgets").click({force: true});
})
Cypress.Commands.add("my_account", () => {
    cy.contains("My account").click({force: true});
})

//My account selections
Cypress.Commands.add("my_account_selection_login", () => {
    cy.contains("Login").click({force: true});
})
Cypress.Commands.add("my_account_selections_register", () => {
    cy.contains("Register").click({force: true});
})


//Slide menu selections
Cypress.Commands.add("shop_by_category_components", () => {
    cy.contains("Components").click({force: true});
})
Cypress.Commands.add("shop_by_category_cameras", () => {
    cy.contains("Cameras").click({force: true});
})
Cypress.Commands.add("shop_by_category_phone_tablets_ipod", () => {
    cy.contains("Phone, Tablets & Ipod").click({force: true});
})
Cypress.Commands.add("shop_by_category_software", () => {
    cy.contains("Software").click({force: true});
})
Cypress.Commands.add("shop_by_category_mp3", () => {
    cy.contains("MP3 Players").click({force: true});
})
Cypress.Commands.add("shop_by_category_laptops_notebooks", () => {
    cy.contains("Laptops & Notebooks").click({force: true});
})
Cypress.Commands.add("shop_by_category_desktops_monitors", () => {
    cy.contains("Desktops and Monitors").click({force: true});
})
Cypress.Commands.add("shop_by_category_printers_scanners", () => {
    cy.contains("Printers & Scanners").click({force: true});
})
Cypress.Commands.add("shop_by_category_mice_trackballs", () => {
    cy.contains("Mice and Trackballs").click({force: true});
})
Cypress.Commands.add("shop_by_category_gaming_consoles", () => {
    cy.contains("Gaming consoles").click({force: true});
})
Cypress.Commands.add("shop_by_category_web_cameras", () => {
    cy.contains("Web Cameras").click({force: true});
})


// Purchasing functions
Cypress.Commands.add("click_add_to_cart", () => {
    cy.contains("Add to Cart").click({force: true});
})
Cypress.Commands.add("click_buy_now", () => {
    cy.contains("Buy now").click({force: true})
})
Cypress.Commands.add("click_quantity_increase", () => {
    cy.get(".input-group-append").click({force: true});
})
Cypress.Commands.add("click_quantity_decrease", () => {
    cy.get(".input-group-prepend").click({force: true});
})
Cypress.Commands.add("click_compare_item", () => {
    cy.contains("Compare this Product").click({force: true})
})
Cypress.Commands.add("click_size_chart", () => {
    cy.contains("Size chart").click({force: true})
})
Cypress.Commands.add("click_popup_window", () => {
    cy.contains("Popup").click({force: true})
})
Cypress.Commands.add("click_ask_question", () => {
    cy.contains("Ask Question").click({force: true})
})

//Review functions
Cypress.Commands.add("click_1_star_rating", () => {
    cy.get("#rating-1-216860").click({force: true});
})
Cypress.Commands.add("click_2_star_rating", () => {
    cy.get("#rating-2-216860").click({force: true});
})
Cypress.Commands.add("click_3_star_rating", () => {
    cy.get("#rating-3-216860").click({force: true});
})
Cypress.Commands.add("click_4_star_rating", () => {
    cy.get("#rating-4-216860").click({force: true});
})
Cypress.Commands.add("click_5_star_rating", () => {
    cy.get("#rating-5-216860").click({force: true});
})
Cypress.Commands.add("type_name_review", () => {
    cy.get("#input-name").type("Benjamin Saint Elien", {force: true});
})
Cypress.Commands.add("type_review", () => {
    cy.get("#input-review").type("Testing on the comments section. No review necessary", {force: true});
})
Cypress.Commands.add("review_button", () => {
    cy.get("#button-review").click();
})

// FAQ Functions
Cypress.Commands.add("FAQ_shipping_address", () => {
    cy.get("#mz-faq-label-216863-0").click({force: true});
})
Cypress.Commands.add("FAQ_shipping_address_2", () => {
    cy.get("#mz-faq-label-216863-1").click({force: true});
})
Cypress.Commands.add("FAQ_activate_account", () => {
    cy.get("#mz-faq-label-216863-2").click({force: true});
})
Cypress.Commands.add("FAQ_bonus_points", () => {
    cy.get("#mz-faq-label-216863-3").click({force: true});
})
Cypress.Commands.add("FAQ_checkout_limit", () => {
    cy.get("#mz-faq-label-216863-4").click({force: true});
})
Cypress.Commands.add("FAQ_payment_checkout", () => {
    cy.get("#mz-faq-label-216863-5").click({force: true});
})

