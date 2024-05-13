import axiosHttpClient from "./_axios-httpClient"

const userClient = {
    getAll() {
        return axiosHttpClient.get(
            'https://jsonplaceholder.typicode.com/users',
          ).then(res => res.data)
    },
}

export default userClient