describe('User can favorite or unfavorite any single album with the favoriting button that will result in an accurate render on the /your-favorites route', () => {
  
  beforeEach(() => {
    cy
      .intercept('POST', 'https://tranquil-depths-91575.herokuapp.com/graphql', (req) => {
      if (req.body.query.includes('The Payback')) {
        req.reply({ fixture: 'details-fixture.json' })
      }
    })
      .intercept('POST', 'https://tranquil-depths-91575.herokuapp.com/graphql', (req) => {
      if (req.body.query.includes('Freak Out')) {
        req.reply({ fixture: 'freakOut.json' })
      }
    })
  })
  
  it('Should have a favoriting button that starts out unfilled', () => {
    cy.visit('http://localhost:3000/The%20Payback')
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
    cy.get('[data-cy=details_favorites-button_filled]')
      .click()
    cy.get('[data-cy=details_favorites-button_unfilled]')
      .click()
    cy.get('[data-cy=details_favorites-button_filled]')
      .should('exist')
      .and('be.visible')
  })

  it('User should be able to see the same album favorited rendered on the /your-favorites path', () => {
    cy.get('[data-cy=link-to-liked]')
      .click();
    cy.get('[data-cy=card_cover]')
      .should('have.attr', 'src', 'https://img.discogs.com/MUELn9ObTL-ZpxyUgF5M9D_Kumc=/fit-in/600x591/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-719877-1247870750.jpeg.jpg');
    cy.get('[data-cy=card_title]')
      .should('contain', 'The Payback');
    cy.get('[data-cy=card_artist-container]')
      .should('contain', 'James Brown');
    cy.get('[data-cy=card_date]')
      .should('contain', 'This Edition Released in 1973');
    cy.get('[data-cy=card_genre]')
      .should('contain', 'Funk')
      .should('contain', 'Soul');
  })

  it('User should be able to favorite multiple albums and see them rendered on the /your-favorites path accurately', () => {
    cy.get('[data-cy=search__input]').type('Freak Out');
    cy.get('[data-cy=search__select]').select('Album');
    cy.get('[data-cy=search-submit]').click();
    cy.get('[data-cy=details_favorites-button_unfilled]')
      .click();
    cy.get('[data-cy=link-to-liked]')
      .click();
    cy.get('[data-cy=card-container] > [data-cy=card_card]')
      .eq(0)
      .get('[data-cy=card_title]')
      .should('contain', 'The Payback');
    cy.get('[data-cy=card-container] > [data-cy=card_card]')
      .eq(1)
      .get('[data-cy=card_title]')
      .should('contain', 'Freak Out');
  })

  it('User should be able to remove a favorited album with the favoriting button and observe accurate render on the /your-favorites path', () => {
    cy.get('[data-cy=search__input]').type('The Payback');
    cy.get('[data-cy=search__select]').select('Album');
    cy.get('[data-cy=search-submit]').click();
    cy.get('[data-cy=details_favorites-button_filled]')
      .should('exist')
      .and('be.visible')
      .click()
    cy.get('[data-cy=link-to-liked]')
      .click();
    cy.get('[data-cy=card-container] > [data-cy=card_card]')
      .eq(0)
      .get('[data-cy=card_title]')
      .should('contain', 'Freak Out');
  })
})