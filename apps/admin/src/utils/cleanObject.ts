export default function cleanObject(object: {[prop: string]: unknown}) {
    for (let key in object) {
        const value = object[key]
        if (value === null || value === undefined || value === '') {
            delete object[key]
        }
    }

    return object
}