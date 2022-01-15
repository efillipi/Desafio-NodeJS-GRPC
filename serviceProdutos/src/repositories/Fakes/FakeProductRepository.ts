import { v1 as uuid } from 'uuid';
import ICreateProductDTO from '../../dtos/ICreateProductDTO';
import Product from '../../typeorm/entities/Product';
import IProductRepository from '../IProductRepository';

class ProductRepository implements IProductRepository {
  private products: Product[] = [];

  public async findById(id: number): Promise<Product | undefined> {
    const findById = this.products.find(product => product.id === id);

    return findById;
  }

  public async delete(id: number): Promise<void> {
    this.products.find(product => product.id === id);
  }

  public async save(product: Product): Promise<Product> {
    const FindIndex = this.products.findIndex(
      findProduct => findProduct.id === product.id,
    );

    this.products[FindIndex] = product;

    return product;
  }

  public async create({
    disponibilidade,
    ingredientes,
    preco,
    thumbnail,
    volume,
  }: ICreateProductDTO): Promise<Product | undefined> {
    const product = new Product();

    Object.assign(product, {
      id: uuid(),
      disponibilidade,
      ingredientes,
      preco,
      thumbnail,
      volume,
    });

    this.products.push(product);

    return product;
  }

  public async find(): Promise<Product[] | undefined> {
    return this.products;
  }
}

export default ProductRepository;
