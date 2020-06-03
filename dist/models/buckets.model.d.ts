import { Entity } from '@loopback/repository';
import { BucketDetails } from './bucket-details.model';
export declare class Buckets extends Entity {
    id?: number;
    createDate: string;
    isComplete: boolean;
    bucketDetails: BucketDetails[];
    [prop: string]: any;
    constructor(data?: Partial<Buckets>);
}
export interface BucketsRelations {
}
export declare type BucketsWithRelations = Buckets & BucketsRelations;
