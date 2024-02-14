const homeElements = require('../elements/home.elements').produtosHome

class Home{

    adicionarProdutoCarrinhoHome(){
        cy.get(homeElements.produtosContainer)
        .find('button')
        .first()
        .click()
    }

    validarQtdProdutoCarrinho(qtd){
        cy.get(homeElements.carrinho)
        .find('span')
        .contains(qtd)
    }

    clicarCarrinho(){
        cy.get(homeElements.carrinho).click()
    }
}

export default new Home();