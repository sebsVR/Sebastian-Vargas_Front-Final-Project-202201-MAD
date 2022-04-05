import { actionTypes } from './action-types';

export const addProduct = (id) => ({
  type: actionTypes.addProduct,
  payload: id,
});

export const deleteProduct = (id) => ({
  type: actionTypes.deleteProduct,
  payload: id,
});

export const getAllProducts = () => ({
  type: actionTypes.getAllProducts,
  payload: {},
});

export const getProduct = (id) => ({
  type: actionTypes.getProduct,
  payload: id,
});

export const updateProduct = (id) => ({
  type: actionTypes.updateProduct,
  payload: id,
});
