describe ('incorrect login practice',()=>{
    it ('verify login with correct and incorrect login credential',()=>{

        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.get("input[name='username']").type("student")
        cy.get('#password').eq(0).type("Password123")
        cy.get('.btn').click()
        cy.get('.post-title').should('have.text','Logged In Successfully')
        cy.get('strong').eq(1).should ('have.text, Congratulations student. You successfully logged in!')
    })
}) //hello