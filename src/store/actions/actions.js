import axios from 'axios'
export const SELECTSONG = 'SELECTSONG'
export const AUTH_START = 'AUTH_START'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAIL = 'AUTH_FAIL'
export const AUTH_TIMEOUT = 'AUTH_TIMEOUT'
export const LOGOUT = 'LOGOUT'

export const songSelected = (song)=>{
    return {
        type:SELECTSONG, 
        payload:song
    }
}

export const authStart = ()=>{
    return {
        type:AUTH_START
    }
}

export const authSuccess = (userId, token)=>{
    return {
        type:AUTH_SUCCESS,
        userId:userId,
        token:token
    }
}

export const authFail = (error)=>{
    return {
        type:AUTH_FAIL,
        error:error
    }
}


export const auth = (email, password)=>{
    
    return (dispatch)=>{
        dispatch(authStart())
        const authData = {
            email:email,
            password:password,
            returnSecureToken:true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDMCvMVzRS7yLRCwr_0e_BA8-JNLFrBp88',{
            authData
        }).then((response=>{
            dispatch(authSuccess(response.data.localId, response.data.idToken))
            
            // start of the auto logout functionality
            setTimeout(() => {
                dispatch({
                    type:AUTH_TIMEOUT
                })
            // end of the auto logout functionality    
                
            }, response.data.expiresIn * 1000);
        })).catch(err=>{
            dispatch(authFail(err))
        })
    }
}


export const logout = ()=>{
    console.log('logout called');
    return (dispatch)=>{
        dispatch({
            type:LOGOUT
        })
    }
}