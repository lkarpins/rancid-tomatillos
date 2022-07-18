describe('Movie Summary Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/movies/581392')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/:id', { fixture: 'selected-movie'})
  })

  it('Should display page title', () => {
    cy.contains('header', 'Rancid Tomatillos')
  })

  it('Should display movie summary title', () => {
    cy.get('[data-cy="summary-title"]').contains('Peninsula')
  })

  it('Should display movie tagline', () => {
    cy.get('[data-cy="summary-tagline"]').contains('Escape')
  })

  it('Should display movie overview', () => {
    cy.get('[data-cy="summary-overview"]').contains('A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.')
  })

  it('Should display movie budget', () => {
    cy.get('[data-cy="summary-budget"]').contains('$17,000,000.00')
  })

  it('Should display movie genres', () => {
    cy.get('[data-cy="summary-genres"]').contains('Action, Horror, Thriller')
  })

  it('Should display movie runtime', () => {
    cy.get('[data-cy="summary-runtime"]').contains('114 minutes')

  })

  it('Should display movie revenue', () => {
    cy.get('[data-cy="summary-revenue"]').contains('$35,878,266.00')

  })

  it('Should display movie ratings', () => {
    cy.get('[data-cy="summary-rating"]').contains('7.2')

  })

  it('Should display movie release date', () => {
    cy.get('[data-cy="summary-release"]').contains('2020-07-15')

  })

  it('Should display movie backdrop image', () => {
    cy.get('[data-cy="summary-backdrop"]').should('be.visible')
  })

  it('Should display movie trailer', () => {
    cy.get('[data-cy="movie-trailer"]').should('be.visible')
  })

  it('Should return to main page on button click', () => {
    cy.get('[data-cy="summary-return-button"]').click()
      .url().should('eq','http://localhost:3000/')
  })

})