// https://docs.cypress.io/api/introduction/api.html

describe('Test 1', () => {
    it('Test that the word "vodka" is here and that the input works by clearing it and searching rum', () => {
        cy.visit('/');
        cy.contains('h1', 'Cocktails');
        cy.get('.searchInput').should('have.value', 'vodka');
        cy.get('.searchSubmit').click();
        cy.get('.searchInput').clear();
        cy.get('.searchInput').type('rum');
        cy.get('.searchSubmit').click();
    });
})


