import produtoaleatorio from '../support/generic/aletorioProduto';

describe('Comentario em produto aleatório', () => {

  it('Adicionar comentário em um produto aleatório do catálogo de moda masculina no carrinho', () => {
 
      produtoaleatorio.acessarPaginaW();
  
      cy.wait(1000);

      produtoaleatorio.escolhaAleatoria();

      cy.wait(1000);
      cy.contains('Reviews').click();

      cy.get('#Rating_1_label').first().click(); 

      cy.get('input[id="nickname_field"]').type('Kenzi');
      cy.get('input[id="summary_field"]').type('Sobre a entrega');
      cy.get('textarea[id="review_field"]').type('Demora demais a entrega!');

      cy.get('.action.submit.primary').click();

      cy.wait(4000);

      cy.get('.message-success').should('be.visible');

    //});
  });
});



