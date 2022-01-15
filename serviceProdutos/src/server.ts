/* eslint-disable no-console */
import 'reflect-metadata';
import './database/typeorm';
import './container';
import 'dotenv/config';
import grpc, { ProtobufMessage } from 'grpc';
import ImplementationController from './Implementation/ImplementationController';
import { loadProto } from './protos';

const proto = loadProto('ProductService');
const server = new grpc.Server();

const URL_PORT = process.env.SERVICE_URL_PORT;

server.addService(
  (proto.ProductService as ProtobufMessage).service,
  ImplementationController,
);
server.bind(URL_PORT, grpc.ServerCredentials.createInsecure());
server.start();

console.log(` 📦 Started service Products in ${URL_PORT}`);
