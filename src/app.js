import React from 'react'
import Login from "./container/login/login"
import Register from "./container/register/register"
import AuthRoute from './component/authroute/authroute'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import Dashboard from './component/dashboard/dashboard'
import Chat from './component/chat/chat'
import { Route, Switch } from 'react-router-dom'

// This component can be used by front end and back end 

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(err, info) {
        console.log(err, info)
        this.setState({
            hasError: true
        })
    }
    render() {
        return this.state.hasError 
        ? <img src={require('./error.png')} alt="error" />
        : (
            <div>
                <AuthRoute></AuthRoute>
                {/* hit the first matched one and return */}
                <Switch>
                    <Route path='/bossinfo' component={BossInfo}></Route>
                    <Route path='/geniusinfo' component={GeniusInfo}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route path='/chat/:user' component={Chat}></Route>
                    <Route component={Dashboard}></Route>
                </Switch>
            </div>
        )
    }
}

export default App