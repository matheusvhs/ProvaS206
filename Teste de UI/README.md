# Prova S206 - Teste de UI 

## Entrega Report

  - [Report Mochawesome](https://github.com/matheusvhs/ProvaS206/blob/main/Teste%20de%20UI/mochawesome-report)


## Instalação das Dependências 

Instalar dependências do projeto:

```powershell
npm install
```

## Executando os Testes e gerando um Relatório.
Para rodar os testes e gerar o relatório, use o comando:

```powershell
npx cypress run --spec ".\cypress\e2e\ListaUI.cy.js" --reporter mochawesome
```

Os testes serão armazenados em um arquivo HTML dentro de uma pasta chamada mochawesome-reports na raíz do diretório.
