import {DefaultCrudRepository} from '@loopback/repository';
import {TestNewTable, TestNewTableRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TestNewTableRepository extends DefaultCrudRepository<
  TestNewTable,
  typeof TestNewTable.prototype.id,
  TestNewTableRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(TestNewTable, dataSource);
  }
}
