import { Entity } from '@loopback/repository';
export declare class TestNewTable extends Entity {
    id?: number;
    name?: string;
    surname?: string;
    [prop: string]: any;
    constructor(data?: Partial<TestNewTable>);
}
export interface TestNewTableRelations {
}
export declare type TestNewTableWithRelations = TestNewTable & TestNewTableRelations;
