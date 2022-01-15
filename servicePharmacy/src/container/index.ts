import { container } from 'tsyringe';

import IPharmacyRepository from '../repositories/IPharmacyRepository';
import PharmacyRepository from '../typeorm/repositories/PharmacyRepository';

container.registerSingleton<IPharmacyRepository>(
  'PharmacyRepository',
  PharmacyRepository,
);
