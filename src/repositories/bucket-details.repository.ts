import {DefaultCrudRepository} from '@loopback/repository';
import {BucketDetails, BucketDetailsRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BucketDetailsRepository extends DefaultCrudRepository<
  BucketDetails,
  typeof BucketDetails.prototype.id,
  BucketDetailsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(BucketDetails, dataSource);
  }
}
