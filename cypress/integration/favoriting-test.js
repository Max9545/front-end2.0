describe('User can favorite or unfavorite any single album with the favoriting button that will result in an accurate render on the /your-favorites route', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/The%20Wall')
  })
  
  it('Should have a favoriting button that starts out unfilled', () => {
    cy.get('[data-cy=details_favorites-button_unfilled]')
      .should('exist')
      .and('be.visible')
  })

  it('Favoriting button should render UI change from unfilled to filled icon onClick', () => {
    cy.get('[data-cy=details_favorites-button_unfilled]')
      .click()
    cy.get('[data-cy=details_favorites-button_filled]')
      .should('exist')
      .and('be.visible')
  })

  it('Favoriting button should be able to toggle between unfilled and filled icons on multiple clicks', () => {
    cy.get('[data-cy=details_favorites-button_unfilled]')
      .click()
    cy.get('[data-cy=details_favorites-button_filled]')
      .click()
    cy.get('[data-cy=details_favorites-button_unfilled]')
      .should('exist')
      .and('be.visible')
  })

  it('User should be able to see the same al')
})