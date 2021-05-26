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
      expect(loc.pathname).to.eq('/your-favorites')
    })
  })

  it('Should accurately navigate to the home page', () => {
    cy.visit('http://localhost:3000/your-favorites');
    cy.get('[data-cy="link-to-home"]').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/')
    })
  })

  it('Should display a bad path message to all invalid paths', () => {
    cy.visit('http://localhost:3000/some-invalid-path-nonsense');
    cy.get('h2')
      .should('contain', "⚠️ We're sorry - something went wrong! Please try again later.");
  })
});