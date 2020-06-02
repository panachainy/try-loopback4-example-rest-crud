import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {TestNewTable} from '../models';

const config: ModelCrudRestApiConfig = {
  model: TestNewTable,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/testNewTable',
};
module.exports = config;
