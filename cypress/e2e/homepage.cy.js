describe('Rancid Tomatillos Homepage', () => {

beforeEach(() => {
  cy.visit('http://localhost:3000')
  cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies'})
})

  it('Should be able to visit the page and render the title', () => {
   cy.contains('header', 'Rancid Tomatillos')
  })

  it('Should display all movies', () => {
    cy.get('[data-cy="movie"]').should('have.length', 4)
  })

  it('Should display rendered movie poster images', () => {
    cy.get('[data-cy="movie-image"]').should('be.visible')
  })

  it('Should display rendered movie ratings' , () => {
    cy.get('[data-cy="movie-rating"]').contains(6.9)
    cy.get('[data-cy="movie-rating"]').contains(5.1)
    cy.get('[data-cy="movie-rating"]').contains(7.3)
    cy.get('[data-cy="movie-rating"]').contains(5.9)

  })

  it('Should display movie summary when a movie is clicked', () => {
    cy.get('[data-cy="movie-image"]').first().click()
    .url().should('include', '/movies/694919')
  })

  it('Should filter movies rendered by search', () => {
    cy.get('[data-cy="search"]').type('mulan')
    cy.get('[data-cy="movie"]').should('have.length', 1)
  })

})
