import { FieldValues } from "react-hook-form"
import { CREATE_VARIANT, UPDATE_VARIANT } from '../constants'

// export const CREATE_VARIANT = 'CREATE'
// export const UPDATE_VARIANT = 'UPDATE'

export type FormVariant = CREATE_VARIANT | UPDATE_VARIANT

export interface FormProps<T = FieldValues> {
    variant: FormVariant
    defaultValues?: T
}