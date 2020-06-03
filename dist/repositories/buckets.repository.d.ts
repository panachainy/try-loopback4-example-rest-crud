import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { Buckets, BucketsRelations, BucketDetails } from '../models';
import { DbDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { BucketDetailsRepository } from './bucket-details.repository';
export declare class BucketsRepository extends DefaultCrudRepository<Buckets, typeof Buckets.prototype.id, BucketsRelations> {
    protected bucketDetailsRepositoryGetter: Getter<BucketDetailsRepository>;
    readonly bucketDetails: HasManyRepositoryFactory<BucketDetails, typeof Buckets.prototype.id>;
    constructor(dataSource: DbDataSource, bucketDetailsRepositoryGetter: Getter<BucketDetailsRepository>);
}
