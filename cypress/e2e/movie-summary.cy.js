describe('Movie Summary Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/movies/694919')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/:id', { fixture: 'selected-movie'})
  })

  it('Should display page title', () => {
    cy.contains('h1', 'Rancid Tomatillos')
  })

  it('Should display movie summary title', () => {
    cy.get('[data-cy="summary-title"]').contains('Money Plane')
  })

  it('Should display movie tagline', () => {

  })

  it('Should display movie overview', () => {
    
  })

  it('Should display movie budget', () => {
    
  })

  it('Should display movie genres', () => {
    
  })

  it('Should display movie runtime', () => {
    
  })

  it('Should display movie revenue', () => {
    
  })

  it('Should display movie ratings', () => {
    
  })

  it('Should display movie release date', () => {
    
  })

  it('Should display movie backdrop image', () => {
    
  })

  it('Should return to main page on button click', () => {
    
  })

})