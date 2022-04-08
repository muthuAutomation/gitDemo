///<reference types ="cypress"/>
let loginPageObj = require("../appPageObjects/loginPage")

describe("Jeeven Sathi website",function() {

  it("LOGIN TO JEEVANSATHI WEBSITE",function() {
   loginPageObj.openJeevanSathiUrl()
   loginPageObj.loginToJeevan()
  }) 
  
  



}) 