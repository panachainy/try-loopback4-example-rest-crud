import { Model } from '@loopback/repository';
export declare class S extends Model {
    id?: number;
    name?: string;
    [prop: string]: any;
    constructor(data?: Partial<S>);
}
export interface SRelations {
}
export declare type SWithRelations = S & SRelations;
