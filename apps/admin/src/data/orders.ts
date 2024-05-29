import { TypedOrderListing } from "../types/order";
import products from "./products";

const orders: TypedOrderListing[] = [
    {
        id: 1,
        product: products[0],
        date: '2024-05-25',
        status: 'Delivered',
        price: 100,
        quantity: 10,
        createdAt: '',
        updatedAt: '',
    }
]

export default orders