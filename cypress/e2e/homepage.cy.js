describe('Rancid Tomatillos Homepage', () => {

beforeEach(() => {
  cy.visit('http://localhost:3000')
})

  it('Should be able to visit the page and render the title', () => {
   cy.contains('h1', 'Rancid Tomatillos')
  })

  it('Should display all movies', () => {
    cy.get('[data-cy="movie"]').should('have.length', 40)
  })

})

