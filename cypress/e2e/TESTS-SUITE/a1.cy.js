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
        cy.CHECK-VALIDATOR-LOGIN()
      });

    });