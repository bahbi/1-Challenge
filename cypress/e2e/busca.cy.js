
describe('carregamento home page', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com')
 })
    it('Buscar por shirt no menu superior', () => {

      cy.get('input[id="search"]').type('shirt').type('{enter}');

    });
  });



