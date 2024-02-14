const carrinhoElements = require('../elements/carrinho.elements').produtosCarrinho

class Carrinho{

    validarQtdItensCarrinho(qtd){
        cy.get(carrinhoElements.listaProdutos)
        .should('have.length', qtd)
    }

    clicarCheckout(){
        cy.get(carrinhoElements.btnCheckout)
        .click()
    }
}

export default new Carrinho();