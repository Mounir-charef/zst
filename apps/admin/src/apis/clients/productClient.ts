import products from "../../data/products"

const productClient = {
    getAll() {
        return new Promise(resolve => setTimeout(() => resolve(products), 1000))
    }
}

export default productClient