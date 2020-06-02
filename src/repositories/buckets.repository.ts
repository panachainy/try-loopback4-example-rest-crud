import {DefaultCrudRepository} from '@loopback/repository';
import {Buckets, BucketsRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BucketsRepository extends DefaultCrudRepository<
  Buckets,
  typeof Buckets.prototype.id,
  BucketsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Buckets, dataSource);
  }
}
