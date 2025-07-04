# Projeto Angular: Tabela de Produtos

Este projeto Angular exibe uma lista de produtos consumindo uma API pública de teste (https://fakestoreapi.com). Ele inclui funcionalidades de busca, controle de tema (dark/light), e componentes reutilizáveis.
Usando a versão 20.0.5 do Angular e sendo Standalone.

---

## Estrutura do Projeto

- `src/app/shared` - Componentes reutilizáveis (ex: HeaderComponent)
- `src/app/pages` - Páginas principais (ex: ProductPageComponent)

#### Dentro de cada página possui a seguinte estrutura

- `pages/page` - Contém a Página principal, que gerencia o layout e os componentes na tela.
- `pages/components` - Componentes utilizados pela Página (ex: CardComponent)
- `pages/services` - Serviços externos utilizados pela Página, como chamadas HTTP API (ex: ProductService)
- `pages/mappers` - Mapeia os dados externos para um formato interno que a aplicação utiliza (ex: ProductMapper)
- `pages/interface` - Define os contratos de dados usado pela Página e também de serviços Externos (ex: ProductApiResponse)

---

## Funcionalidades

### Listagem de Produtos

- Consome a API pública para obter a lista de produtos.
- Mapeia os dados da API `ProductApiResponse` para a interface que a aplicação utiliza `Product`.
- Exibe os produtos usando o componente `CardComponent`.

### Pesquisa de Produtos

- Busca por título do produto com filtro case insensitive e trim para padronizar os dados e não ter espaços desnecessários.
- Atualiza a lista exibida conforme o usuário digita.
- Caso o usuário aperte a tecla `Enter` ou aperte o botão para pesquisar e o input está vazio, todos os produtos serão retornados.

### Controle de Tema

- Suporta dois temas: `dracula` (dark) e `silk` (light).
- Salva a preferência do usuário no `localStorage`.
- Aplica o tema alterando o atributo `data-theme` no `document.documentElement`.
- Componente dedicado para controlar o tema: `ThemeControllerComponent`.

---

## Principais Componentes

### `ProductPageComponent`

- Responsável por buscar e exibir a lista de produtos.
- Gerencia a pesquisa e seleção de produto.
- Usa `ProductService` para acessar a API.

### `CardComponent`

- Recebe um produto via `@Input`.
- Emite um evento via `@Output` enviando o produto do card para mostrar detalhes no modal.

### `ThemeControllerComponent`

- Controla a troca entre temas claro e escuro.
- Persiste a preferência do usuário no `localStorage`.
- Atualiza o tema da aplicação dinamicamente.

---

## Serviços

### `ProductService`

- Serviço responsável por buscar os produtos da API.
