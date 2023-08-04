# Q.A Challenge Luma Store

## Descrição

Neste desafio, aplicaremos os conceitos de teste de caixa preta para testar a página [https://magento.softwaretestingboard.com](https://magento.softwaretestingboard.com/).

## Tecnologias

- [Cypress](https://www.cypress.io/)
- [Node.js](https://nodejs.org/pt-br)
- [Framework Mocha](https://www.npmjs.com/package/cypress-mochawesome-reporter)

## Vantagens e Desvantagens do Cypress

**Vantagens:**

1. **Arquitetura Moderna:** O Cypress utiliza uma arquitetura moderna e eficiente, permitindo testes rápidos e confiáveis.
2. **Visibilidade em Tempo Real:** A execução ocorre no navegador, proporcionando visibilidade em tempo real, permitindo depuração e inspeção de elementos durante a execução.
3. **Testes End-to-End (E2E):** É especialmente poderoso para testes E2E, simulando a interação do usuário com a interface como um usuário real faria.
4. **Fácil Configuração:** O processo de configuração é simplificado, facilitando a instalação e o início rápido.

**Desvantagens:**

1. **Testes Funcionais Complexos:** Pode ser menos adequado para testes funcionais complexos que requerem interação entre várias abas/navegadores.
2. **Integração Contínua:** A execução de testes em integração contínua pode ser um desafio devido à GUI exigida pelo Cypress.
3. **Requer Aprendizado:** A curva de aprendizado pode ser maior para alguns testadores que não estão familiarizados com a abordagem de teste em tempo real.

## Casos de Uso

1. Verificar se a página inicial está carregando corretamente.
2. Buscar por `shirt` no menu superior e verificar se a página de resultados carregou corretamente.
3. Adicionar um produto ao carrinho.
4. Realizar o processo de checkout.

## Diferenciais Adicionados

1. **Diferencial 3:** Adicionar um produto **aleatório** do catálogo de moda masculina ao carrinho.
2. **Diferencial 4:** Adicionar um comentário em um produto **aleatório** do catálogo de moda masculina no carrinho.
3. **Diferencial 5:** Gerar um relatório automático do teste.

## Elaboração

- Foi realizada uma análise do site para identificar os elementos presentes e entender as funcionalidades.
- Os testes foram executados no navegador Google Chrome.
- Relatórios foram gerados utilizando o framework Mocha, possibilitando diferentes formatos como HTML.

## Como Executar os Testes

1. Certifique-se de ter o Node.js instalado.
2. Clone este repositório.
3. No terminal, navegue até o diretório do projeto.
4. Execute `npm install` para instalar as dependências.
5. Para rodar os testes, execute `npx cypress run`.
6. Para gerar relatórios, execute `npx cypress run --reporter mochawesome`.

This is a challenge by [Coodesh](https://coodesh.com/)

