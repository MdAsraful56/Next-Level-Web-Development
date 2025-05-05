import { Purchesable } from "../interface/Polymorhism";
import { Product } from "./products";

export class PhysicalProduct  extends Product implements Purchesable{
    getTotalPrice(): number {
        return this.price;
    }
}