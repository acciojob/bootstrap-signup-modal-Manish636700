describe('Signup Modal Test', () => {
    it('should show the signup modal and close it', () => {
        // Click on the sign-up button
        cy.get('button[data-bs-toggle="modal"]').click();
        
        // Ensure modal is visible after clicking
        cy.get('#signupModal').should('be.visible');

        // Close the modal
        cy.get('.btn-close').click();

        // Ensure modal is hidden
        cy.get('#signupModal').should('not.be.visible');
    });
});
