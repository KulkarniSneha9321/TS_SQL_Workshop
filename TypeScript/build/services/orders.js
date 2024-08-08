"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function placeOrder(productId) {
    const selectedProduct = product_1.products.find((product) => product.id === productId);
    if (!selectedProduct) {
        console.log("Product not found. Please select the correct ID.");
        return;
    }
    console.log(`Order placed for ${selectedProduct.name} at a price of $${selectedProduct.price} for ${selectedProduct.quantity} quantity.`);
}
class Order {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    getTotal() {
        return this.products.reduce((total, product) => total + product.price * product.quantity, 0);
    }
}
function displayReceipt(order) {
    console.log('Receipt:');
    order.products.forEach((product) => {
        if (!product) {
            console.log("Order is not Placed \n Thank you for shopping");
        }
        else {
            console.log(`${product.name} - ${product.quantity}: $${product.price * product.quantity}`);
        }
    });
    console.log('Total: $', order.getTotal());
}
const productIdToOrder = prompt('Enter the product ID to order : ');
console.log(`${productIdToOrder}`);
const myOrder = new Order();
myOrder.addProduct(product_1.products[5]);
displayReceipt(myOrder);
