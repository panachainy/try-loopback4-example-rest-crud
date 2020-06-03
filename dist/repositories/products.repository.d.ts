import { DefaultCrudRepository } from '@loopback/repository';
import { Products, ProductsRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class ProductsRepository extends DefaultCrudRepository<Products, typeof Products.prototype.id, ProductsRelations> {
    constructor(dataSource: DbDataSource);
}
