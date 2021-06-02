describe('Test App', () => {
  it('Open App component', () => {
    cy.visit('/')
  })
  it('Get App content', () => {
    cy.get('[data-test="app"]').within(() => {
      cy.get('router-outlet').should('exist')
    })
  })
})
