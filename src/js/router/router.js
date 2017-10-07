import React from 'react'
import ReactDOM from 'react-dom'
import MediaQuery from 'react-responsive'

import {Router,Route,hashHistory} from 'react-router'

/*导入路由*/
import PCIndex from '../components/pc/pc_index'
import MobileIndex from '../components/mobile/mobile_index'
import PCNewsDetails from '../components/pc/pc_news_details'


export default class Root extends React.Component{
    render(){
        return(
            <div>
                <MediaQuery query="(min-device-width:1224px)">
                    <Router history={hashHistory}>
                        <Route path="/" component={PCIndex}/>
                        <Route path="/details/:uniquekey" component={PCNewsDetails} />
                    </Router>
                </MediaQuery>
                <MediaQuery query="(max-device-width:1224px)">
                    <MobileIndex/>
                </MediaQuery>
            </div>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));