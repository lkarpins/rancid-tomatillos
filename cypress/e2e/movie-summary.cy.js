describe('Movie Summary Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should display a summary of the movie clicked', () => {
    cy.get('[data-cy="movie"]').contains('aKx1ARwG55zZ0GpRvU2WrGrCG9o').click()

  })
})