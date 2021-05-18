describe('User navigation capabilities', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('The nav bar should exist', () => {
    cy.get('[data-cy="navigation"]')
      .should('exist')
      .and('be.visible');
  })

  it('Links to all app views should exist', () => {
    cy.get('[data-cy="link-to-home"]')
      .should('exist')
      .and('be.visible');

    cy.get('[data-cy="link-to-liked"]')
      .should('exist')
      .and('be.visible');
  })

  it('Should accurately navigate to the liked page', () => {
    cy.get('[data-cy="link-to-liked"]').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/liked')
    })
  })

  it('Should accurately navigate to the home page', () => {
    cy.visit('http://localhost:3000/liked');
    cy.get('[data-cy="link-to-home"]').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/')
    })
  })
});