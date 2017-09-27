import React from 'react'
import ReactDOM from 'react-dom'

import {Router,Route,hashHistory} from 'react-router'

import {Button} from 'antd'

export default class Root extends React.Component{
    render(){
        return(
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));