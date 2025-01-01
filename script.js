describe('Signup Modal', () => {
  it('should open and close the signup modal', () => {
    // Visit the page
    cy.visit('your_page_url');

    // Assert that the modal is initially hidden
    cy.get('#signupModal').should('not.be.visible');

    // Trigger the modal to open
    cy.get('button[data-bs-toggle="modal"]').click();

    // Assert that the modal is visible after clicking the button
    cy.get('#signupModal').should('be.visible');

    // Close the modal
    cy.get('.btn-close').click();

    // Assert that the modal is no longer visible
    cy.get('#signupModal').should('not.be.visible');
  });
});
