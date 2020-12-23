import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Redirect } from "react-router-dom"
import {auth} from './firebase'
import * as userAcitonType from '../Store/actionCreators/userActions'

const Logout = () => {

    const userDispatch = useDispatch()

    useEffect(()=>{
        userDispatch(userAcitonType.userData(null))
        auth.signOut()
    },[userDispatch])

    return (
        <div>
        <Redirect to="/login" />
        </div>
    )
}

export default Logout
