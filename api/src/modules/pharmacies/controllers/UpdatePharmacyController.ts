import { Request, Response } from 'express';
import PharmacyService from '@modules/pharmacies/services/PharmacyService';
import * as yup from 'yup';
import AppError from '@shared/errors/AppError';

class UpdatePharmacyController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const {
      cnpj,
      endereco,
      horarioFuncionamento,
      logo,
      nome,
      responsavel,
      telefone,
    } = request.body;

    const id_pharmacy = Number(id);

    const schema = yup.object().shape({
      id_pharmacy: yup.number().min(1).required(),
      cnpj: yup.string().optional(),
      endereco: yup.string().optional(),
      horarioFuncionamento: yup.string().optional(),
      logo: yup.string().optional(),
      nome: yup.string().optional(),
      responsavel: yup.string().optional(),
      telefone: yup.string().optional(),
    });

    await schema
      .validate(
        {
          id_pharmacy,
          cnpj,
          endereco,
          horarioFuncionamento,
          logo,
          nome,
          responsavel,
          telefone,
        },
        { abortEarly: false },
      )
      .catch(err => {
        throw new AppError(err.errors, 422);
      });

    try {
      const pharmacy = await PharmacyService.upatePharmacyById({
        id: id_pharmacy,
        cnpj,
        endereco,
        horarioFuncionamento,
        logo,
        nome,
        responsavel,
        telefone,
      });

      return response.status(200).json(pharmacy);
    } catch (error) {
      throw new AppError(error.details, error.code);
    }
  }
}

export default UpdatePharmacyController;
