import { PharmacyService } from '@shared/protos/generated';

import loadService from '@shared/protos/serviceLoader';

export default loadService<PharmacyService>({
  serviceName: 'PharmacyService',
  address: process.env.PHARMACY_SERVICE_URL,
  fileName: 'PharmacyService',
});
