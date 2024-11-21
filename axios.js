import axios from 'axios'

const apiClient = axios.create({
    baseURL: "https://ecoxp-be.onrender.com/api",
    timout: 5000,
})

export function fetchItems (obj) {
    return apiClient.get(`/items`, {params: obj})
}

export function fetchArticleById (item_id) {
    return apiClient.get(`/items/${item_id}`)
}

export function fetchMaterials () {
    return apiClient.get(`/materials`)
}

export function postNewItem () {
    return apiClient.post(`/materials`, obj)
}

