let loginPages ={
    locators:{
        url:           ()=> cy.visit("https://www.jeevansathi.com/"),
        loginButton:   ()=> cy.contains("LOGIN"),
        waitTime:      ()=> cy.wait(2000),
        userName:      ()=> cy.get("#email")

    },

    openAndVerifyJeevanSathiWeb: function() {
        this.locators.url()
        cy.url().then(function(urlText) {
            expect(urlText).to.include("jeevansathi")
        })
    },

    loginToJeevanSathi: function() {
        this.locators.loginButton().click()
        this.locators.waitTime()
        this.locators.userName().click().type("muthu")


        
    }





}
module.exports = loginPages;