// describe('Escolher um produto aleatório', () => {
//   beforeEach(() => {
//     cy.visit('https://magento.softwaretestingboard.com');
//   });

//   //https://magento.softwaretestingboard.com/men.html'

//   it('Selecionar um produto aleatório e adicionar ao carrinho com um comentário', () => {
//     // Encontre todos os produtos na página
//     cy.get('#ui-id-5').click();

//     cy.wait(1000);

//     cy.get('.product-item').then((produtos) => {
//       // Obtenha um índice aleatório para escolher um produto
//       const indiceAleatorio = Math.floor(Math.random() * produtos.length);

//       // Clique no produto aleatório
//       cy.wrap(produtos[indiceAleatorio]).click();

//       //------------------------------------------------
//       cy.wait(1000);

//       cy.get('[id="option-label-size-143"]').as('sizeOption');

//       // Localize o elemento da opção de tamanho (você pode ajustar o seletor conforme necessário)
//       cy.get('.swatch-option.text').first().click();

//       // Localize o elemento da opção de cor (você pode ajustar o seletor conforme necessário)
//       cy.get('.swatch-option.color').first().click();

//       //-----------------------------------------------

//       // Adicione um comentário ao produto
//       //const comentario = 'Este é um ótimo produto!';
//       //cy.get('[data-role="add-to-links"] [data-role="comment"]').type(comentario);

//       // Clique no botão "Adicionar ao carrinho" class="action primary tocart"
//       //cy.contains('Add to Cart').click();
//       cy.get('.action.primary.tocart').click();

//       cy.wait(1000); // Aguarda 1 segundo antes de verificar a mensagem

//       // Aguarde a exibição do carrinho
//       cy.get('.minicart-wrapper').should('be.visible');

//     });
//   });
// });

import CarroCompras from '../support/generic/carrinho';
import produtoaleatorio from '../support/generic/aletorioProduto';

describe('produto aleatório', () => {


    it('Adicionar um produto aleatório do catalogo de moda masculina no carrinho', () => {
      
      produtoaleatorio.acessarPaginaW();
  
      cy.wait(1000);

      produtoaleatorio.escolhaAleatoria();
  
        //------------------------------------------------
        cy.wait(1000);
  
        cy.get('[id="option-label-size-143"]').as('sizeOption');
  
          CarroCompras.marcaritens();
          CarroCompras.submeterCompra();
            
  
        cy.wait(1000); 
  
        cy.get('.minicart-wrapper').should('be.visible');
  
      //});
    });
  })


