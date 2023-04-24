import { CREATE_PRODUCT, GETINFO_PRODUCT, VIEW_PRODUCT } from "../Constant/Action.type"

const initialState = {
    product : [],
    error : null,
    productInfo : null
}

const ProductReducer = (state = initialState,action) => {

    switch(action.type){
        case CREATE_PRODUCT :
            return state;
            break;
        case VIEW_PRODUCT : 
            return {
                product : action.payload,
                error : null,
                productInfo : null
            }
            break;
        case GETINFO_PRODUCT : 
            return{
                ...state,
                productInfo : action.payload,
                error : null
            }
            break;
        default :
            return state;
    }
}

export default ProductReducer;