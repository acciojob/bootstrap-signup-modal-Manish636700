it('should show the signup modal when the signup button is clicked', () => {
    // Visit the page that contains the modal
    cy.visit('/your-page-url');

    // Click the Sign Up button to trigger the modal
    cy.get('button[data-bs-toggle="modal"]').click();

    // Wait for the modal to be visible
    cy.get('#signupModal')
        .should('be.visible') // Ensure the modal is visible
        .and('have.class', 'show'); // Ensure the 'show' class is present
});
