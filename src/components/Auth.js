import React, { Component } from 'react'
import './Auth.css'
import {connect} from 'react-redux'
import * as actionType from '../store/actions/actions'


class Auth extends Component {

    authHandler = (e)=>{
        e.preventDefault()
        const email = e.target.elements.email.value
        const password = e.target.elements.password.value
        this.props.onAuth(email, password)
        this.props.history.push('/songs')
    }
    render() {
        return (
            <div>
                <form onSubmit={this.authHandler}>
                    <div className="signInform">                        
                        <input name="email" placeholder="Email"/>
                        <input name="password" placeholder="Password"/>
                        <button> Submit </button>
                    </div>
                </form>
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch)=>{
    return {
        onAuth : (email,password)=> dispatch(actionType.auth(email, password))
    }
}

export default connect(null, mapDispatchToProps)(Auth)