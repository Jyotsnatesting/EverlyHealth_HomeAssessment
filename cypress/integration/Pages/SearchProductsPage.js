/// <reference types="cypress" />
class SearchProductsPage{

    visit() {
        cy.clearCookies()
        cy.visit('https://www.amazon.com/')
    }
  searchProduct(productName){

        
        cy.xpath('//input[@id="twotabsearchtextbox"]').type(productName)
        cy.xpath('//input[@type="submit"]').click()
    }

    

}
export default SearchProductsPage