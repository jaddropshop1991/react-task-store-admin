
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest , userRequest} from "../requestMethods";
import { getProductFailure, getProductStart,getProductSuccess,
  deleteProductFailure, deleteProductStart,deleteProductSuccess
  ,  addProductFailure, addProductStart,addProductSuccess
,  updateProductFailure, updateProductStart,updateProductSuccess

} from "./productRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    console.log("login success from api calls file front end")
    
   
  } catch (err) {
    console.log("login failed from api calls file front end")
    dispatch(loginFailure());
  }
};


export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};


export const deleteProducts = async (id,dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};


export const addProduct = async (product,dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`,product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};


export const updateProduct = async (id,product,dispatch) => {
  dispatch(updateProductStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(updateProductSuccess({id, product}));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};