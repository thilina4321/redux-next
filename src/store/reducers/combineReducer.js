import {combineReducers} from 'redux'
import SongsReducer from './songsReducer'
import SelectedSong from './SelectedSongs'
import authReducer from './authReducer'

export default combineReducers({
    songs:SongsReducer,
    selectedSong:SelectedSong,
    auth:authReducer
})

