import { ProductService } from '@shared/protos/generated';

import loadService from '@shared/protos/serviceLoader';

export default loadService<ProductService>({
  serviceName: 'ProductService',
  address: process.env.PRODUCT_SERVICE_URL,
  fileName: 'ProductService',
});
