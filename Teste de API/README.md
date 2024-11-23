# Prova S206 - Teste de API


## Instalação das Dependências 

Instalar dependências do projeto:

```powershell
npm install
```

## Executando os Testes e gerando um Relatório.
Para rodar os testes e gerar o relatório, use o comando:

```powershell
npx newman run '.\Prova S206.postman_collection.json'  -r htmlextra
```

Os testes serão armazenados em um arquivo HTML dentro de uma pasta chamada newman na raíz do diretório.