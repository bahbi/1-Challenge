class selecaoProdutox{

    produtoX(){

        cy.get('img[alt="Radiant Tee"]').scrollIntoView();
        cy.get('img[alt="Radiant Tee"]').click();
        
    }


}

export default new selecaoProdutox();