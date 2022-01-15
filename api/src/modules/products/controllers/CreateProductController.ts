import { Request, Response } from 'express';
import ProductService from '@modules/products/services/ProductService';
import * as yup from 'yup';
import AppError from '@shared/errors/AppError';

class CreateProductsController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { thumbnail, preco, ingredientes, disponibilidade, volume } =
      request.body;

    const schema = yup.object().shape({
      thumbnail: yup.string().required(),
      preco: yup.string().required(),
      ingredientes: yup.string().required(),
      disponibilidade: yup.string().required(),
      volume: yup.string().required(),
    });

    await schema.validate(request.body, { abortEarly: false }).catch(err => {
      throw new AppError(err.errors, 422);
    });

    try {
      const product = await ProductService.registerProduct({
        thumbnail,
        preco,
        ingredientes,
        disponibilidade,
        volume,
      });

      return response.status(201).json(product);
    } catch (error) {
      throw new AppError(error.details, error.code);
    }
  }
}

export default CreateProductsController;
