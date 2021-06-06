context('Album Cards', () => {
  beforeEach(() => {
    cy
    .intercept('POST', 'https://tranquil-depths-91575.herokuapp.com/graphql', (req) => {
      if (req.body.query.includes('artistAlbums')) {
        req.reply({ fixture: 'albumsCards.json' })
      }
    })
    .intercept('POST', 'https://tranquil-depths-91575.herokuapp.com/graphql', (req) => {
      if (req.body.query.includes('randomAlbum')) {
        req.reply({ fixture: 'freakOut.json' })
      }
    })
  })

  it.only('Should display a random album with its cover', () => {
      cy
      .visit('http://localhost:3000/')
      .get('[data-cy=link-to-random-album]')
      .click()
      .get('[data-cy=details_album-cover')
      .should('have.attr', 'src', 'https://i.scdn.co/image/ab67616d0000b273aa694f60a6b960b475ec246a')
  });
    
  it('should allow users to add the current album to their collection of favorites', () => {
    cy
    .get('[data-cy=details_favorites-button')
    .should('exist')
  });

  it('should allow users to visit discogs.com from the modal', () => {
    cy
    .get('[data-cy=details_discogs-link')
    .should('exist')
  });

  it('should display the current album\'s artsit', () => {
    cy
    .get('[data-cy=details_artist-name')
    .contains('Gordon Lightfoot')
  });

  it('should display the current album title', () => {
    cy
    .get('[data-cy=details_album-title')
    .contains('East Of Midnight')
  });

  it('should display the year the current album was released', () => {
    cy
    .get('[data-cy=details_release-year')
    .contains('Released: 1986')
  });

  it.only('should display the genres of that album', () => {
    cy
    .get('[data-cy=details_genre-container]').should('exist')
    .should('contain', 'Rock')
    .should('contain', 'Pop')
    .should('contain', 'Folk, World, & Country')
  });

  it('should display a playlist where users can preview that album', () => {
    cy
    .get('[data-cy=details_web-player')
    .should('have.attr', 'src')
    .should('include', 'https://open.spotify.com/embed/album/')
  });
})