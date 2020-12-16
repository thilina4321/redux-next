
const initialState = [
        {title:'Song 1', duration:'3.02'},
        {title:'Song 2', duration:'2.02'},
        {title:'Song 3', duration:'5.02'},
    ]


const songsReducer = (state=initialState, action) => {
    switch(action.type){
        default : return state
    }
}

export default songsReducer
