import { Product,products } from "../model/product";

import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function placeOrder(productId: number) {
    const selectedProduct = products.find((product) => product.id === productId);
    if (!selectedProduct) {
        console.log("Product not found. Please select the correct ID.");
        return;
    }
    console.log(`Order placed for ${selectedProduct.name} at a price of $${selectedProduct.price} for ${selectedProduct.quantity} quantity.`);

}

class Order {
    products: Product[] = [];
    addProduct(product: Product) {
        this.products.push(product);
    }

    getTotal(): number {
        return this.products.reduce((total, product) => total + product.price * product.quantity, 0);
    }
}

function displayReceipt(order: Order) {
    console.log('Receipt:');
    order.products.forEach((product) => {
        if (!product) {
            console.log("Order is not Placed \n Thank you for shopping");
        } else {
            console.log(`${product.name} - ${product.quantity}: $${product.price * product.quantity}`);
        }
    });
    console.log('Total: $', order.getTotal());
}

const productIdToOrder = prompt('Enter the product ID to order : ');
console.log(`${productIdToOrder}`);

const myOrder = new Order();
myOrder.addProduct(products[5]);
displayReceipt(myOrder);
