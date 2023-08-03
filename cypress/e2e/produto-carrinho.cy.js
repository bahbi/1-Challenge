// describe('Adicionar produto ao carrinho', () => {
//   beforeEach(() => {
//       cy.visit('https://magento.softwaretestingboard.com');
//   });

//   it('add um produto e adicionar ao carrinho', () => {

//          cy.get('img[alt="Radiant Tee"]').scrollIntoView();
// //       cy.get('.product-item-name').scrollIntoView();
// //       // Clicar na imagem com o atributo "alt" igual a "Radiant Tee" class="product-item-name"
// //       cy.get('.product-item-name').click();
//           cy.get('img[alt="Radiant Tee"]').click();
//       // Encontre todos os produtos na página
          
//           //cy.get('[id="option-label-size-143"]').as('sizeOption');

//           // Localize o elemento da opção de tamanho (você pode ajustar o seletor conforme necessário)
//           cy.get('.swatch-option.text').first().click();

//           // Localize o elemento da opção de cor (você pode ajustar o seletor conforme necessário)
//           cy.get('.swatch-option.color').first().click();

//           // Clique no botão "Add to Cart"
//           cy.get('.action.primary.tocart').click();

//           // Aguarde a exibição do carrinho
//           cy.get('.minicart-wrapper').should('be.visible');

//           //-----------------------------
          
//   });

// });


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






  






  