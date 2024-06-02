import { orderStatues } from "../data/orders"

export const canAcceptOrRejectOrder = (status: string) => {
    return status === orderStatues.IN_REVIEW.name
}