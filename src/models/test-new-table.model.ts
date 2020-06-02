import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class TestNewTable extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
    default: 'defaultSurname',
  })
  surname?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TestNewTable>) {
    super(data);
  }
}

export interface TestNewTableRelations {
  // describe navigational properties here
}

export type TestNewTableWithRelations = TestNewTable & TestNewTableRelations;
