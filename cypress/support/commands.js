
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("VALIDATOR_LOGIN",()=>{
    cy.get('.shop-menu > .nav > :nth-child(4) > a').contains(" Signup / Login").click()
    cy.get('.login-form > h2').contains("Login to your account").should("be.visible")
    cy.get('.login-form > form > [type="email"]').type("pablo222@gmail.com")
    cy.get('[type="password"]').type("qweqwewq")
    cy.get('.login-form > form > .btn').click()
    cy.get('.login-form > form > p').contains("Your email or password is incorrect!").should("be.visible") 

})

Cypress.Commands.add("LOGEARSE",()=>{
    cy.fixture("a4_FIXTURE").then((a4)=>{
        cy.get(a4.Campo_Email).type(a4.Email)
        cy.get(a4.campo_password).type(a4.password)
        cy.get(a4.botonLOGIN).click()
        cy.get(a4.NAME_VISIBLE).should("contain","Logged in as pablo")
  })
})





