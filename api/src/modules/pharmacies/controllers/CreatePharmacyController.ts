import { Request, Response } from 'express';
import PharmacyService from '@modules/pharmacies/services/PharmacyService';
import * as yup from 'yup';
import AppError from '@shared/errors/AppError';

class CreatePharmaciesController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const {
      idSede,
      cnpj,
      endereco,
      horarioFuncionamento,
      logo,
      nome,
      responsavel,
      telefone,
    } = request.body;

    const schema = yup.object().shape({
      idSede: yup.string().optional(),
      cnpj: yup.string().required(),
      endereco: yup.string().required(),
      horarioFuncionamento: yup.string().required(),
      logo: yup.string().required(),
      nome: yup.string().required(),
      responsavel: yup.string().required(),
      telefone: yup.string().required(),
    });

    await schema.validate(request.body, { abortEarly: false }).catch(err => {
      throw new AppError(err.errors, 422);
    });

    try {
      const pharmacy = await PharmacyService.registerPharmacy({
        idSede,
        cnpj,
        endereco,
        horarioFuncionamento,
        logo,
        nome,
        responsavel,
        telefone,
      });

      return response.status(201).json(pharmacy);
    } catch (error) {
      throw new AppError(error.details, error.code);
    }
  }
}

export default CreatePharmaciesController;
