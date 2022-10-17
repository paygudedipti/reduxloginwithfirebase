
import * as types from "./actionType";

const initialState = {
    loading:false,
    currentUser:null,
    error:null
}

const userReducer = (state = initialState, action)=>{
    switch (action.type){
        case types.REGISTER_START:
            case types.LOGIN_START:
                case types.LOGOUT_START:   
                case types.GOOGLE_SIGIN_START: 
            return{
                ...state,
                 loading:true
            }

            case types.SET_USER:    
            return{
                ...state,
                 loading:false,
                 currentUser:action.payload
            }
            case types.REGISTER_SUCCES : 
            case types.LOGIN_SUCCES:
                case types.GOOGLE_SIGIN_SUCCES:
            return{
                ...state,
                loading:false,
                currentUser : action.payload,

            }
            
            case types.LOGOUT_SUCCES:
                return{
                    ...state,
                    currentUser:null
                }

            case types.REGISTER_FAIL:
                case types.LOGIN_FAIL:
                    case types.LOGOUT_FAIL:
                        case types.GOOGLE_SIGIN_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:action.payload,

                }
        default: 
        return state
    }
};

export default userReducer;


















