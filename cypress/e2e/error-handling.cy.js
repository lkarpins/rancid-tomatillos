describe('Handles errors gracefully', () => {


 it('Should display error message when there is a server error', () => {
    cy.intercept(
      'GET', 
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies', 
      { forceNetworkError: true }
    ).as('getNetworkFailure')
      cy.visit('http://localhost:3000')
      cy.wait('@getNetworkFailure')
      cy.get('[data-cy="error"]').contains('Uh oh! Something went wrong, please try again!')
})
})
