describe('Meu Primeiro Teste', () => {
    it('Primeira execucao', () => {
        cy.visit('http://localhost:4200');
        cy.get('[ng-reflect-router-link="book"] > .p-submenu-icon').click();
        cy.get('[ng-reflect-router-link="book/register"]').click();
    })
} )