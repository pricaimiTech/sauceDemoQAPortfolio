const checkoutElements = require('../elements/checkout.elements').checkout

class Checkout{
    
    finalizarPedido(){
        cy.get(checkoutElements.btnFinalizarPedido)
        .click()
    }

    validarMensagemFinalizacaoPedido(mensagem){
        cy.get(checkoutElements.mensagemFinalizacao)
        .contains(mensagem)
    }
}

export default new Checkout();