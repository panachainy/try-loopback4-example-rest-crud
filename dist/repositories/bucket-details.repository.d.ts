import { DefaultCrudRepository } from '@loopback/repository';
import { BucketDetails, BucketDetailsRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class BucketDetailsRepository extends DefaultCrudRepository<BucketDetails, typeof BucketDetails.prototype.id, BucketDetailsRelations> {
    constructor(dataSource: DbDataSource);
}
