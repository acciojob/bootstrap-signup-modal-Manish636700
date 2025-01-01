cy.get('#signupModal').should('not.be.visible'); // Assert it is not visible before clicking
cy.get('button[data-bs-toggle="modal"]').click(); // Click to trigger the modal
cy.get('#signupModal', {timeout: 10000}).should('be.visible'); // Wait for the modal to be visible
