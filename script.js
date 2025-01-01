describe('Sign Up Modal', () => {
  it('opens and interacts with the modal', () => {
    // Visit the page where the modal is located
    cy.visit('your-page-url'); // Replace with the correct URL of your page

    // Click the "Sign Up" button to open the modal
    cy.get('button.btn.btn-primary').click();

    // Wait for the modal to appear and become visible
    cy.get('#signupModal')
      .should('be.visible') // Ensure the modal is visible
      .and('have.class', 'show'); // Check that modal has the 'show' class (indicating visibility)

    // Interact with the modal elements
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password123');
    cy.get('#confirmPassword').type('password123');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Optionally, assert the form submission or modal closure behavior
    // For example, check if the modal closes after submission
    cy.get('#signupModal').should('not.be.visible');
  });
});
