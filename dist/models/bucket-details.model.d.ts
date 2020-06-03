import { Entity } from '@loopback/repository';
export declare class BucketDetails extends Entity {
    id?: number;
    price: number;
    bucketsId?: number;
    [prop: string]: any;
    constructor(data?: Partial<BucketDetails>);
}
export interface BucketDetailsRelations {
}
export declare type BucketDetailsWithRelations = BucketDetails & BucketDetailsRelations;
