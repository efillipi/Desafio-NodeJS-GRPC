/* eslint-disable no-unused-expressions */
import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import Pharmacy from '../typeorm/entities/Pharmacy';
import IPharmacyRepository from '../repositories/IPharmacyRepository';
import AppError from '../errors/AppError';

interface ICreatePharmacyRequest {
  idSede: number;
  logo: string;
  nome: string;
  cnpj: string;
  endereco: string;
  horarioFuncionamento: string;
  responsavel: string;
  telefone: string;
}

interface IUpdatePharmacyRequest {
  id: number;
  logo?: string;
  nome?: string;
  cnpj?: string;
  endereco?: string;
  horarioFuncionamento?: string;
  responsavel?: string;
  telefone?: string;
}

@injectable()
class PharmacyImplements {
  constructor(
    @inject('PharmacyRepository')
    private pharmacyRepository: IPharmacyRepository,
  ) {}

  public async registerPharmacy(
    data: ICreatePharmacyRequest,
  ): Promise<Pharmacy> {
    if (data.idSede) {
      const pharmacyExists = await this.pharmacyRepository.findById(
        data.idSede,
      );

      if (!pharmacyExists) {
        throw new AppError('Incorret idSede, Pharmacy not found', 404);
      }

      if (pharmacyExists.filiais.length >= 3) {
        throw new AppError('Only 3 branches allowed per main pharmacy');
      }
    }

    data.idSede === 0 && (data.idSede = null);

    const pharmacy = await this.pharmacyRepository.create(data);
    return pharmacy;
  }

  public async listPharmacies(): Promise<Pharmacy[]> {
    const pharmacies = await this.pharmacyRepository.find();
    return pharmacies;
  }

  public async getPharmacyById(id: number): Promise<Pharmacy> {
    const pharmacy = await this.pharmacyRepository.findById(id);
    if (!pharmacy) {
      throw new AppError('Pharmacy not found', 404);
    }

    return pharmacy;
  }

  public async upatePharmacyById(
    data: IUpdatePharmacyRequest,
  ): Promise<Pharmacy> {
    const pharmacyExists = await this.pharmacyRepository.findById(data.id);

    if (!pharmacyExists) {
      throw new AppError('Pharmacy not found', 404);
    }

    data.logo && (pharmacyExists.logo = data.logo);
    data.nome && (pharmacyExists.nome = data.nome);
    data.cnpj && (pharmacyExists.cnpj = data.cnpj);
    data.endereco && (pharmacyExists.endereco = data.endereco);
    data.horarioFuncionamento &&
      (pharmacyExists.horarioFuncionamento = data.horarioFuncionamento);
    data.responsavel && (pharmacyExists.responsavel = data.responsavel);
    data.telefone && (pharmacyExists.telefone = data.telefone);

    await this.pharmacyRepository.save(pharmacyExists);

    return pharmacyExists;
  }

  public async deletePharmacyById(id: number): Promise<void> {
    const pharmacy = await this.pharmacyRepository.findById(id);

    if (!pharmacy) {
      throw new AppError('Pharmacy not found', 404);
    }

    await this.pharmacyRepository.delete(id);
  }
}

export default PharmacyImplements;
