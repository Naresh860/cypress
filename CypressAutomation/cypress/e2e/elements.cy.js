describe("Basic UI element handling",()=>{
    it ('UI elemnt and test',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('[value="radio2"]').check().should('be.checked')
        cy.get('#checkBoxOption2').check().should ('be.checked')
        cy.wait (4000)
        cy.get ('#checkBoxOption2').uncheck().should ('not.be.checked')
        

    })
})