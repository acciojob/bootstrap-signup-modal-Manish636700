describe('Signup Modal', () => {
  it('should open the modal and close it when the close button is clicked', () => {
    // Visit the page (adjust to your local test URL)
    cy.visit('http://localhost:3000');

    // Click on the 'Sign Up' button to open the modal
    cy.get('#signUpBtn').click();

    // Wait for the modal to appear and ensure it is visible
    cy.get('#signupModal').should('be.visible');

    // Wait for the close button inside the modal and ensure it is visible
    cy.get('.close-btn').should('be.visible');

    // Click the close button to close the modal
    cy.get('.close-btn').click();

    // Verify the modal is no longer visible after closing
    cy.get('#signupModal').should('not.be.visible');
  });
});
