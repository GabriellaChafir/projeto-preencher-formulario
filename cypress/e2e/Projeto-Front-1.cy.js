/// <reference types="cypress" />

describe('Front', () => {
    it('deve realizar o login e preenchimento do formulário de um usuário', () => {
        cy.intercept('*/login')
        cy.visit('http://167.250.26.147:8080/sigAutomacao/app.html#/folha/pessoa')
        cy.get('#usuario').type('automacao')
        cy.get('#iPassword').type('1010')
        cy.wait(3000)
        cy.get('input.ng-scope').click()
        cy.wait(5000)
        cy.get('[nat="cadastroPessoaFolhaCodigoProximo"]').click()
        cy.get('button[nat="cadastroPessoaFolhaDadosPessoaisNaturalidadePesquisa"]').click()
        cy.get('[label="Código"] > .pd-input-text > .form-group').type('5300284')
        cy.get('[nat="Pesquisar"]').click()
        cy.get('[title="BRASIL NOVO"]').dblclick()
        cy.wait(3000)
        cy.get('[nat="cadastroPessoaFolhaCrudSalvar"]').click()

    
    });
 
});