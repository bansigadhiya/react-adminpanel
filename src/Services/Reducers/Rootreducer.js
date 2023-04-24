import { combineReducers } from "redux";
import ProductReducer from "./Product.reducer";
import UserReducer from "./User.reducer";

const Rootreducer = combineReducers({
    ProductReducer,UserReducer
})

export default Rootreducer