import { Request, Response } from 'express';
import PharmacyService from '@modules/pharmacies/services/PharmacyService';
import AppError from '@shared/errors/AppError';

class ListPharmaciesController {
  public async execute(
    _request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const pharmacies = await PharmacyService.listPharmacies({});

      return response.status(200).json(pharmacies);
    } catch (error) {
      throw new AppError(error.details, error.code);
    }
  }
}

export default ListPharmaciesController;
