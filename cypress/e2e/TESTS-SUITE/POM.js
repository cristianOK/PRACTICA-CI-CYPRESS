class SUSCRIPTION{
    homepage1(){cy.visit("https://automationexercise.com").title().should("eq","Automation Exercise")}
    text_suscription(){cy.get("h2").contains("Subscription").should("be.visible")}
    email_suscription(){cy.get("[id='susbscribe_email']").type("pablo222@gmail.com")}
    bottom_suscription(){cy.get("[id='subscribe']").click()}
    alert_suscription(){cy.get('.alert-success').contains("You have been successfully subscribed!").should("be.visible")}
}















module.exports= new SUSCRIPTION();