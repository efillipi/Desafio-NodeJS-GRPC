import { handleUnaryCall, sendUnaryData, ServerUnaryCall } from 'grpc';
import { container } from 'tsyringe';
import ImplementationService from './ImplementationService';
import {
  IPharmacyEmpty,
  IByIdPharmacyRequest,
  IListPharmaciesResponse,
  IPharmacy,
} from '../protos/generated';

interface IPharmacyService {
  registerPharmacy: handleUnaryCall<IPharmacy, IPharmacy>;
  listPharmacies: handleUnaryCall<IPharmacyEmpty, IListPharmaciesResponse>;
  getPharmacyById: handleUnaryCall<IByIdPharmacyRequest, IPharmacy>;
  upatePharmacyById: handleUnaryCall<IPharmacy, IPharmacy>;
  deletePharmacyById: handleUnaryCall<IByIdPharmacyRequest, IPharmacyEmpty>;
}

class ImplementationController implements IPharmacyService {
  public async listPharmacies(
    _call: ServerUnaryCall<IPharmacyEmpty>,
    callback: sendUnaryData<IListPharmaciesResponse>,
  ) {
    const pharmacyService = container.resolve(ImplementationService);

    try {
      const pharmacies = await pharmacyService.listPharmacies();

      return callback(null, { pharmacies });
    } catch (error) {
      return callback(
        {
          code: 500,
          message: `Error in register pharmacy. ${error}`,
          name: 'error',
        },
        {},
      );
    }
  }

  public async registerPharmacy(
    call: ServerUnaryCall<IPharmacy>,
    callback: sendUnaryData<IPharmacy>,
  ) {
    const {
      idSede,
      logo,
      nome,
      cnpj,
      endereco,
      horarioFuncionamento,
      responsavel,
      telefone,
    } = call.request;

    const pharmacyService = container.resolve(ImplementationService);

    try {
      const pharmacy = await pharmacyService.registerPharmacy({
        idSede,
        logo,
        nome,
        cnpj,
        endereco,
        horarioFuncionamento,
        responsavel,
        telefone,
      });

      return callback(null, pharmacy);
    } catch (error) {
      return callback(
        {
          code: error.statusCode,
          message: error.message,
          name: 'error',
        },
        {},
      );
    }
  }

  public async getPharmacyById(
    call: ServerUnaryCall<IByIdPharmacyRequest>,
    callback: sendUnaryData<IPharmacy>,
  ) {
    const { id } = call.request;
    const pharmacyService = container.resolve(ImplementationService);
    try {
      const pharmacy = await pharmacyService.getPharmacyById(id);
      return callback(null, pharmacy);
    } catch (error) {
      return callback(
        {
          code: error.statusCode,
          message: error.message,
          name: 'error',
        },
        {},
      );
    }
  }

  public async upatePharmacyById(
    call: ServerUnaryCall<IPharmacy>,
    callback: sendUnaryData<IPharmacy>,
  ) {
    const {
      logo,
      nome,
      cnpj,
      endereco,
      horarioFuncionamento,
      responsavel,
      telefone,
      id,
    } = call.request;
    const pharmacyService = container.resolve(ImplementationService);
    try {
      const pharmacy = await pharmacyService.upatePharmacyById({
        logo,
        nome,
        cnpj,
        endereco,
        horarioFuncionamento,
        responsavel,
        telefone,
        id,
      });

      return callback(null, pharmacy);
    } catch (error) {
      return callback(
        {
          code: error.statusCode,
          message: error.message,
          name: 'error',
        },
        {},
      );
    }
  }

  public async deletePharmacyById(
    call: ServerUnaryCall<IByIdPharmacyRequest>,
    callback: sendUnaryData<IPharmacyEmpty>,
  ) {
    const { id } = call.request;

    const pharmacyService = container.resolve(ImplementationService);

    try {
      await pharmacyService.deletePharmacyById(id);

      return callback(null, {});
    } catch (error) {
      return callback(
        {
          code: error.statusCode,
          message: error.message,
          name: 'error',
        },
        {},
      );
    }
  }
}

export default new ImplementationController();
