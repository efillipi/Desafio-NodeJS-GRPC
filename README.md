# Desafio-NodeJS-GRPC

NodeJS com Typescript, Testes com Jest, Docker, Express, MariaDB, GRPC, TYPEORM

## Getting started

1. Clone this repository;<br />
2. Start MariaDB. Docker snippet: `docker run -d --name mariadb --env MARIADB_ROOT_PASSWORD=efillipi --env MARIADB_DATABASE=desafio_GRPC -p 3003:3306 mariadb:latest`<br />
3. Run `npm or yarn install` at each project in order to install dependencies.<br />
4. Run `yarn dev` on both microservices.<br />
5. Run `yarn dev` on API.<br />
6. Enjoy sending requests to REST API available at `http://localhost:3333`.<br />
   6.1. You can import `Insomnia file` - `Desafio-NodeJS-GRPC.yaml`.<br />
