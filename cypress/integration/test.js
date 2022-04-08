describe("exp",function() {
    it("exm",function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/")
        cy.url().then(function(urlText) {
            expect(urlText).to.equal("https://rahulshettyacademy.com/AutomationPractice/#/")
        })
    })
})