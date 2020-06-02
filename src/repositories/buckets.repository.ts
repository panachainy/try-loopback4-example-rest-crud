import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Buckets, BucketsRelations, BucketDetails} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {BucketDetailsRepository} from './bucket-details.repository';

export class BucketsRepository extends DefaultCrudRepository<
  Buckets,
  typeof Buckets.prototype.id,
  BucketsRelations
> {

  public readonly bucketDetails: HasManyRepositoryFactory<BucketDetails, typeof Buckets.prototype.id>;

  constructor(@inject('datasources.db') dataSource: DbDataSource, @repository.getter('BucketDetailsRepository') protected bucketDetailsRepositoryGetter: Getter<BucketDetailsRepository>,) {
    super(Buckets, dataSource);
    this.bucketDetails = this.createHasManyRepositoryFactoryFor('bucketDetails', bucketDetailsRepositoryGetter,);
    this.registerInclusionResolver('bucketDetails', this.bucketDetails.inclusionResolver);
  }
}
