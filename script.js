describe('Bootstrap Modal Test', () => {
    it('should open and close the modal using Bootstrap classes', () => {
        // Click the Sign Up button to open the modal
        cy.get('button[data-bs-target="#signupModal"]').click();

        // Assert the modal is visible
        cy.get('#signupModal').should('be.visible');

        // Click the close button in the modal header
        cy.get('.btn-close').click();

        // Assert the modal is no longer visible
        cy.get('#signupModal').should('not.be.visible');
    });
});
