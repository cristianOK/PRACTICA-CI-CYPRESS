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

      it('PRACTICANDO......', () => {     
        cy.get('.active > :nth-child(1) > h1').should("contain","AutomationExercise").should("be.visible")

      });

      it.only('VERIFICANDO TITULÑO H2', () => {
        cy.get('.left-sidebar').contains("Category").should("be.visible")
      });



    });
