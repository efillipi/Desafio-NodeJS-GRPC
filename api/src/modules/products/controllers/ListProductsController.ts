import { Request, Response } from 'express';
import ProductService from '@modules/products/services/ProductService';
import AppError from '@shared/errors/AppError';

class ListProductsController {
  public async execute(
    _request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const products = await ProductService.listProducts({});

      return response.status(200).json(products);
    } catch (error) {
      throw new AppError(error.details, error.code);
    }
  }
}

export default ListProductsController;
