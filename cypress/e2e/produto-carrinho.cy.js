import CarroCompras from '../support/generic/carrinho';
import selecaoProdutox from '../support/generic/produtoX';

describe('Add produto ao carrinho de compras', () => {

    beforeEach(() => {
       cy.visit('https://magento.softwaretestingboard.com')
    }) 
            
        it('add um produto ao carrinho', () => {

            selecaoProdutox.produtoX();
            cy.wait(1000);
            CarroCompras.marcaritens();
            cy.wait(1000);
            CarroCompras.submeterCompra();
        
        })
  })
