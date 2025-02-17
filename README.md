# Documentação - Clone do Spotify

## Visão Geral

O **Clone do Spotify** é um projeto Full Stack desenvolvido durante o curso da Hashtag Programação. Esse projeto permitiu aplicar diversas tecnologias para criar uma plataforma de streaming de música inspirada no Spotify.

Você pode ver o projeto funcionando ao vivo no seguinte link:
[Link do Projeto](https://projetospotify.onrender.com/)

## Tecnologias Utilizadas

### Frontend

-   **React.js**: Biblioteca JavaScript para criação da interface de usuário.
-   **JavaScript**: Linguagem principal para desenvolvimento do frontend.
-   **CSS**: Estilização da interface, garantindo um design moderno e responsivo.

### Backend

-   **Node.js**: Ambiente de execução para JavaScript no servidor.
-   **Express**: Framework para Node.js que facilita a criação de rotas e manipulação de requisições.

### Banco de Dados

-   **MongoDB**: Banco de dados NoSQL utilizado para armazenar informações sobre as playlists e músicas do sistema.

### API

-   Foi desenvolvido no curso uma **API RESTful** para gerenciar os dados do aplicativo, permitindo operações como:
    -   Reprodução de áudio e interação com conteúdo.
    -   Informações de 20 artistas e 200 músicas.

## Funcionalidades Principais

-   **Tela Home**:

    -   Seção para artistas populares.
    -   Seção para músicas populares.
    -   Botão "Mostrar Mais" em cada seção para visualizar todas as músicas ou todos os artistas.

-   **Navegação e Interface**:

    -   **Header**: Exibe o logotipo do Spotify e permite voltar à página inicial.
    -   **ItemList**: Exibe listas de artistas ou músicas populares com botão para ver mais.
    -   **Main**: Renderiza listas de artistas e músicas populares com base no tipo de exibição.

-   **Páginas e Rotas**:

    -   **Home**: Exibe artistas e músicas populares.
    -   **Artists**: Lista os artistas populares.
    -   **Songs**: Lista as músicas populares.
    -   **Artist**: Exibe detalhes do artista, incluindo suas músicas e um botão de play que escolhe músicas aleatórias do álbum, quando é clicado.
    -   **Song**: Exibe detalhes da música, capa, artista e um player funcional.

-   **Reprodução de Músicas**:
    -   **Player**:
        -   Permite reproduzir e pausar músicas.
        -   Possui controles para avançar e retroceder faixas.
        -   Exibe progresso da música baseado no tempo atual e na duração total.
        -   A mesma faixa toca em todas as músicas listadas do álbum correspondente.

---

## Arquivos da API

A API é construída com **Express** e conecta-se ao **MongoDB** para gerenciar os dados de artistas e músicas. Abaixo estão os detalhes dos arquivos principais da API.

### `server.js`

O arquivo `server.js` configura o servidor Express, lida com as rotas de dados de artistas e músicas e serve os arquivos estáticos do frontend.

### `connect.js`

Este arquivo configura a conexão com o MongoDB, utilizando a URL de conexão para se conectar ao banco de dados.

### `insertMany.js`

Este arquivo é utilizado para inserir os dados de artistas e músicas no banco de dados. Ele utiliza arrays pré-definidos com informações de artistas e músicas para popular as coleções no MongoDB.

#### Endpoints da API

A API possui os seguintes endpoints:

-   **`GET /api/artists`**: Retorna uma lista de todos os artistas no banco de dados.
-   **`GET /api/songs`**: Retorna uma lista de todas as músicas no banco de dados.

Esses endpoints são responsáveis por fornecer os dados para o frontend do projeto.

---

## Comunicação Frontend e Backend

O **frontend** se comunica com o **backend** através de requisições HTTP utilizando a biblioteca **Axios**. As requisições são feitas para os endpoints da API, que retornam os dados de artistas e músicas para o frontend.

### `api.js`

O arquivo `api.js` é responsável por fazer as requisições ao backend e buscar os dados de artistas e músicas. Ele utiliza o Axios para realizar as requisições GET para os endpoints da API, e os dados retornados são armazenados em arrays que são exportados para uso no frontend.

#### Como funciona

-   **Requisições GET**: O frontend faz requisições GET para os endpoints `/api/artists` e `/api/songs` do backend.
-   **Armazenamento dos Dados**: Os dados recebidos são armazenados nas variáveis `artistArray` e `songsArray`.
-   **Integração com o Frontend**: Esses arrays são usados para exibir os artistas e músicas na interface do usuário.

Esse fluxo garante que o frontend obtenha as informações atualizadas do backend de forma dinâmica, sem a necessidade de recarregar a página.

---

## Instalação e Configuração

1. Clone este repositório:
    ```sh
    git clone https://github.com/islaianeribeiro/ProjetoSpotify.git
    ```
2. Acesse a pasta do projeto:
    ```sh
    cd ProjetoSpotify
    ```
3. Construa e inicie o projeto com os seguintes comandos:
    ```sh
    npm run build
    npm run start
    ```
    - O script **build** instala as dependências do backend e frontend e executa a build do frontend.
    - O script **start** inicia o servidor backend.

## Considerações Finais

Este projeto foi uma excelente oportunidade para aprimorar habilidades Full Stack e compreender a estrutura de uma plataforma de streaming de música. Pretendo continuar aprimorando a aplicação com novas funcionalidades e melhorias.
