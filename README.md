# GIFs Feed

Este projeto é uma aplicação React que consome a API do Giphy para exibir GIFs em um feed, permitindo pesquisa, paginação e filtragem por título e usuário.

## Funcionalidades

- Exibe uma lista de GIFs tendência.
- Permite pesquisa por termo.
- Paginação para navegar pelos resultados.
- Filtragem por título e usuário.

## Tecnologias Utilizadas

- React.js
- Axios (para fazer requisições HTTP)
- KendoReact Grid (para exibir os GIFs em um grid)
- CSS (para estilização)

## Como Rodar o Projeto

1. Clone o repositório:

```
git clone https://github.com/Lucas-Justino/Feed-Gifs.git
```

2. Instale as dependências:

```
cd Feed-Gifs
npm install
```


3. Caso seja necessário, instale o KendoReact Grid:

```
npm install --save @progress/kendo-react-grid @progress/kendo-react-intl @progress/kendo-react-data-tools @progress/kendo-react-inputs @progress/kendo-react-buttons
```

4. Caso seja necessário, instale o Axios:

```
npm install axios
```

5. Adicione sua chave de API Giphy:

```
- Obtenha uma chave de API do Giphy em [https://developers.giphy.com/](https://developers.giphy.com/)
- Substitua a chave de API em `Feed.js` pela sua chave de API.
```

6. Inicie o servidor de desenvolvimento:

```
npm run dev
```

7. Acesse a aplicação no seu navegador entrando no link Local fornecido após iniciar o servidor


## Estrutura do Projeto

- `public/`: Arquivos estáticos do projeto.
- `src/`: Código-fonte da aplicação.
  - `components/`: Componentes React reutilizáveis.
  - `Feed.js`: Componente principal que renderiza o feed de GIFs.
  - `SearchForm.js`: Componente de formulário de pesquisa.
  - `GifGrid.js`: Componente para exibir os GIFs em um grid.
  - `App.js`: Componente raiz que renderiza o aplicativo.
  - `index.js`: Arquivo de entrada do aplicativo.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).




