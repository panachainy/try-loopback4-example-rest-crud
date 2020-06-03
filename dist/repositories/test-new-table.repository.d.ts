import { DefaultCrudRepository } from '@loopback/repository';
import { TestNewTable, TestNewTableRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class TestNewTableRepository extends DefaultCrudRepository<TestNewTable, typeof TestNewTable.prototype.id, TestNewTableRelations> {
    constructor(dataSource: DbDataSource);
}
