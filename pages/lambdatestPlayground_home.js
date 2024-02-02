class HomeDefault {
    go_to_url(){
        cy.visit("https://ecommerce-playground.lambdatest.io")
    }
    select_shop_by_category(){
        cy.shop_by_category();
    }
    select_home(){
        cy.home();
    }
    select_special(){
        cy.special();
    }
    select_blog(){
        cy.blog();
    }
    select_mega_menu(){
        cy.mega_menu();
    }
    select_addons(){
        cy.add_ons();
    }
    select_my_account(){
        cy.my_account();
    }
    
}

const navigate_home = new HomeDefault();
export default navigate_home;
