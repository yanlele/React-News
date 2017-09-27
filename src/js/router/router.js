import React from 'react'
import ReactDOM from 'react-dom'

import App from '../../App'
import ComponentList from '../components/list'

import {Router,Route,hashHistory} from 'react-router'

export default class Root extends React.Component{
    render(){
        return(
            //这里替换替换了之前的index成为了程序的入口
            <Router history={hashHistory}>
                <Route component={App} path="/"/>
                <Route component={ComponentList} path="/list"/>
            </Router>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));