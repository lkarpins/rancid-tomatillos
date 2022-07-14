describe('Rancid Tomatillos Homepage', () => {

beforeEach(() => {
  cy.visit('http://localhost:3000')
  cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies'})
})

  it('Should be able to visit the page and render the title', () => {
   cy.contains('h1', 'Rancid Tomatillos')
  })

  it('Should display all movies', () => {
    cy.get('[data-cy="movie"]').should('have.length', 40)
  })

  it('Should display rendered movie titles', () => {
    cy.get('[data-cy="movie-title"]').contains('Money Plane')
    cy.get('[data-cy="movie-title"]').contains('Mulan')
    cy.get('[data-cy="movie-title"]').contains('SpongeBob')
  })

  it('Should display rendered movie poster images', () => {
    cy.get('[data-cy="movie-image"]').should('be.visible')
  })

  it('Should display rendered movie ratings' , () => {
    cy.get('[data-cy="movie-rating"]').contains(6.9)
    cy.get('[data-cy="movie-rating"]').contains(7.3)
    cy.get('[data-cy="movie-rating"]').contains(5.1)
  })

  it('Should display movie summary when a movie is clicked', () => {
    cy.get('[data-cy="movie-image"]').first().click()
    .url().should('include', '/movies/694919')
  })

//sad path for async, intercept get with wrong url, display error component

})

