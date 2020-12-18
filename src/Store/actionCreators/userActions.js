export const ADDUSERDATA = 'ADDUSERDATA'

export const userData = (user)=>{
    return {
        type:ADDUSERDATA,
        user:user
    }
}