interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    stockQuantity: number;
    imageUrl?: string; // Optional field for product image
}

export default IProduct;