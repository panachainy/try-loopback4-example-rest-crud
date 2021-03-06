import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {TestNewTable} from '../models';

const config: ModelCrudRestApiConfig = {
  model: TestNewTable,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/test-new-tables',
};
module.exports = config;
