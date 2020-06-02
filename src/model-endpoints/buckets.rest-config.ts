import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Buckets} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Buckets,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/buckets',
};
module.exports = config;
