import {connect} from 'react-redux'

const SongDetails = (props) => {
    return (
        <div> 
            { props.selectSong && <div>
                <p> {props.selectSong.title} </p>
                <p> {props.selectSong.duration} </p>
            </div>}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        selectSong:state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetails)
