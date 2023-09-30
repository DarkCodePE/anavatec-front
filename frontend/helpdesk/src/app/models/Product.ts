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
    imageUrl: boolean;
}
