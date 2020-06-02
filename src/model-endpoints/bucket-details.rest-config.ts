import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {BucketDetails} from '../models';

const config: ModelCrudRestApiConfig = {
  model: BucketDetails,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/bucket-details',
};
module.exports = config;
