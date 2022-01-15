# Desafio-NodeJS-GRPC

- [x] NodeJS com Typescript, 
- [x] Testes com Jest, 
- [x] Docker, 
- [x] Express, 
- [x] MariaDB, 
- [x] GRPC, 
- [x] TYPEORM

## Getting started

1. Clone this repository;<br />
2. Start MariaDB. `docker run -d --name mariadb --env MARIADB_ROOT_PASSWORD=efillipi --env MARIADB_DATABASE=desafio_GRPC -p 3003:3306 mariadb:latest`<br />
3. Run `npm or yarn install` at each project in order to install dependencies.<br />
4. Run `typeorm migration:run` on both microservices.<br />
5. Run `yarn dev:server` on both microservices.<br />
6. Run `yarn dev:server` on API.<br />
7. Enjoy sending requests to REST API available at `http://localhost:3333`.<br />
   6.1. You can import `Insomnia file` - `Desafio-NodeJS-GRPC.yaml`.<br />
