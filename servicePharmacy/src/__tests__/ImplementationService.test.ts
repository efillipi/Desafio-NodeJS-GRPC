import AppError from '../errors/AppError';
import ImplementationService from '../Implementation/ImplementationService';
import FakeProducRepository from '../repositories/Fakes/FakePharmacyRepository';

let fakeProducRepository: FakeProducRepository;
let implementationService: ImplementationService;

describe('ImplementationService.spec', () => {
  beforeEach(() => {
    fakeProducRepository = new FakeProducRepository();

    implementationService = new ImplementationService(fakeProducRepository);
  });

  it('list the pharmacys', async () => {
    await implementationService.registerPharmacy({
      cnpj: 'number',
      endereco: 'number',
      horarioFuncionamento: 'number',
      idSede: 0,
      logo: 'number',
      nome: 'number',
      responsavel: 'number',
      telefone: 'number',
    });
    await implementationService.registerPharmacy({
      cnpj: 'number',
      endereco: 'number',
      horarioFuncionamento: 'number',
      idSede: 0,
      logo: 'number',
      nome: 'number',
      responsavel: 'number',
      telefone: 'number',
    });

    const pharmacys = await implementationService.listPharmacies();

    expect(pharmacys.length).toBe(2);
  });

  it('Create pharmacy', async () => {
    const pharmacy = await implementationService.registerPharmacy({
      cnpj: 'number',
      endereco: 'number',
      horarioFuncionamento: 'number',
      idSede: 0,
      logo: 'number',
      nome: 'number',
      responsavel: 'number',
      telefone: 'number',
    });

    expect(pharmacy).toHaveProperty('id');
    expect(pharmacy.telefone).toBe('number');
  });

  it('Create pharmacy filial', async () => {
    const pharmacy = await implementationService.registerPharmacy({
      cnpj: 'number',
      endereco: 'number',
      horarioFuncionamento: 'number',
      idSede: 0,
      logo: 'number',
      nome: 'number',
      responsavel: 'number',
      telefone: 'number',
    });

    const pharmacy2 = await implementationService.registerPharmacy({
      cnpj: 'number 2',
      endereco: 'number 2',
      horarioFuncionamento: 'number 2',
      idSede: pharmacy.id,
      logo: 'number 2',
      nome: 'number 2',
      responsavel: 'number 2',
      telefone: 'number',
    });

    expect(pharmacy2).toHaveProperty('id');
    expect(pharmacy2.idSede).toBe(pharmacy.id);
  });

  it('Get by id pharmacy', async () => {
    const pharmacy = await implementationService.registerPharmacy({
      cnpj: 'number',
      endereco: 'number',
      horarioFuncionamento: 'number',
      idSede: 0,
      logo: 'number',
      nome: 'number',
      responsavel: 'number',
      telefone: 'number',
    });

    const pharmacyGet = await implementationService.getPharmacyById(
      pharmacy.id,
    );

    expect(pharmacyGet.nome).toBe('number');
    expect(pharmacyGet.responsavel).toBe('number');
  });

  it('update pharmacy', async () => {
    const pharmacy = await implementationService.registerPharmacy({
      cnpj: 'number',
      endereco: 'number',
      horarioFuncionamento: 'number',
      idSede: 0,
      logo: 'number',
      nome: 'number',
      responsavel: 'number',
      telefone: 'number',
    });

    const pharmacyUpdate = await implementationService.upatePharmacyById({
      id: pharmacy.id,
      cnpj: 'number string',
      endereco: 'number string',
      horarioFuncionamento: 'number string',
      logo: 'number string',
      nome: 'number string',
      responsavel: 'number string',
      telefone: 'number string',
    });

    expect(pharmacyUpdate.horarioFuncionamento).toBe('number string');
    expect(pharmacyUpdate.logo).toBe('number string');
  });

  it('delete pharmacy', async () => {
    const deletePharmacy = jest.spyOn(fakeProducRepository, 'delete');
    const pharmacy = await implementationService.registerPharmacy({
      cnpj: 'number string',
      endereco: 'number string',
      horarioFuncionamento: 'number string',
      idSede: 0,
      logo: 'number string',
      nome: 'number string',
      responsavel: 'number string',
      telefone: 'number string',
    });

    await implementationService.deletePharmacyById(pharmacy.id);

    expect(deletePharmacy).toHaveBeenCalledWith(pharmacy.id);
  });

  it('should not be able to update a pharmacy by passing an incorrect id', async () => {
    await expect(
      implementationService.upatePharmacyById({
        id: 0,
        cnpj: 'number string',
        endereco: 'number string',
        horarioFuncionamento: 'number string',
        logo: 'number string',
        nome: 'number string',
        responsavel: 'number string',
        telefone: 'number string',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to fetch a pharmacy by passing an incorrect id', async () => {
    await expect(
      implementationService.getPharmacyById(0),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to delete a pharmacy by passing an incorrect id', async () => {
    await expect(
      implementationService.deletePharmacyById(0),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a pharmacy fillial by passing an incorrect id sede', async () => {
    await expect(
      implementationService.registerPharmacy({
        cnpj: 'number 2',
        endereco: 'number 2',
        horarioFuncionamento: 'number 2',
        idSede: 8,
        logo: 'number 2',
        nome: 'number 2',
        responsavel: 'number 2',
        telefone: 'number',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
