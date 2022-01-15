import { Router } from 'express';

import ProductsRouter from '@modules/products/routes/Products.routes';
import PharmaciesRouter from '@modules/pharmacies/routes/Pharmacies.routes';

const routes = Router();

routes.use('/products', ProductsRouter);
routes.use('/pharmacies', PharmaciesRouter);

export default routes;
