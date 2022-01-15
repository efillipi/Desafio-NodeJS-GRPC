import { v1 as uuid } from 'uuid';
import ICreatePharmacyDTO from '../../dtos/ICreatePharmacyDTO';
import Pharmacy from '../../typeorm/entities/Pharmacy';
import IPharmacyRepository from '../IPharmacyRepository';

class PharmacyRepository implements IPharmacyRepository {
  private pharmacys: Pharmacy[] = [];

  public async findById(id: number): Promise<Pharmacy | undefined> {
    const findById = this.pharmacys.find(pharmacy => pharmacy.id === id);

    return findById;
  }

  public async delete(id: number): Promise<void> {
    this.pharmacys.find(pharmacy => pharmacy.id === id);
  }

  public async save(pharmacy: Pharmacy): Promise<Pharmacy> {
    const FindIndex = this.pharmacys.findIndex(
      findPharmacy => findPharmacy.id === pharmacy.id,
    );

    this.pharmacys[FindIndex] = pharmacy;

    return pharmacy;
  }

  public async create({
    cnpj,
    endereco,
    horarioFuncionamento,
    idSede,
    logo,
    nome,
    responsavel,
    telefone,
  }: ICreatePharmacyDTO): Promise<Pharmacy | undefined> {
    const pharmacy = new Pharmacy();
    const filiais: Pharmacy[] = [];

    Object.assign(pharmacy, {
      id: uuid(),
      cnpj,
      endereco,
      horarioFuncionamento,
      idSede,
      logo,
      nome,
      responsavel,
      telefone,
      filiais,
    });

    this.pharmacys.push(pharmacy);

    return pharmacy;
  }

  public async find(): Promise<Pharmacy[] | undefined> {
    return this.pharmacys;
  }
}

export default PharmacyRepository;
