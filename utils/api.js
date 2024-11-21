import axios from "axios"

const apiClient = axios.create({
  baseURL: "https://ecoxp-be.onrender.com/api",
  timout: 5000,
})

export function fetchItems(obj) {
  return apiClient.get(`/items`, { params: obj })
}

export function fetchItemsById(item_id) {
  return apiClient.get(`/items/${item_id}`)
}

export function fetchMaterials() {
  return apiClient.get(`/materials`)
}

export function postNewItem() {
  return apiClient.post(`/materials`, obj)
}

export function fetchItemByBarcode(scannedBarcode) {
  return apiClient.get(`/items/barcode/${scannedBarcode}`).then(({ data }) => {
    return data.item
  })
}

export function fetchUserByID(userID) {
  return apiClient.get(`/users/${userID}`).then(({ data }) => {
    return data.user
  })
}
