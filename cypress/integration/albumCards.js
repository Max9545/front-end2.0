describe('Album Cards', () => {
  beforeEach(() => {
    cy
    // .intercept('POST', 'https://tranquil-depths-91575.herokuapp.com/graphql', { fixture: 'albumsCards.json'})
    .intercept('POST', 'https://tranquil-depths-91575.herokuapp.com/graphql', (req) => {
      if (req.body.query.includes('artistAlbums')) {
        req.reply({ fixture: 'albumsCards.json' })
      }
    })
  })


  it('Should have an album cover', () => {
    cy
    .visit('http://localhost:3000/')
    .get('[data-cy=card_card]')
    .get('[data-cy=card_cover]').should('exist')
    .should('have.attr', 'src', 'https://img.discogs.com/S-ffrwNacsI2r9pt_O2t9aoSZqs=/fit-in/600x603/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-9896569-1621854039-3478.jpeg.jpg')
  })

  it('Should have an album card with a title', () => {
    cy
    .get('[data-cy=card_card]')
    .should('exist')
    .get('[data-cy=card_title]').should('exist').should('contain', 'Mating Call ')
  })

  it('Should have an album artist name', () => {
    cy
    .get('[data-cy=card_card]')
    .get('[data-cy=card_artist-container]')
    .should('exist')
    .should('contain', 'John Coltrane')
  })

  it('Should have an album version release date', () => {
    cy
    .get('[data-cy=card_date]').should('exist')
    .should('contain', '1956')
  })

  it('Should have album fomat', () => {
    cy
    .get('[data-cy=card_genre]').should('exist')
    .should('contain', '7\", EP')
  })

  it('Should have album label', () => {
    cy
    .get('[data-cy=card_card]')
    .get('[data-cy=card_genre]').should('exist')
    .should('contain', 'Prestige')
  })
})
