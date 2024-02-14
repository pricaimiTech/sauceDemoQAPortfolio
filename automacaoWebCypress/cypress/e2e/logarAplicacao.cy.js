import logarAplicacaoPageObjects from "../support/pageObjects/logarAplicacao.pageObjects";

describe('Realizar Login na Aplicação', () => {
    
    beforeEach(() => {
        cy.visit('/')
    });
    
    it('Logar na aplicação com usuário valido', () => {
        cy.fixture('dados').then((user) => {
            logarAplicacaoPageObjects.inputUserName(user.userName)
            logarAplicacaoPageObjects.inputSenha(user.password)
        })
        logarAplicacaoPageObjects.logarApp()
    });
    
});