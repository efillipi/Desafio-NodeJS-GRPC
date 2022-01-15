import { Router } from 'express';

import CreateProductController from '@modules/products/controllers/CreateProductController';
import CloneProductController from '@modules/products/controllers/CloneProductController';
import ListProductsController from '@modules/products/controllers/ListProductsController';
import FindByProductController from '@modules/products/controllers/FindByProductController';
import UpdateProductController from '@modules/products/controllers/UpdateProductController';
import DeleteProductController from '@modules/products/controllers/DeleteProductController';

const ProductsRouter = Router();

const createProductController = new CreateProductController();
const cloneProductController = new CloneProductController();
const listProductsController = new ListProductsController();
const findByProductController = new FindByProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

ProductsRouter.post('/', createProductController.execute);
ProductsRouter.post('/:id', cloneProductController.execute);
ProductsRouter.get('/', listProductsController.execute);
ProductsRouter.get('/:id', findByProductController.execute);
ProductsRouter.put('/:id', updateProductController.execute);
ProductsRouter.delete('/:id', deleteProductController.execute);

export default ProductsRouter;
