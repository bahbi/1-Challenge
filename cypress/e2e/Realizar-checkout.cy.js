// describe('Produto no carrinho', () => {
//     it('Adicionar produto ao carrinho', () => {
//       cy.visit('https://magento.softwaretestingboard.com');
  
//       // Rolar para a imagem com o atributo "alt" igual a "Radiant Tee"
//       cy.get('img[alt="Radiant Tee"]').scrollIntoView();
//       // Clicar na imagem com o atributo "alt" igual a "Radiant Tee"
//       cy.get('img[alt="Radiant Tee"]').click();
//       // Localizar o elemento <div> pela classe e seu atributo "option-label"
//       //cy.contains('div.swatch-option[option-label="Blue"]').click();
//       // Localizar o elemento <span> com o id "option-label-size-143"
//       //id="option-label-size-143" 'span#option-label-size-143'
//       //cy.get('[id="option-label-size-143"]').as('sizeOption'); // da pra reaproveitar

//       //cy.get('img[alt="Radiant Tee"]').click();
//       // Encontre todos os produtos na página
          
//           //cy.get('[id="option-label-size-143"]').as('sizeOption');

//           // Localize o elemento da opção de tamanho (você pode ajustar o seletor conforme necessário)
//       cy.get('.swatch-option.text').first().click();

//           // Localize o elemento da opção de cor (você pode ajustar o seletor conforme necessário)
//       cy.get('.swatch-option.color').first().click();

//           // Clique no botão "Add to Cart"
//       cy.get('.action.primary.tocart').click();

//       // Aguarde a exibição do carrinho
//       cy.get('.minicart-wrapper').should('be.visible');

//       cy.wait(3000);
      
//       // Localizar o elemento <span> com a classe "counter qty" e o texto "1 item"
//       //cy.contains('span.counter.qty', '1 item').click();
//       // Localizar o elemento com a classe "showcart" e clicar nele
//       cy.get('.showcart').click();
//       cy.wait(2000);

//       // Localizar o botão pelo id "top-cart-btn-checkout" e clicar nele
//       cy.get('#top-cart-btn-checkout').click();
//       // Localizar e clicar no botão "Proceed to Checkout"
//       cy.wait(1000);

//       //campos alvos
//       //cy.get('#customer-email-fieldset > .required > .control > #customer-email').type('lllll@lll.com');


//       cy.get('#customer-email').type('lllll@lll.com');

//       //cy.get('#WE2TA0W').type('Testadorando');
//       cy.get('input[name="firstname"]').type('llllll');
//       cy.get('input[name="lastname"]').type('Lllll Lllll');
//       cy.get('input[name="street[0]"]').type('Lllll Lllll lll, 5');
//       cy.get('input[name="city"]').type('Lllllll'); //Billings

// //op para escolha
//       //cy.get('[data-title="Alabama"]').click();

//       // Localize o elemento do menu suspenso
//       cy.get('select[name="region_id"]').select('Michigan'); //não ta generico

//     // Aguarde um momento para visualização
//       cy.wait(1000);


//       cy.get('input[name="postcode"]').type('00000'); //add com validade

// //op para escolha
//       cy.get('select[name="country_id"]').select('United States'); //não ta generico

//       cy.get('input[name="telephone"]').type('00000-0000'); //add com validade

//       cy.get('input[type="radio"][value="tablerate_bestway"]').check();

//     // Aguarde um momento para visualização
//       cy.wait(1000);

//       cy.get('.button.action.continue.primary').click();

//       cy.wait(1000);

//       cy.get('.action.primary.checkout').click();

//       cy.wait(1000);
  
//       cy.get('.checkout-onepage-success.page-layout-1column').should('be.visible');

//     })
//   })

import CarroCompras from '../support/generic/carrinho';
import selecaoProdutox from '../support/generic/produtoX';

  describe('Realizar checkout', () => {
    it('Adicionar produto ao carrinho e preenche para o pagamento', () => {
      cy.visit('https://magento.softwaretestingboard.com');
  
          selecaoProdutox.produtoX();
          CarroCompras.marcaritens();
          CarroCompras.submeterCompra();

      cy.wait(1000); 
      cy.get('.minicart-wrapper').should('be.visible');
      cy.wait(3000);
      
      
      cy.get('.showcart').click();
      cy.wait(3000);

      cy.get('#top-cart-btn-checkout').click();

      cy.wait(5000);
      cy.get('#customer-email').type('ritthy.foster@example.com');

      cy.get('input[name="firstname"]').type('Ritthy');
      cy.get('input[name="lastname"]').type('Foster');
      cy.get('input[name="street[0]"]').type('8821 Adams St');
      cy.get('input[name="city"]').type('Detroit'); //


      cy.get('select[name="region_id"]').select('Michigan'); //não ta generico

      cy.wait(1000);


      cy.get('input[name="postcode"]').type('63104'); //add com validade
      cy.get('select[name="country_id"]').select('United States'); //não ta generico
      cy.get('input[name="telephone"]').type('00000-0000'); //add com validade
      cy.get('input[type="radio"][value="tablerate_bestway"]').check();

      cy.wait(1000);
      cy.get('.button.action.continue.primary').click();
      cy.wait(1000);
      cy.get('.action.primary.checkout').click();
      cy.wait(1000);
      cy.get('.checkout-onepage-success.page-layout-1column').should('be.visible');

    })
  })



