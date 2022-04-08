///<reference types ="Cypress"/>
let loginPageObj = require("../appPageObjects/loginPages")
describe("jeevan",function() {
    it("test",function() {
        loginPageObj.openAndVerifyJeevanSathiWeb()
        loginPageObj.loginToJeevanSathi()
    })
})