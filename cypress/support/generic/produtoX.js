class selecaoProdutox{

    produtoX(){

        // Rolar para a imagem com o atributo "alt" igual a "Radiant Tee"
        cy.get('img[alt="Radiant Tee"]').scrollIntoView();

        // Clicar na imagem com o atributo "alt" igual a "Radiant Tee"
        cy.get('img[alt="Radiant Tee"]').click();
        
    }


}

export default new selecaoProdutox();