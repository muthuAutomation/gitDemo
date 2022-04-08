let fixtureObj = require("../../../fixtures/testData.json")
let loginPage = {

    locators:{
        url:        ()=> cy.visit(fixtureObj.url),
        login:      ()=> cy.get("#loginTopNavBar"),
        userName:   ()=> cy.get("#email"),
        password:   ()=> cy.get("#password"),
        loginBUtton:()=> cy.contains("LOGIN")
    },
    
    openJeevanSathiUrl: function() {
        this.locators.url()
        this.locators.login().click()
        cy.wait(2000)
    },

    loginToJeevan: function() {
        this.locators.userName().type(fixtureObj.userName)
        this.locators.password().type(fixtureObj.password)
        this.locators.loginBUtton().click()
    }

    












    
}
module.exports = loginPage