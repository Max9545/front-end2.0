describe('User navigation capabilities', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('The nav bar should exist', () => {
    cy.get('[data-cy="navigation"]').should('exist')
  })
})