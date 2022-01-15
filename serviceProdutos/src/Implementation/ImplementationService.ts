/* eslint-disable no-unused-expressions */
import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import Product from '../typeorm/entities/Product';
import IProductRepository from '../repositories/IProductRepository';
import AppError from '../errors/AppError';

interface ICreateProductRequest {
  thumbnail: string;
  preco: string;
  ingredientes: string;
  disponibilidade: string;
  volume: string;
}

interface IUpdateProductRequest {
  id: number;
  thumbnail?: string;
  preco?: string;
  ingredientes?: string;
  disponibilidade?: string;
  volume?: string;
}

@injectable()
class ProductImplements {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  public async registerProduct(data: ICreateProductRequest): Promise<Product> {
    const product = await this.productRepository.create(data);
    return product;
  }

  public async listProducts(): Promise<Product[]> {
    const products = await this.productRepository.find();
    return products;
  }

  public async getProductById(id: number): Promise<Product> {
    const product = await this.productRepository.findById(id);
    if (!product) {
      throw new AppError('Product not found', 404);
    }
    return product;
  }

  public async cloneProductById(id: number): Promise<Product> {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new AppError('Product not found', 404);
    }

    delete product.id;

    const cloneProduct = await this.productRepository.create(product);

    return cloneProduct;
  }

  public async upateProductById(data: IUpdateProductRequest): Promise<Product> {
    const productExists = await this.productRepository.findById(data.id);

    if (!productExists) {
      throw new AppError('Product not found', 404);
    }

    data.disponibilidade &&
      (productExists.disponibilidade = data.disponibilidade);
    data.ingredientes && (productExists.ingredientes = data.ingredientes);
    data.preco && (productExists.preco = data.preco);
    data.thumbnail && (productExists.thumbnail = data.thumbnail);
    data.volume && (productExists.volume = data.volume);

    await this.productRepository.save(productExists);

    return productExists;
  }

  public async deleteProductById(id: number): Promise<void> {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new AppError('Product not found', 404);
    }

    await this.productRepository.delete(id);
  }
}

export default ProductImplements;
