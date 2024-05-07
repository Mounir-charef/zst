async function fetchHttpClient(endpoint: string, init?: RequestInit) {

    const baseURL = 'http://'
    const url = endpoint.startsWith('http') ? endpoint : `${baseURL}${endpoint}`

    const response = await fetch(url, init)

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json()
}

export default fetchHttpClient