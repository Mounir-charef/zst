import attributes from "../../data/attributes"

const attributeClient = {
    getAll() {
        return new Promise(resolve => setTimeout(() => resolve(attributes), 1000))
    }
}

export default attributeClient