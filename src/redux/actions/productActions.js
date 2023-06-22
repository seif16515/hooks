import {
  ADD_PRODUCTS,
  ADD_TO_CART,
  DELETE_PRODUCT,
  REMOVE_FROM_CART,
  SEE_DETAIL,
} from "../actionTypes/productActionType";
export const addProduct = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};
export const seeDetail = (product) => {
  return {
    type: SEE_DETAIL,
    payload: product,
  };
};
export const deleteProduct = (id) => {
  console.log(id);
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};
export const addToCart =(product)=>{
  console.log(product)
   return{
    type : ADD_TO_CART,
    payload: product,
  }
}
export const removeFromCart =(id)=>{
  return{
    type: REMOVE_FROM_CART,
    payload: id,
  }
}
