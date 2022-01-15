import { Request, Response } from 'express';
import ProductService from '@modules/products/services/ProductService';
import * as yup from 'yup';
import AppError from '@shared/errors/AppError';

class CloneProductController {
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
      const product = await ProductService.cloneProductById({
        id: id_product,
      });

      return response.status(200).json(product);
    } catch (error) {
      throw new AppError(error.details, error.code);
    }
  }
}

export default CloneProductController;
