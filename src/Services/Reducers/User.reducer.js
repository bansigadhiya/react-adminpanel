import { USER_LOGIN } from "../Constant/Action.type"

const initialState = {
    users : []
}

const UserReducer = (state = initialState,action) => {

    switch(action.type){
        case USER_LOGIN :
            return state;
            break;
        default :
            return state;
    }
}

export default UserReducer;