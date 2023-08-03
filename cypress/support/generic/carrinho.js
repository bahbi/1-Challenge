class CarroCompras{

    marcaritens(){
        
        cy.get('.swatch-option.text').first().click();
        cy.get('.swatch-option.color').first().click();
    }

    submeterCompra(){
    
        cy.get('.action.primary.tocart').click();
        cy.get('.minicart-wrapper').should('be.visible');
    }
}

export default new CarroCompras();