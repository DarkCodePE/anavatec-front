export interface Product {
    id?: any;
    sku: string;
    title: string;
    category: ProductCategory;
    summary: string;
    price: number;
    status: boolean;
}
interface ProductCategory{
    id?: any;
    name: string;
}

export interface Solution {
    id?: any;
    productId: number;
    title: string;
    summary: string;
    imageUrl: string;
    status: boolean;
}
export interface SolutionState {
    ticketId: number;
    title: string;
    summary: string;
    file: string;
}