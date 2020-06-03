import { Entity } from '@loopback/repository';
export declare class Products extends Entity {
    id?: number;
    name: string;
    price: number;
    [prop: string]: any;
    constructor(data?: Partial<Products>);
}
export interface ProductsRelations {
}
export declare type ProductsWithRelations = Products & ProductsRelations;
