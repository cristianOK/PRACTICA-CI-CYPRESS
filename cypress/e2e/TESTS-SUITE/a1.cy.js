/// <reference types="cypress" />
import POM from "./POM";


describe('REPORTS - HTML-', () => {

    beforeEach(() => {     
        cy.visit("https://automationexercise.com").title().should("eq","Automation Exercise")
      });
 
      it('USANDO POM', () => {
        POM.text_suscription()
        POM.email_suscription()
        POM.bottom_suscription()
        POM.alert_suscription()
        
      });

      it('USANDO COMMANDS', () => {
        cy.VALIDATOR_LOGIN()
      });

      it('VALIDANDO ESTE TEXTO DE PRUEBA', () => {
        cy.get('.active > :nth-child(1) > p').should("contain","API testing either they are at beginner")
      });
    
      it('IMAGEN VISIBLE', () => {
        cy.get('a > img').should("be.visible")
      });

      it('FEATURE ITEMS', () => {
        cy.get('.features_items > .title').should("contain","Features Items")
      });

      it('SUSCRIPCION CHECK VISIBLE', () => {
        cy.get('.single-widget > h2').contains("Subscription").should("be.visible")
      });
   
      it.only('CATEGORY VISIBLE', () => {
        cy.get('.left-sidebar > :nth-child(1)').should("contain","Category").should("be.visible")
      });
        










    });

     


     
