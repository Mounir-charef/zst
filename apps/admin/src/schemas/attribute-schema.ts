import { z } from "zod";
import { REQUIRED_STRING_SCHEMA } from "./common-schemas";

const attributeSchema = z.object({
    name: REQUIRED_STRING_SCHEMA,
    values: z.array(z.object({
        value: REQUIRED_STRING_SCHEMA,
        meta: REQUIRED_STRING_SCHEMA 
    }))
})

export type AttributeValues = z.infer<typeof attributeSchema>;

export {
    attributeSchema
}