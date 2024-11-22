// Função para adicionar um computador
function adicionarComputador(nome, introduzido, descontinuado, empresa) {
  cy.visit('https://computer-database.gatling.io/computers/new');

  // Preencher o formulário
  cy.get('input#name').type(nome);
  cy.get('input#introduced').type(introduzido);
  cy.get('input#discontinued').type(descontinuado);
  cy.get('select#company').select(empresa);

  // Enviar o formulário
  cy.get('.primary').click();

  // Verificar se o computador foi adicionado
  cy.contains(`Done ! Computer ${nome} has been created`).should('be.visible');
}

describe('Adicionar múltiplos computadores', () => {
  it('Deve adicionar mais de um computador', () => {
    // Adicionar o primeiro computador
    adicionarComputador('Computador maneiro', '2024-11-22', '2025-11-22', 'Sanyo');

    // Adicionar o segundo computador
    adicionarComputador('Computador super rápido', '2023-06-15', '2024-06-15', 'Apple Inc.');

    // Adicionar o terceiro computador
    adicionarComputador('Computador gamer', '2024-01-10', '2025-01-10', 'Nintendo');
  });
});

describe('Filtrar computadores', () => {
  it('Deve filtrar computadores pelo nome', () => {
    cy.visit('https://computer-database.gatling.io/computers');
  
    // Buscar por "Apple"
    cy.get('#searchbox').type('Apple');
    cy.get('#searchsubmit').click();
  
    // Verificar se a tabela contém computadores da Apple
    cy.get('table').contains('Apple').should('be.visible');
  });
});
