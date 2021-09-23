/// <reference types="cypress" />

//We can run this script by using the command "npx cypress run --spec ./cypress/integration/Tests/cartTest.js --headed --browser=chrome"


import SearchProductsPage from "../Pages/SearchProductsPage";
const SearchProductP = new SearchProductsPage();

describe("Adding to cart Test Suite", () => {

    it('Adding the items to the cart', () => {

    SearchProductP.visit()
    SearchProductP.searchProduct("covid test kit")
    cy.url().should('contain.text','kit')
    cy.xpath('//div[@data-cel-widget="search_result_2"]').click(); // We can write a loop for the list of elements. We can write these also in POM format in another js file. For reusability.
    cy.xpath('Addto cart button').click() //Add to cart

    })

    it('checkout with Discount and billing validation ', () => {

        SearchProductP.visit()
        SearchProductP.searchProduct("covid test kit")
        cy.url().should('contain.text','kit')
        cy.xpath('//div[@data-cel-widget="search_result_2"]').click(); // We can write a loop for the list of elements.
        cy.xpath('Addto cart button').click() //Add to cart
        //Go to each and every item in the cart and take the count of the products in the list. If the quantity is more than 5 then the billing should be calculated according to it.
    var total_price =0;
    var n = cy.xpath('//div[@data-item-count]').its('length'); //Will provide the number of elements in the cart.

    var priceOfEachKit = 10;
        var TotalPriceofTestKits;

        for (var i=0;i<=n; i++){
            var quantity =  cy.xpath('//div[@data-item-count=1]')// calculate the price of the kits basing on the offer.
            .invoke('attr', 'data-quantity').its(length);
            if(quantity > 5){
                var numberofsets = quantity/5;
                var ramianing = quantity%5;
                TotalPriceofTestKits= numberofsets*priceOfEachKit + remaining*priceOfEachKit;
                
            }
        }
        
            var price =  cy.xpath('//div[@data-item-count=1]') // To get the price of the kits in the cart.
            .invoke('attr', 'data-price');
            price.should('eq','TotalPriceofTestKits') // We can get the total price of elements i the cart. Once we get Total price, we can match with the total amount in the bill and assert it.
        
        
        })
    })

    it('checkout with Applying offers and Billing validations ', () => {

        SearchProductP.visit()
        SearchProductP.searchProduct("covid test kit")
        cy.url().should('contain.text','kit')
        cy.xpath('//div[@data-cel-widget="search_result_2"]').click(); // We can write a loop for the list of elements.
        cy.xpath('Addto cart button').click() //Add to cart
        //Go to each and every item in the cart and take the count of the products in the list. If the quantity is more than 5 then the billing should be calculated according to it.
    var total_price =0;
    var n = cy.xpath('//div[@data-item-count]').its('length'); //Will provide the number of elements in the cart.

    var priceOfEachKit = 10;
        var TotalPriceofTestKits;
        cy.xpath('clickOnApplyOffers').click()


        for (var i=0;i<=n; i++){
            var quantity =  cy.xpath('//div[@data-item-count=1]')// calculate the price of the kits basing on the offer.
            .invoke('attr', 'data-quantity').its(length);
            if(quantity > 5){
                var numberofsets = quantity/5;
                var ramianing = quantity%5;
                TotalPriceofTestKits= numberofsets*priceOfEachKit + remaining*priceOfEachKit;
                
            }
        }
        var kitsprice = quantity*priceOfEachKit;
        //When we click on apply offers, if it is taking the offer codes, the discount on kits should not be considered.
        //So the price should be the same.
            var price =  cy.xpath('//div[@data-item-count=1]') // To get the price of the kits in the cart.
            .invoke('attr', 'data-price');
            price.should('eq','kitsprice') // We can get the total price of elements i the cart. Once we get Total price, we can match with the total amount in the bill and assert it.


        

        var totalcalculatedBill = 0;
        for (var i=0;i<=n; i++){
            var price =  cy.xpath('//div[@data-item-count=1]') // To get the price of the kits in the cart.
            .invoke('attr', 'data-price');
            totalcalculatedBill = totalBilledprice + price;
            // We can get the total price of elements i the cart. Once we get Total price, we can match with the total amount in the bill and assert it.
        }    
        var billWithOffers =0 ;
        //var billWithkitDiscounts = 0;
        billWithOffers = totalcalculatedBill - totalcalculatedBill*.15 //assuming the offer is 15%

        
        var DisplayedBill = cy.xpath('total bill element').invoke('attr','dat-price');
        DisplayedBill.should('eq', billWithOffers)

    //Many permutations and combinations testing will present. Covered little part of the code in limited time.
    


    })