import { Product } from "./products";

export class DigitalProduct extends Product {
    constructor(id: number, name: string, price: number, description: string, public fileSize: number) {
        super(id, name, price, description);
    }

    getDownloadInfo() {
        return `Downloading ${this.name} (${this.fileSize} MB)...`;
    }

}