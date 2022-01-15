import path from 'path';
import grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';

export function loadProto(fileName: string) {
  const packageDefinition = protoLoader.loadSync(
    path.resolve(__dirname, '..', 'protos', 'pb', `${fileName}.proto`),
    {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    },
  );
  const proto = grpc.loadPackageDefinition(packageDefinition);

  return proto;
}
