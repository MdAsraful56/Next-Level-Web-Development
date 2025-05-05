// import { Product } from "./models/products";

import { DigitalProduct } from "./models/digitalProdduct";
import { Product } from "./models/products";

const sampleProduct01 = new Product(1, "Sample Product", 19.99, 15, "This is a sample product description.");
const sampleProduct02 = new DigitalProduct(2, "Sample Digital Product", 29.99, 30, "This is a sample digital product description.", 500);

console.log(sampleProduct01);
console.log(sampleProduct02);
console.log(sampleProduct02.getDownloadInfo());

console.log(sampleProduct01.sell(20));
console.log(sampleProduct02.sell(10));

console.log(sampleProduct01);
console.log(sampleProduct02);