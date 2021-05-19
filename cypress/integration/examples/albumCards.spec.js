context('Album Cards', () => {
  beforeEach(() => {
    cy
    .intercept('POST', 'https://pure-hollows-05817.herokuapp.com/https://tranquil-depths-91575.herokuapp.com/graphql', (req) => {
      if (req.body.query.includes('Freak Out')) {
        req.reply({ fixture: 'freakOut.js' })
      }
    })
    .visit('https://turing-selector.herokuapp.com/')
  })

  it('Should have an album cover', () => {
    cy
    .get('[data-cy=cover]').should('exist')
    .should('have.attr', 'src', 'https://img.discogs.com/lcaNDTtBOojvbG2a5Fo8xdfzFXI=/fit-in/600x606/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-538636-1435321700-7614.jpeg.jpg')
  })

  it('Should have an album card with a title', () => {
    cy
    .get('[data-cy=card]').should('exist')
    .get('[data-cy=title]').should('exist').should('contain', 'Freak Out')
  })

  it('Should have an album artist name', () => {
    cy
    .get('[data-cy=artist]').should('exist')
    .should('contain', 'The Mothers')
  })

  it('Should have an album version release date', () => {
    cy
    .get('[data-cy=date]').should('exist')
    .should('contain', 'This Edition Released in 1966')
  })

  it('Should have album genres', () => {
    cy
    .get('[data-cy=genre]').should('exist')
    .should('contain', 'Electronic')
    .should('contain', 'Rock')
  })

  it('Should have a link to purchase the album on discogs', () => {
    cy
    .get('[data-cy=discogs-link]').should('exist')
    .should('contain', 'Purchase on Discogs')
  })
})
