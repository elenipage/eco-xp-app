import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://ecoxp-be.onrender.com/api",
  timout: 5000,
});

export function fetchItems(obj) {
  return apiClient.get(`/items`, { params: obj });
}

export function fetchItemsById(item_id) {
  return apiClient.get(`/items/${item_id}`);
}

export function fetchMaterials() {
  return apiClient.get(`/materials`);
}

export function postNewItem(obj) {
  return apiClient.post(`/items`, obj);
}

export function fetchItemByBarcode(scannedBarcode) {
  return apiClient.get(`/items/barcode/${scannedBarcode}`).then(({ data }) => {
    return data.item;
  });
}

export function fetchUserByID(userID) {
  return apiClient.get(`/users/${userID}`).then(({ data }) => {
    return data.user;
  });
}

export function updateXpByID(userID, increment) {
  const incObj = { inc_xp: increment };
  return apiClient.patch(`/users/${userID}`, incObj).then(({ data }) => {
    return data.xp;
  });
}

export function fetchUsersByPostcode(postcode) {
  return apiClient.get(`/users?postcode=${postcode}`).then(({ data }) => {
    return data.users;
  });
}

export function fetchUsersByPostcodePrefix(prefix) {
  return apiClient.get(`/users?postcode_prefix=${prefix}`).then(({ data }) => {
    return data.users;
  });
}

export function fetchFollowersByUserID(userID) {
  return apiClient.get(`/${userID}/followers`).then(({ data }) => {
    return data.followers;
  });
}

export function fetchFollowingByUserID(userID) {
  return apiClient.get(`/${userID}/following`).then(({ data }) => {
    return data.following;
  });
}

export function fetchBinDatesByUserPostcode(postcode) {
  return apiClient.get(`/postcodes/${postcode}`).then(({ data }) => {
    return data.postcode;
  });
}

export function postLoggedItem(item_id, user_id) {
  const logObject = { item_id: item_id, user_id: user_id}
  return apiClient.post(`/logged-items`, logObject).then(({data}) => {
    return data
  })
}

export function fetchLoggedItemsById(userID, start, end) {
  let queryStr = `/${userID}/logged-items`
  if (start || end ) {queryStr += "?"}
  if (start) {queryStr += `start=${start}`}
  if (start && end) {queryStr += `&`}
  if (end) {queryStr += `end=${end}`}
  return apiClient.get(queryStr).then(({data}) => {
    return data.loggedItems
  })

}

export function fetchIsRecyclableByArea(prefix, material_id) {
  return apiClient.get(`/recyclability/${prefix}/${material_id}`).then(({ data }) => {
    return data.data;
  });
}
