
import axios from 'axios'
const apiClient = axios.create({
    baseURL: "https://ecoxp-be.onrender.com/api",
    timout: 5000,
})

export function fetchItemByBarcode(scannedBarcode){
    console.log(scannedBarcode,"<<scannedBarcode")
    return apiClient.get(`/items/barcode/${scannedBarcode}`)
    .then(({data})=>{
        return data.item
    })
}

