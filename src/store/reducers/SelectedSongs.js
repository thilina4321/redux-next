import * as actionType from '../actions/actions'

const initialState = null

const SelectedSongs = (state=initialState, action) => {
    switch(action.type){
        case actionType.SELECTSONG: return action.payload
        default : return state
    }
}

export default SelectedSongs
