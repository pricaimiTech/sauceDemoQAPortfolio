const formularioPedido = require('../elements/formularioPedido.elements').formularioPedido

class FormularioPedido{

    inputName(dado){
        cy.get(formularioPedido.inputName)
        .type(dado)
    }

    inputLastName(dado){
        cy.get(formularioPedido.inputLastName)
        .type(dado)
    }

    inputZipCode(dado){
        cy.get(formularioPedido.inputZipCode)
        .type(dado)
    }

    continuarPedido(){
        cy.get(formularioPedido.btnContinuePedido)
        .click()
    }
}

export default new FormularioPedido();