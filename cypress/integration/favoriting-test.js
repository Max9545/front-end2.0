describe('User can favorite or unfavorite any single album with the favoriting button that will result in an accurate render on the /your-favorites route', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/The%20Wall')
  })
  
  it('Should have a favoriting button', () => {
    cy.get('[data-cy=details_favorites-button_unfilled]')
      .should('exist')
      .and('be.visible')
  })

  it('User should be able to click on favoriting button', () => {
    cy.get('[data-cy=details_favorites-button_unfilled]')
      .click()
    cy.get('[data-cy=details_favorites-button_filled]')
      .should('exist')
      .and('be.visible')
  })
})