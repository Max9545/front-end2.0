context('Album Cards', () => {
  beforeEach(() => {
    cy
    
    .intercept('POST', 'https://pure-hollows-05817.herokuapp.com/https://tranquil-depths-91575.herokuapp.com/graphql', (req) => {
      if (req.body.query.includes('Miles Davis')) {
        req.reply({ fixture: 'albumCards.js' })
      }
    })
    // .visit('https://turing-selector.herokuapp.com/')
    .visit('http://localhost:3000/')
  })

  it('Should have an album cover', () => {
    cy
    .get('[data-cy=card_cover]').should('exist')
    .should('have.attr', 'src', 'https://img.discogs.com/qM6vhS4-h_W6VJvo6xqM542yo80=/fit-in/600x597/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13366963-1563275592-3337.jpeg.jpg')
  })

  it('Should have an album card with a title', () => {
    cy
    .get('[data-cy=card_card]')
    .should('exist')
    .get('[data-cy=card_title]').should('exist').should('contain', 'Miles Davis In A Blue Mood')
  })

  it('Should have an album artist name', () => {
    cy
    .get('[data-cy=card_artist-container]')
    .should('exist')
    .should('contain', 'Miles Davis')
  })

  it('Should have an album version release date', () => {
    cy
    .get('[data-cy=card_date]').should('exist')
    .should('contain', 'This Edition Released in 1951')
  })

  it('Should have album fomat', () => {
    cy
    .get('[data-cy=card_genre]').should('exist')
    .should('contain', '7\", EP')
  })

  it('Should have album label', () => {
    cy
    .get('[data-cy=card_genre]').should('exist')
    .should('contain', 'Prestige')
  })
})
