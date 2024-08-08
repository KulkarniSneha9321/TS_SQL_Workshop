export {Product,products}

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const products: Product[] = [
    {
        id: 1,
        name: "Airpods121v2",
        price: 1200,
        quantity: 2,
    },
    {
        id: 2,
        name: "Boat",
        price: 1300,
        quantity: 4,
    },
    {
        id: 3,
        name: "JBL",
        price: 1200,
        quantity: 4,
    },
    {
        id: 4,
        name: "Oneplus",
        price: 1100,
        quantity: 1,
    },
    {
        id: 5,
        name: "Airpods Pro",
        price: 2000,
        quantity: 2,
    },
    {
        id: 6,
        name: "Airpods Nord",
        price: 1500,
        quantity: 3,
    },
    {
        id: 7,
        name: "Airpods 300",
        price: 1350,
        quantity: 3,
    },
    {
        id: 8,
        name: "Rockers 370",
        price: 2000,
        quantity: 1,
    },

];