import {Entity, model, property, hasMany} from '@loopback/repository';
import {BucketDetails} from './bucket-details.model';

@model({settings: {strict: false}})
export class Buckets extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  createDate: string;

  @property({
    type: 'boolean',
    required: true,
  })
  isComplete: boolean;

  @hasMany(() => BucketDetails)
  bucketDetails: BucketDetails[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Buckets>) {
    super(data);
  }
}

export interface BucketsRelations {
  // describe navigational properties here
}

export type BucketsWithRelations = Buckets & BucketsRelations;
