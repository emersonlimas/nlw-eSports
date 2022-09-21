# NLW eSports - Trilha Ignite

<p align="center">
  <img src="https://img.shields.io/static/v1?label=VISUALSTUDIOCODE&message=IDE&color=blue&style=for-the-badge&logo=VISUALSTUDIOCODE">
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>

## ✔️ Técnicas e tecnologias utilizadas

As técnicas e tecnologias utilizadas (Web, Mobile e Server) foram:

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
  <img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/>
  <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white"/>
  <img src="https://img.shields.io/badge/ts--node--dev-3178C6?style=for-the-badge&logo=ts-node-dev&logoColor=white"/>
</p>

- `JavaScript`;
- `TypeScript`;
- `Node`;
- `Tailwind CSS`;
- `Expo`;
- `React Native`;
- `HTML 5`;
- `CSS 3`;
- `Prisma`;
- `Sqlite`;
- `Radix`;
- `Ts-node-dev`.

## ✏️ Funcionalidades WEB & Mobile
- [X] Conexão do back-end (server) e do front-end (web) para listar os jogos;
- [X] Conexão de criação de anúncio com a API (back-end);
- [X] Listagem de games com contagem de anúncios;
- [X] Interface de criação de novo anúncio;
- [X] Buscar discord pelo ID do anúncio;
- [X] Listagem de anúncios por game;
- [X] Criação de novo anúncio;


## Design - WEB
<p align="center">
  <img src="https://github.com/emersonlimas/nlw-eSports/blob/master/web/public/Landing.png"/>
  <img src="https://github.com/emersonlimas/nlw-eSports/blob/master/web/public/Publicar%20an%C3%BAncio.png"/>
</p>

## Design - Mobile
<p align="center">
  <img src="https://github.com/emersonlimas/nlw-eSports/blob/master/web/public/mobile.png"/>
</p>

## Demo
<p align="center">
  <img src="https://github.com/emersonlimas/nlw-eSports/blob/master/web/public/tu-rocketseat-nlw-esports.gif"/>
</p>

## 🕹️ Usage
Para rodar as aplicações será necessário:
- Web Or/&& Mobile.
- Server

A aplicação "Server" se integra com a "Web" e a "Mobile", como Back-end.

Para a aplicação web, primeiro iniciar o servidor e depois "Web", ambos com o comando:
```bash
npm run dev
```

Para a aplicação Mobile, primeiro iniciar o servidor e depois "Mobile":
#### Server
```bash
npm run dev
```
#### Mobile
```bash
expo start --tunnel
ou
expo start 
```

Obs.: Inserir IP da sua máquina em mobile/src/screens/ Game & Home:
#### windows
```bash
ipconfig
```

#### Linux
```bash
ipconfig
```

## Informações Extras:

### HTTP methods 
- http://localhost:port/games/id/ads <- List Ads By Game
- http://localhost:port/games <- List Games
- http://localhost:port/ads/id/discord <- Get Discord By Id
- http://localhost:port/games/id/ads <- Create Ad

<h2>Oferecimento</h2>
- <a href="https://www.rocketseat.com.br/">RocketSeat</a>

<h2>Template README by</h2>
- <a href="https://github.com/ANACAPELETTI">Ana Capeletti</a>
