import { Request, Response } from 'express';
import ProductService from '@modules/products/services/ProductService';
import * as yup from 'yup';
import AppError from '@shared/errors/AppError';

class DeleteProductController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const id_product = Number(id);

    const schema = yup.object().shape({
      id_product: yup.number().required(),
    });

    await schema.validate({ id_product }).catch(err => {
      throw new AppError(err.errors, 422);
    });

    try {
      await ProductService.deleteProductById({
        id: id_product,
      });

      return response.status(204).json();
    } catch (error) {
      throw new AppError(error.details, error.code);
    }
  }
}

export default DeleteProductController;
