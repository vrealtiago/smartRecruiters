describe('Test Postings list', () => {
  it('Open App component', () => {
    cy.visit('/postings-list')
  })
  it('Filter empty postings by country', () => {
    cy.get('#countryField')
      .type('Japan').should('have.value', 'Japan')
      .get('#JP').click()
  })
  it('Show msg for empty posting', () => {
    cy.get('#msgNotFound').contains('Postings not found')
  })
  it('Filter postings by country', () => {
    cy.get('#countryField')
      .clear().should('have.value', '')
      .type('Poland').should('have.value', 'Poland')
      .get('#PL').click()
  })
  it('Filter postings by Department', () => {
    cy.get('#departmentField')
      .type('Engineering').should('have.value', 'Engineering')
      .get('#18571').click()
  })
  it('Check is list of posting exist', () => {
    cy.get('[data-test="posting"]').within(() => {
      cy.get('div').should('exist')
    })
  })
  it('Get posting name and location ', () => {
    cy.get('[data-test="posting"]').within(() => {
      cy.get('#743999750220566').should('exist').within(() =>{
        cy.get('[data-test="posting-name"]').contains('Frontend Software Engineer (Regular/Senior/Lead)')
        cy.get('[data-test="posting-location"]').contains('Kraków, pl')
      })
    })
  })
  it('Select posting and go to details ', () => {
    cy.get('#743999750220566').should('exist').within(() =>{
      cy.get('[data-test="posting-name"]').click()
    })
  })
})
