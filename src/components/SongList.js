import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actionType from '../store/actions/actions'
import {Redirect} from 'react-router-dom'

class SongList extends Component {  
    
    
    
    // {this.props.token && <Redirect to="/"/>}
    render() {
        let authRedirect;
        if(this.props.isAuthenticate){
            console.log(this.props.isAuthenticate);
            authRedirect = <Redirect to="/songs"/>
        }
        return (
            <div>
                {authRedirect}
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
    return {
        songs:state.songs,
        isAuthenticate:state.auth.token !== null        
    }
}

const mapStateToDispatch = (dispatch)=>{
    return {
        selectSong: (song)=> dispatch(actionType.songSelected(song))
    }
    
}

export default connect(mapStateToProps,mapStateToDispatch)(SongList);
