import { Attribute } from "../types/attribute"

const attributes: Attribute[] = [
    {
        id: 1,
        name: 'Color',
        slug: 'color',
        values: [
            {
                id: 1,
                value: 'Black',
            },
            {
                id: 2,
                value: 'Red',
            },
            {
                id: 3,
                value: 'White',
            },
        ]
    },

    {
        id: 2,
        name: 'Size',
        slug: 'size',
        values: [
            {
                id: 4,
                value: 'Small',
            },
            {
                id: 5,
                value: 'Medium',
            },
            {
                id: 6,
                value: 'Large',
            },
        ]
    },
]

export default attributes