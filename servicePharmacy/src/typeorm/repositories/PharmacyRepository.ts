import { getRepository, Repository } from 'typeorm';
import Pharmacy from '../entities/Pharmacy';
import IPharmacyRepository from '../../repositories/IPharmacyRepository';
import ICreatePharmacyDTO from '../../dtos/ICreatePharmacyDTO';

class PharmacyRepository implements IPharmacyRepository {
  private ormRepository: Repository<Pharmacy>;

  constructor() {
    this.ormRepository = getRepository(Pharmacy);
  }

  public async create(data: ICreatePharmacyDTO): Promise<Pharmacy | undefined> {
    const pharmacy = this.ormRepository.create(data);

    await this.ormRepository.save(pharmacy);

    return pharmacy;
  }

  public async save(pharmacy: Pharmacy): Promise<Pharmacy> {
    this.ormRepository.save(pharmacy);

    return pharmacy;
  }

  public async find(): Promise<Pharmacy[] | undefined> {
    const pharmacies = await this.ormRepository.find({
      relations: ['sede'],
    });
    return pharmacies;
  }

  public async findById(id: number): Promise<Pharmacy | undefined> {
    const pharmacy = await this.ormRepository.findOne({
      where: { id },
      relations: ['sede', 'filiais'],
    });
    return pharmacy;
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default PharmacyRepository;
