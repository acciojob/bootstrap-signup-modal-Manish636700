cy.get('#signupModal').should('be.visible', { timeout: 6000 });
cy.get('button[data-bs-target="#signupModal"]').click();
cy.wait(500); // Wait for modal animation
cy.get('#signupModal').should('be.visible');
