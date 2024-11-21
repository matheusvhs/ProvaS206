// Função para bloquear as requisições do Backtrace.io
function blockBacktrace() {
  cy.intercept('POST', 'https://events.backtrace.io/**', {
    statusCode: 200,
    body: {},
  }).as('backtrace');
}

// Função para realizar login no site
function Login(username, password) {
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
}

describe('Teste de Logout', () => {
  it('Bloqueia Backtrace.io, faz login, realiza logout e verifica redirecionamento', () => {
    blockBacktrace();

    // Visita o site
    cy.visit('https://www.saucedemo.com/');

    // Faz login com credenciais válidas
    Login('standard_user', 'secret_sauce');

    // Verifica se o login foi bem-sucedido
    cy.url().should('include', '/inventory.html');

    // Abre o menu e clica no botão de logout
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();

    // Verifica se o usuário foi redirecionado para a página de login
    cy.url().should('eq', 'https://www.saucedemo.com/');
  });
});

describe('Teste de Adição ao Carrinho', () => {
  it('Bloqueia Backtrace.io, adiciona um item ao carrinho e verifica o carrinho', () => {
    blockBacktrace();

    // Visita o site
    cy.visit('https://www.saucedemo.com/');

    // Faz login com credenciais válidas
    Login('standard_user', 'secret_sauce');

    // Verifica se o login foi bem-sucedido
    cy.url().should('include', '/inventory.html');

    // Adiciona o primeiro produto ao carrinho
    cy.get('.inventory_item').first().within(() => {
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    });

    // Verifica se o ícone do carrinho mostra 1 item
    cy.get('.shopping_cart_badge').should('contain.text', '1');
  });
});
