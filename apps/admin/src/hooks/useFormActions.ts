import { UseMutationResult, useMutation } from "@tanstack/react-query"
import { FormVariant } from "../types/form"
import { CREATE_VARIANT, UPDATE_VARIANT } from "../constants"

const useCreate = () => {
    return useMutation({})
}

const useUpdate = () => {
    return useMutation({})
}

type TypedActionArgs = any

interface TypedUseFormActionsArgs {
    variant: FormVariant
    useCreateMutation: () => UseMutationResult<unknown, Error, void, unknown>
    useUpdateMutation: () => UseMutationResult<unknown, Error, void, unknown>
}

export default function useFormActions({
    variant,
    useCreateMutation,
    useUpdateMutation,
}: TypedUseFormActionsArgs) {
    const useMutation = {
        [CREATE_VARIANT]: useCreateMutation,
        [UPDATE_VARIANT]: useUpdateMutation
    }

    const mutate = () => {
        
    }

    return useMutation[variant as keyof typeof useMutation]()

}