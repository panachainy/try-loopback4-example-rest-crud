import { Count, Filter, Where } from '@loopback/repository';
import { Buckets, BucketDetails } from '../models';
import { BucketsRepository } from '../repositories';
export declare class BucketsBucketDetailsController {
    protected bucketsRepository: BucketsRepository;
    constructor(bucketsRepository: BucketsRepository);
    find(id: number, filter?: Filter<BucketDetails>): Promise<BucketDetails[]>;
    create(id: typeof Buckets.prototype.id, bucketDetails: Omit<BucketDetails, 'id'>): Promise<BucketDetails>;
    patch(id: number, bucketDetails: Partial<BucketDetails>, where?: Where<BucketDetails>): Promise<Count>;
    delete(id: number, where?: Where<BucketDetails>): Promise<Count>;
}
