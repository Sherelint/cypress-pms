describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
  cy.get('input[id="email"]').type("fdegracia@msupply.com.pa")
  cy.get('input[id="password"]').type("12345")
  cy.get('button').contains("Iniciar Sesión").click()

  cy.get('button').contains('Create Report').click()
  cy.get('h5').contains('Create Report').should('be.visible')
  })
})