///<reference types ="Cypress"/>
let loginPageObj = require("../appPageObjects/loginPages")
describe("jeevan",function() {
    it("test",function() {
        loginPageObj.openAndVerifyJeevanSathiWeb()
        cy.log("am the king")
        loginPageObj.loginToJeevanSathi()
        cy.log("am the king")
    })
})