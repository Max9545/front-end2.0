**UNCOMMENT WHEN BEHAVIOR IS IMPLEMENTED**
describe('', () => {
  beforeEach(() => {
    cy
    .intercept('POST', 'https://pure-hollows-05817.herokuapp.com/https://tranquil-depths-91575.herokuapp.com/graphql', (req) => {
      if (req.body.query.includes('The Payback')) {
        req.reply({ fixture: 'details-fixture.json' })
      }
    })
    .visit('https://turing-selector.herokuapp.com/')
  })

  it('should display the current album cover', () => {
    cy.get('[data-cy=details_album-cover')
      .should('have.attr', 'src', 'https://img.discogs.com/MUELn9ObTL-ZpxyUgF5M9D_Kumc=/fit-in/600x591/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-719877-1247870750.jpeg.jpg')
  });

  it('should allow users to add the current album to their collection of favorites', () => {
    cy.get('[data-cy=details_favorites-button')
      .should('exist')
  });

  it('should allow users to visit discogs.com from the modal', () => {
    cy.get('[data-cy=details_discogs-link')
      .should('exist')
  });

  it('should display the current album\'s artsit', () => {
    cy.get('[data-cy=details_artist-name')
      .contains('James Brown')
  });

  it('should display the current album title', () => {
    cy.get('[data-cy=details_album-title')
      .contains('The Payback')
  });

  it('should display the year the current album was released', () => {
    cy.get('[data-cy=details_release-year')
      .contains('Released: 1973')
  });

  it('should display a playlist where users can preview that album', () => {
    cy.get('[data-cy=details_web-player')
      .should('have.attr', 'src')
      .should('include', 'https://open.spotify.com/embed/album/')
  });
})