describe('Test Posting details', () => {
  it('Open App component', () => {
    cy.visit('./posting-details/743999750220566')
  })
  it('check Name and location', () => {
    cy.get('[data-test="posting-name"]').contains('Frontend Software Engineer (Regular/Senior/Lead')
    cy.get('[data-test="posting-location"]').contains('Kraków, pl')
  })
  it('check Job description', () => {
    cy.get('[data-test="job-description"]').within(() =>{
      cy.get('#jobDescriptionText').should('exist')
    })
  })
  it('check Qualification', () => {
    cy.get('[data-test="job-qualifications"]').within(() =>{
      cy.get('#qualificationsText').should('exist')
    })
  })
  it('Test Back button', () => {
    cy.get('[data-test="back"]').contains('Back to the list').click()
  })
})
