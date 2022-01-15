import { Router } from 'express';

import CreatePharmacyController from '@modules/pharmacies/controllers/CreatePharmacyController';
import ListPharmaciesController from '@modules/pharmacies/controllers/ListPharmaciesController';
import FindByPharmacyController from '@modules/pharmacies/controllers/FindByPharmacyController';
import UpdatePharmacyController from '@modules/pharmacies/controllers/UpdatePharmacyController';
import DeletePharmacyController from '@modules/pharmacies/controllers/DeletePharmacyController';

const PharmaciesRouter = Router();

const createPharmacyController = new CreatePharmacyController();
const listPharmaciesController = new ListPharmaciesController();
const findByPharmacyController = new FindByPharmacyController();
const updatePharmacyController = new UpdatePharmacyController();
const deletePharmacyController = new DeletePharmacyController();

PharmaciesRouter.post('/', createPharmacyController.execute);
PharmaciesRouter.get('/', listPharmaciesController.execute);
PharmaciesRouter.get('/:id', findByPharmacyController.execute);
PharmaciesRouter.put('/:id', updatePharmacyController.execute);
PharmaciesRouter.delete('/:id', deletePharmacyController.execute);

export default PharmaciesRouter;
