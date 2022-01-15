import { handleUnaryCall, sendUnaryData, ServerUnaryCall } from 'grpc';
import { container } from 'tsyringe';
import ImplementationService from './ImplementationService';
import {
  IByIdRequest,
  IEmpty,
  IListProductsResponse,
  IProduct,
} from '../protos/generated';

interface IProductService {
  registerProduct: handleUnaryCall<IProduct, IProduct>;
  listProducts: handleUnaryCall<IEmpty, IListProductsResponse>;
  getProductById: handleUnaryCall<IByIdRequest, IProduct>;
  cloneProductById: handleUnaryCall<IByIdRequest, IProduct>;
  upateProductById: handleUnaryCall<IProduct, IProduct>;
  deleteProductById: handleUnaryCall<IByIdRequest, IEmpty>;
}

class ImplementationController implements IProductService {
  public async listProducts(
    _call: ServerUnaryCall<IEmpty>,
    callback: sendUnaryData<IListProductsResponse>,
  ) {
    const productService = container.resolve(ImplementationService);

    try {
      const products = await productService.listProducts();

      return callback(null, { products });
    } catch (error) {
      return callback(
        {
          code: 500,
          message: `Error in register product. ${error}`,
          name: 'error',
        },
        {},
      );
    }
  }

  public async registerProduct(
    call: ServerUnaryCall<IProduct>,
    callback: sendUnaryData<IProduct>,
  ) {
    const { disponibilidade, ingredientes, preco, thumbnail, volume } =
      call.request;

    const productService = container.resolve(ImplementationService);

    try {
      const product = await productService.registerProduct({
        disponibilidade,
        ingredientes,
        preco,
        thumbnail,
        volume,
      });

      return callback(null, product);
    } catch (error) {
      return callback(
        {
          code: 500,
          message: `Error in register product. ${error}`,
          name: 'error',
        },
        {},
      );
    }
  }

  public async getProductById(
    call: ServerUnaryCall<IByIdRequest>,
    callback: sendUnaryData<IProduct>,
  ) {
    const { id } = call.request;
    const productService = container.resolve(ImplementationService);
    try {
      const product = await productService.getProductById(id);
      return callback(null, product);
    } catch (error) {
      return callback(
        {
          code: error.statusCode,
          message: error.message,
          name: 'error',
        },
        {},
      );
    }
  }

  public async cloneProductById(
    call: ServerUnaryCall<IByIdRequest>,
    callback: sendUnaryData<IProduct>,
  ) {
    const { id } = call.request;

    const productService = container.resolve(ImplementationService);
    try {
      const product = await productService.cloneProductById(id);

      return callback(null, product);
    } catch (error) {
      return callback(
        {
          code: error.statusCode,
          message: error.message,
          name: 'error',
        },
        {},
      );
    }
  }

  public async upateProductById(
    call: ServerUnaryCall<IProduct>,
    callback: sendUnaryData<IProduct>,
  ) {
    const { disponibilidade, ingredientes, preco, thumbnail, volume, id } =
      call.request;
    const productService = container.resolve(ImplementationService);
    try {
      const product = await productService.upateProductById({
        disponibilidade,
        ingredientes,
        preco,
        thumbnail,
        volume,
        id,
      });

      return callback(null, product);
    } catch (error) {
      return callback(
        {
          code: error.statusCode,
          message: error.message,
          name: 'error',
        },
        {},
      );
    }
  }

  public async deleteProductById(
    call: ServerUnaryCall<IByIdRequest>,
    callback: sendUnaryData<IEmpty>,
  ) {
    const { id } = call.request;

    const productService = container.resolve(ImplementationService);

    try {
      await productService.deleteProductById(id);

      return callback(null, {});
    } catch (error) {
      return callback(
        {
          code: error.statusCode,
          message: error.message,
          name: 'error',
        },
        {},
      );
    }
  }
}

export default new ImplementationController();
