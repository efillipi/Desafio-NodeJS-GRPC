/* eslint-disable no-console */
import { createConnection } from 'typeorm';

createConnection().then(() => console.log(' 🗄 Conexão com DB estabelecida'));
