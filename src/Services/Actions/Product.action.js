import { CREATE_PRODUCT, DELETE_PRODUCT, GETINFO_PRODUCT, VIEW_PRODUCT } from "../Constant/Action.type";
import api from '../../Api/api';

export const CreateProduct = (data) => {
    return {
        type : CREATE_PRODUCT,
        payload : data
    }
}

export const CreateProductAync = (data) => {

    return async dispatch => {
        await api.post("/products",data).then((res) => {
            dispatch(CreateProduct(res.data));
        }).catch((err) => {
            console.log(err,"err");
        })
    }
}

export const ViewProduct = (data) => {
    return {
        type : VIEW_PRODUCT,
        payload : data
    }
}

export const ViewProductAsync = () => {

    return async dispatch => {
        await api.get("/products").then((res) => {
            dispatch(ViewProduct(res.data))
        }).catch((err) => {
            console.log(err,"arr");
        })
    }
}

export const DeleteProduct = () => {
    return {
        type : DELETE_PRODUCT,
    }
}

export const DeleteProductAsync = (id) => {

    return async dispatch => {
        await api.delete(`/products/${id}`).then((res) => {
            dispatch(ViewProductAsync())
        }).catch((err) => {
            console.log(err,"err");
        })
    }
}

export const GetProductInfo = (data) => {
    return{
        type : GETINFO_PRODUCT,
        payload : data
    }
}

export const GetEditProductAsync = (id) => {

    return async dispatch => {
        await api.get(`/products/${id}`).then((res) => {
            dispatch(GetProductInfo(res.data))
            // console.log(res.data/);
        }).catch((err) => {
            console.log(err,"err");
        })
    }
}
