import { Product } from "./products";

export class DigitalProduct extends Product {
    constructor(id: number, name: string, price: number, quantity: number, description: string, public fileSize: number) {
        super(id, name, price, quantity, description);
    }

    getDownloadInfo() {
        return `Downloading ${this.name} (${this.fileSize} MB)...`;
    }

}