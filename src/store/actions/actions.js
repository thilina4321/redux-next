export const SELECTSONG = 'SELECTSONG'


export const songSelected = (song)=>{
    return {
        type:SELECTSONG, 
        payload:song
    }
}