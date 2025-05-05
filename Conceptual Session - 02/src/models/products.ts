export class Product {
    constructor(public id: number,public name: string,public price: number,public quantity: number,public description: string) {}

    getPrice() {
        return this.price;
    }

    getTotalPrice() {
        return this.price * this.quantity;
    }

    sell(unit: number) : string {
        if (this.quantity >= unit) {
            this.quantity -= unit;
            return `Sold ${unit} units of ${this.name}.`;
        } else {
            return `Not enough stock for ${this.name}.`;
        }
    }
}