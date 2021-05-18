/// <reference types="cypress" />

context('Album Cards', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should have an album cover', () => {
    cy
    .get('[data-cy=cover]').should('exist')
    .should('have.attr', 'src', 'https://img.discogs.com/lcaNDTtBOojvbG2a5Fo8xdfzFXI=/fit-in/600x606/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-538636-1435321700-7614.jpeg.jpg')
  })

  it('Should have an album title', () => {
    cy
    .get('[data-cy=card]').should('exist')
    .get('[data-cy=title]').should('exist').should('contain', 'Freak Out')
  })

  it.only('Should have an album artist name', () => {
    cy
    .get('[data-cy=artist]').should('exist')
    .should('contain', 'The Mothers')
  })

  it('Should have album genres', () => {
    cy
    .get('[data-cy=genre]').should('exist')
    .should('contain', 'Electronic')
    .should('contain', 'Rock')
  })
  
})
