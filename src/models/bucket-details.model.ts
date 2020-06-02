import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class BucketDetails extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'number',
  })
  bucketsId?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BucketDetails>) {
    super(data);
  }
}

export interface BucketDetailsRelations {
  // describe navigational properties here
}

export type BucketDetailsWithRelations = BucketDetails & BucketDetailsRelations;
