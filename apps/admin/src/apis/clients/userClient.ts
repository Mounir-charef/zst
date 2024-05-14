import axiosHttpClient from "./_axios-httpClient"

const userClient = {
    getAll(params?: unknown) {
        return axiosHttpClient.get(
            'https://jsonplaceholder.typicode.com/users', {params}
          ).then(res => res.data)
    },
}

export default userClient