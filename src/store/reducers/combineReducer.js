import {combineReducers} from 'redux'
import SongsReducer from './songsReducer'
import SelectedSong from './SelectedSongs'

export default combineReducers({
    songs:SongsReducer,
    selectedSong:SelectedSong
})

