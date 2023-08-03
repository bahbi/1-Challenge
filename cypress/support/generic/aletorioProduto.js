class produtoaleatorio{

    acessarPaginaW(){
        cy.visit('https://magento.softwaretestingboard.com');
        cy.get('#ui-id-5').click();
    }

    escolhaAleatoria(){
        cy.get('.product-item').then((produtos) => {
            const indiceAleatorio = Math.floor(Math.random() * produtos.length);
            cy.wrap(produtos[indiceAleatorio]).click();
    })}
 
}

export default new produtoaleatorio();