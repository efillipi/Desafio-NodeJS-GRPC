import AppError from '../errors/AppError';
import ImplementationService from '../Implementation/ImplementationService';
import FakeProducRepository from '../repositories/Fakes/FakeProductRepository';

let fakeProducRepository: FakeProducRepository;
let implementationService: ImplementationService;

describe('ImplementationService.spec', () => {
  beforeEach(() => {
    fakeProducRepository = new FakeProducRepository();

    implementationService = new ImplementationService(fakeProducRepository);
  });

  it('list the products', async () => {
    await implementationService.registerProduct({
      thumbnail: 'string',
      preco: 'string',
      ingredientes: 'string',
      disponibilidade: 'string',
      volume: 'string',
    });
    await implementationService.registerProduct({
      thumbnail: 'string',
      preco: 'string',
      ingredientes: 'string',
      disponibilidade: 'string',
      volume: 'string',
    });

    const products = await implementationService.listProducts();

    expect(products.length).toBe(2);
  });

  it('Create product', async () => {
    const product = await implementationService.registerProduct({
      thumbnail: 'string',
      preco: 'string',
      ingredientes: 'string',
      disponibilidade: 'string',
      volume: 'string',
    });

    expect(product).toHaveProperty('id');
    expect(product.thumbnail).toBe('string');
  });

  it('Get by id product', async () => {
    const product = await implementationService.registerProduct({
      thumbnail: 'string',
      preco: 'string',
      ingredientes: 'string',
      disponibilidade: 'string',
      volume: 'string',
    });

    const productGet = await implementationService.getProductById(product.id);

    expect(productGet.thumbnail).toBe('string');
    expect(productGet.preco).toBe('string');
  });

  it('clone product', async () => {
    const cloneProduct = jest.spyOn(fakeProducRepository, 'create');
    const product = await implementationService.registerProduct({
      thumbnail: 'string',
      preco: 'string',
      ingredientes: 'string',
      disponibilidade: 'string',
      volume: 'string',
    });

    await implementationService.cloneProductById(product.id);

    expect(cloneProduct).toHaveBeenCalledWith(product);
  });

  it('update product', async () => {
    const product = await implementationService.registerProduct({
      thumbnail: 'string',
      preco: 'string',
      ingredientes: 'string',
      disponibilidade: 'string',
      volume: 'string',
    });

    const productUpdate = await implementationService.upateProductById({
      id: product.id,
      thumbnail: 'string 2',
      preco: 'string 2',
      ingredientes: 'string 2',
      disponibilidade: 'string 2',
      volume: 'string 2',
    });

    expect(productUpdate.thumbnail).toBe('string 2');
    expect(productUpdate.preco).toBe('string 2');
  });

  it('delete product', async () => {
    const deleteProduct = jest.spyOn(fakeProducRepository, 'delete');
    const product = await implementationService.registerProduct({
      thumbnail: 'string',
      preco: 'string',
      ingredientes: 'string',
      disponibilidade: 'string',
      volume: 'string',
    });

    await implementationService.deleteProductById(product.id);

    expect(deleteProduct).toHaveBeenCalledWith(product.id);
  });

  it('should not be able to clone a product by passing an incorrect id', async () => {
    await expect(
      implementationService.cloneProductById(0),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update a product by passing an incorrect id', async () => {
    await expect(
      implementationService.upateProductById({
        id: 0,
        thumbnail: 'string',
        preco: 'string',
        ingredientes: 'string',
        disponibilidade: 'string',
        volume: 'string',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to fetch a product by passing an incorrect id', async () => {
    await expect(
      implementationService.getProductById(0),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to delete a product by passing an incorrect id', async () => {
    await expect(
      implementationService.deleteProductById(0),
    ).rejects.toBeInstanceOf(AppError);
  });
});
