import { Request, Response } from 'express';
import ProductService from '@modules/products/services/ProductService';
import * as yup from 'yup';
import AppError from '@shared/errors/AppError';

class UpdateProductController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const { thumbnail, preco, ingredientes, disponibilidade, volume } =
      request.body;

    const id_product = Number(id);

    const schema = yup.object().shape({
      id_product: yup.number().min(1).required(),
      thumbnail: yup.string().optional(),
      preco: yup.string().optional(),
      ingredientes: yup.string().optional(),
      disponibilidade: yup.string().optional(),
      volume: yup.string().optional(),
    });

    await schema
      .validate(
        {
          id_product,
          thumbnail,
          preco,
          ingredientes,
          disponibilidade,
          volume,
        },
        { abortEarly: false },
      )
      .catch(err => {
        throw new AppError(err.errors, 422);
      });

    try {
      const product = await ProductService.upateProductById({
        id: id_product,
        thumbnail,
        preco,
        ingredientes,
        disponibilidade,
        volume,
      });

      return response.status(200).json(product);
    } catch (error) {
      throw new AppError(error.details, error.code);
    }
  }
}

export default UpdateProductController;
