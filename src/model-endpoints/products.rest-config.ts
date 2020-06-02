import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Products} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Products,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/products',
};
module.exports = config;
