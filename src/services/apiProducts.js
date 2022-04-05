import axios from 'axios';

const LOCAL_SERVER = 'http://localhost:4000/products/';

export function getAllProducts() {
  return axios.get(LOCAL_SERVER + 'list');
}

export function addProduct(product) {
  return axios.post(LOCAL_SERVER, product);
}

export function updateProduct(id, product) {
  return axios.patch(LOCAL_SERVER + id, product);
}

export function getProduct(id) {
  return axios.get(LOCAL_SERVER + id);
}

export function updateUser(user, token) {
  return axios.patch(LOCAL_SERVER + user._id, user, {
    headers: { authorization: 'Bearer ' + token },
  });
}
export function deleteProduct(id) {
  return axios.delete(LOCAL_SERVER + id);
}
