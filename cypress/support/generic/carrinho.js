class CarroCompras{

    marcaritens(){
        // Localize o elemento da opção de tamanho (você pode ajustar o seletor conforme necessário)
        cy.get('.swatch-option.text').first().click();

        // Localize o elemento da opção de cor (você pode ajustar o seletor conforme necessário)
        cy.get('.swatch-option.color').first().click();
    }

    submeterCompra(){
    
        cy.get('.action.primary.tocart').click();
        cy.get('.minicart-wrapper').should('be.visible');
    }
}

export default new CarroCompras();