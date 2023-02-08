describe('USER HISTORY N°53', () => {

    beforeEach('DADO QUE EL USUARIO SE SITUA EN EL HOME PAGE Y ACCEDE A LA SECCION DE LOGIN',() => {     
        cy.visit("https://automationexercise.com")
        cy.url().should("include","automationexercise.com")
        cy.location("protocol").should("contains","https")
        cy.contains(" Signup / Login").click()
        cy.location("pathname").should("include","/login")
      });
 
      it('TC N°1: VALIDAR LOGIN CON DATOS VALIDOS', () => {
        cy.LOGEARSE()
        
      });






    })