import React from 'react'
import SongDetails from './components/SongDetails'
import SongList from './components/SongList'

const App = () => {
    return (
        <div>
            <SongList />
            <hr/>
            <SongDetails />
        </div>
    )
}

export default App
