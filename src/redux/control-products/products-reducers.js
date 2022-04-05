import { actionTypes } from './action-types';
const initialState = {
  token: '',
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.addProduct:
      return;
    case actionTypes.deleteProduct:
      return;
    case actionTypes.getAllProducts:
      return;
    case actionTypes.getProduct:
      return;
    case actionTypes.updateProduct:
      return;
    default:
      return state;
  }
}

/*     addProduct: '@product/addProduct',
  deleteProduct: '@product/deleteProduct',
  getAllProducts: '@product/getAllProducts',
  getProduct: '@product/getProduct',
  updateProduct: '@product/updateProduct', */
