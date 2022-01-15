import { getRepository, Repository } from 'typeorm';
import Product from '../entities/Product';
import IProductRepository from '../../repositories/IProductRepository';
import ICreateProductDTO from '../../dtos/ICreateProductDTO';

class ProductRepository implements IProductRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async create(data: ICreateProductDTO): Promise<Product | undefined> {
    const product = this.ormRepository.create(data);

    await this.ormRepository.save(product);

    return product;
  }

  public async save(product: Product): Promise<Product> {
    this.ormRepository.save(product);

    return product;
  }

  public async find(): Promise<Product[] | undefined> {
    const products = await this.ormRepository.find();
    return products;
  }

  public async findById(id: number): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne(id);
    return product;
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default ProductRepository;
