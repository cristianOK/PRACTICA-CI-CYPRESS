
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("CHECK-VALIDATOR-LOGIN",()=>{
    cy.get('.shop-menu > .nav > :nth-child(4) > a').contains(" Signup / Login").click()
    cy.get('.login-form > h2').contains("Login to your account").should("be.visible")
    cy.get('.login-form > form > [type="email"]').type("pablo222@gmail.com")
    cy.get('[type="password"]').type("qweqwewq")
    cy.get('.login-form > form > .btn').click()
    cy.get('.login-form > form > p').contains("Your email or password is incorrect!").should("be.visible") 

})




