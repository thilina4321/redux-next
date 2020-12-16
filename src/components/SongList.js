import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actionType from '../store/actions/actions'

class SongList extends Component {    
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.songs.map((song, i)=>{
                    return <div onClick={()=>this.props.selectSong(song)}
                    key={i}
                    > 
                        <h3> {song.title} </h3>
                        <p> {song.duration} </p>
                    </div>
                })}
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    console.log(state);
    return {
        songs:state.songs,
        
    }
}

const mapStateToDispatch = (dispatch)=>{
    return {
        selectSong: (song)=> dispatch(actionType.songSelected(song))
    }
    
}

export default connect(mapStateToProps,mapStateToDispatch)(SongList);
