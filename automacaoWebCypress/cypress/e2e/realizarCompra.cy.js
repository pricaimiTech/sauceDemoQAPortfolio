import logarAplicacaoPageObjects from "../support/pageObjects/logarAplicacao.pageObjects";
import homePageObjects from "../support/pageObjects/home.pageObjects";
import carrinhoPageObjects from "../support/pageObjects/carrinho.pageObjects";
import formularioPedidoPageObjects from "../support/pageObjects/formularioPedido.pageObjects";
import checkoutPageObjects from "../support/pageObjects/checkout.pageObjects";

describe('Realizar Login na Aplicação', () => {
    
    before(() => {
        cy.visit('/')
        cy.fixture('dados').then((user) => {
            logarAplicacaoPageObjects.inputUserName(user.userName)
            logarAplicacaoPageObjects.inputSenha(user.password)
        })
        logarAplicacaoPageObjects.logarApp()
    });
    
    it('Adicionar produto ao carrinho e finalizar compra', () => {
        homePageObjects.adicionarProdutoCarrinhoHome()
        cy.fixture('dados').then((user) => {
            homePageObjects.validarQtdProdutoCarrinho(user.qtdProdutoCarrinho)
            homePageObjects.clicarCarrinho()
            carrinhoPageObjects.validarQtdItensCarrinho(1)
            carrinhoPageObjects.clicarCheckout()
            formularioPedidoPageObjects.inputName(user.name)
            formularioPedidoPageObjects.inputLastName(user.LasName)
            formularioPedidoPageObjects.inputZipCode(user.zipCode)
            formularioPedidoPageObjects.continuarPedido()
            carrinhoPageObjects.validarQtdItensCarrinho(1)
            checkoutPageObjects.finalizarPedido()
            checkoutPageObjects.validarMensagemFinalizacaoPedido(user.mensagemFinalizacaoPedido)
        })    
        
    });
    
});