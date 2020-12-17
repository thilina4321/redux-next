import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { Redirect } from "react-router-dom"
import * as actionType from '../../store/actions/actions'

const Logout = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actionType.logout())
        
    }, [dispatch]);

    return (
        <div>
            <Redirect to="/"/>
        </div>
    )
}

export default Logout
