import ICreateProductDTO from '../dtos/ICreateProductDTO';
import Product from '../typeorm/entities/Product';

export default interface IProductRepository {
  create(data: ICreateProductDTO): Promise<Product | undefined>;
  find(): Promise<Product[]>;
  findById(id: number): Promise<Product | undefined>;
  save(product: Product): Promise<Product>;
  delete(id: number): Promise<void>;
}
