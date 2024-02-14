const loginElements = require('../elements/logarAplicacao.elements').LOGINFORM

class LogarAplicacao{

    inputUserName(dado){
        cy.get(loginElements.inputUserName).type(dado)
    }

    inputSenha(dado){
        cy.get(loginElements.inputSenha).type(dado)
    }

    logarApp(){
        cy.get(loginElements.btnLogin).click()
    }
}

export default new LogarAplicacao();