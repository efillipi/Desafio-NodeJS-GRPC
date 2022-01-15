import { Request, Response } from 'express';
import PharmacyService from '@modules/pharmacies/services/PharmacyService';
import * as yup from 'yup';
import AppError from '@shared/errors/AppError';

class FindPharmacyController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const id_pharmacy = Number(id);

    const schema = yup.object().shape({
      id_pharmacy: yup.number().required(),
    });

    await schema.validate({ id_pharmacy }).catch(err => {
      throw new AppError(err.errors, 422);
    });

    try {
      const pharmacy = await PharmacyService.getPharmacyById({
        id: id_pharmacy,
      });

      return response.status(200).json(pharmacy);
    } catch (error) {
      throw new AppError(error.details, error.code);
    }
  }
}

export default FindPharmacyController;
