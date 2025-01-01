it('closes the modal when the close button is clicked', () => {
  cy.get('button[data-bs-toggle="modal"]').click(); // Open the modal
  cy.get('.modal').should('be.visible'); // Ensure the modal is visible
  cy.get('.btn-close').click(); // Click the close button
  cy.get('.modal').should('not.be.visible'); // Ensure the modal is closed
});
