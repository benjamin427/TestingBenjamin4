class TopCatagories {
    go_to_url(){
        cy.visit("https://ecommerce-playground.lambdatest.io");
    }
    select_category_components(){
        cy.shop_by_category_components();
    }
    select_category_cameras(){
        cy.shop_by_category_cameras();
    }
    select_category_phone_tablets_ipod(){
        cy.shop_by_category_phone_tablets_ipod();
    }
    select_category_software(){
        cy.shop_by_category_software();
    }
    select_category_mp3_players(){
        cy.shop_by_category_mp3();
    }
    select_category_laptops_notebooks(){
        cy.shop_by_category_laptops_notebooks();
    }
    select_category_desktops_monitors(){
        cy.shop_by_category_laptops_notebooks();
    }
    select_category_printers_scanners(){
        cy.shop_by_category_printers_scanners();
    }
    select_category_mice_trackballs(){
        cy.shop_by_category_mice_trackballs();
    }   
    select_category_web_cameras(){
        cy.shop_by_category_web_cameras();
    }
}

const dashboardslideMenu = new TopCatagories();
export default dashboardslideMenu;
