describe('Sign Up Modal Tests', () => {
  it('should open and close the modal', () => {
    // Visit the page containing the modal
    cy.visit('your-page-url');

    // Click the Sign Up button to open the modal
    cy.get('#signupBtn').click();

    // Ensure the modal is visible
    cy.get('#signupModal').should('be.visible');

    // Close the modal by clicking the close button in the modal header
    cy.get('#signupModal .modal-content .close').first().click();

    // Ensure the modal is hidden after clicking the close button
    cy.get('#signupModal').should('not.be.visible');
  });

  it('should close the modal when clicking the close button in the footer', () => {
    // Visit the page containing the modal
    cy.visit('your-page-url');

    // Click the Sign Up button to open the modal
    cy.get('#signupBtn').click();

    // Ensure the modal is visible
    cy.get('#signupModal').should('be.visible');

    // Close the modal by clicking the close button in the footer
    cy.get('#signupModal .modal-footer .close').click();

    // Ensure the modal is hidden after clicking the close button
    cy.get('#signupModal').should('not.be.visible');
  });
});
