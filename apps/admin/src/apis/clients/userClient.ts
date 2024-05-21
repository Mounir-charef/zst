import axiosHttpClient from "./_axios-httpClient"

const userClient = {
    getAll(params?: unknown) {
        return axiosHttpClient.get(
            'https://jsonplaceholder.typicode.com/users', {params}
          ).then(res => ({
            data: res.data,
            total: 120
          }))
    },
}

export default userClient