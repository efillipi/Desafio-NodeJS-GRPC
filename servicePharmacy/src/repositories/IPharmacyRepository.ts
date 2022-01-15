import ICreatePharmacyDTO from '../dtos/ICreatePharmacyDTO';
import Pharmacy from '../typeorm/entities/Pharmacy';

export default interface IPharmacyRepository {
  create(data: ICreatePharmacyDTO): Promise<Pharmacy | undefined>;
  find(): Promise<Pharmacy[]>;
  findById(id: number): Promise<Pharmacy | undefined>;
  save(pharmacy: Pharmacy): Promise<Pharmacy>;
  delete(id: number): Promise<void>;
}
