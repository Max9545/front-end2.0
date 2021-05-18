import { cyan } from "@material-ui/core/colors"

describe('', () => {
  beforeEach(() => {
    cy.intercept('https://pure-hollows-05817.herokuapp.com/https://tranquil-depths-91575.herokuapp.com/graphql', 
      {fixture: 'details-fixture.json'})
    cy.visit('http://localhost:3000/')
  });

  it.only('should display the current album cover', () => {
    cy.get('[data-cy=album-cover')
      .should('exist')
  });

  it('should allow users to add the current album to their collection of favorites', () => {
    cy.get('[data-cy=favorites-button')
      .should('exist')
  });

  it('should allow users to visit discogs.com from the modal', () => {
    cy.get('[data-cy=discogs-link')
      .should('exist')
  });

  it('should display the current album\'s artsit', () => {
    cy.get('[data-cy=artist-name')
      .should('eq', 'James Brown')
  });

  it('should display the current album title', () => {
    cy.get('[data-cy=album-title')
      .should('eq', 'The Payback')
  });

  it('should display the year the current album was released', () => {
    cy.get('[data-cy=release-year')
      .should('eq', 'Released: 1973')
  });

  it('should display a playlist where users can preview that album', () => {
    cy.get('[data-cy=web-player')
      .should('exist')
  });

  it('should allow users to close the modal window', () => {
    cy.get('[data-cy=close-button')
      .should('exist')
  });
})