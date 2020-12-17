import * as actionType from '../actions/actions'
const initialState = {
    userId:null,
    token:null,
    error:null,
    isLoading:false
}

const authReducer = (state=initialState, action) => {
    console.log('action', action);
    switch(action.type){
        case actionType.AUTH_START : return {...state, isLoading:true}
        case actionType.AUTH_SUCCESS : return {
            userId:action.userId,
            token:action.token,
            error:null,
            isLoading:false
        }
        case actionType.AUTH_FAIL : return {
            ...state,
            error:action.error
        }
        case actionType.AUTH_TIMEOUT : return {
            ...state,
            userId:null,
            token:null
        }
        case actionType.LOGOUT : return {
            ...state,
            userId:null,
            token:null
        }
        default : return state
    }
}

export default authReducer
