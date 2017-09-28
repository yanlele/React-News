import React from 'react'
import ReactDOM from 'react-dom'

import {Router,Route,hashHistory} from 'react-router'

/*导入路由*/
import PCIndex from '../components/pc_index'

export default class Root extends React.Component{
    render(){
        return(
            <div>
                <PCIndex/>
            </div>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));