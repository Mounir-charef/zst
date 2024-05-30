import { TypedOrderListing } from "../types/order";
import products from "./products";

export const orderStatues = {
    IN_REVIEW: {
        name: 'IN_REVIEW',
        text: 'In Review',
        variant: 'info'
    },
    DELIVERED: {
        name: 'DELIVERED',
        text: 'Delivered',
        variant: 'secondary',
    }
}

const orders: TypedOrderListing[] = [
    {
        id: 1,
        product: products[0],
        date: '2024-05-25',
        status: orderStatues.IN_REVIEW.name,
        price: 100,
        quantity: 10,
        createdAt: '',
        updatedAt: '',
    },

    {
        id: 2,
        product: products[1],
        date: '2024-05-25',
        status: orderStatues.DELIVERED.name,
        price: 100,
        quantity: 10,
        createdAt: '',
        updatedAt: '',
    },
]

export default orders