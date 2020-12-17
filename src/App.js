import React, { Fragment } from 'react'
import Layout from './Layout/Layout'
import Navigation from './Layout/Navigation/Navigation'
import Auth from './components/Auth'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import SongList from './components/SongList'
import {connect} from 'react-redux'
import Logout from './Layout/Logout/Logout'

const App = (props) => {

    let route = <Switch>
        <Route path="/logout" component={Logout}/>
        <Route path="/" component={Auth}/>
        <Redirect to="/"/>
    </Switch>

    if(props.isAuthenticate){
        route = <Switch>
        <Route path="/songs" component={SongList}/>
        <Route path="/logout" component={Logout}/>
    </Switch>
    }

    return (
        <Fragment>
            <BrowserRouter>
                <Navigation/>
                <Layout>
                    {route}
                </Layout>
            </BrowserRouter>
        </Fragment>
    )
}

const mapStateToProps = (state)=>{
    console.log(state.auth.token);
    return {
        isAuthenticate:state.auth.token !== null
    }
}
export default connect(mapStateToProps)(App)
