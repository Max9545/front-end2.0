/// <reference types="cypress" />

context('Album Cards', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should have an album title', () => {
    cy.get('[data-cy=card]').should('exist')
    .get('[data-cy=title]').should('exist').should('contain', 'Freak Out')
  })

  it.only('Should have album genres', () => {
    cy
    .get('[data-cy=genre]').should('exist')
    .should('contain', 'Electronic')
    .should('contain', 'Rock')
  })
  
})
