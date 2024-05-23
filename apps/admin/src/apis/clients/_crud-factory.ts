import { ID } from "../../types/common"
import axiosHttpClient from "./_axios-httpClient"

function crudFactory(endpoint: string) {
    return {
        getAll() {
            return axiosHttpClient.get(`/${endpoint}`).then(res => res.data)
        },
        getById(id: ID) {
            return axiosHttpClient.get(`/${endpoint}/${id}`).then(res => res.data)
        },
        create(data: unknown) {
            return axiosHttpClient.post(`/${endpoint}`, data)
        },
        edit(id: ID, data: unknown) {
            return axiosHttpClient.patch(`/${endpoint}/${id}`, data)
        },
        delete(id: ID) {
            return axiosHttpClient.delete(`/${endpoint}/${id}`)
        },
        deleteMany(ids: ID[]) {
            return axiosHttpClient.delete(`/${endpoint}`, {
                data: {
                    ids
                }
            })
        }
    }
}

export default crudFactory