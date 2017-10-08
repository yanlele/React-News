import React from 'react'
import ReactDOM from 'react-dom'
import MediaQuery from 'react-responsive'

import {Router,Route,hashHistory} from 'react-router'

/*导入路由*/
import PCIndex from '../components/pc/pc_index'
import MobileIndex from '../components/mobile/mobile_index'
import MobileNewsDetails from '../components/mobile/mobile_news_detail'
import PCNewsDetails from '../components/pc/pc_news_details'
import PCUserCenter from '../components/pc/pc_usercenter'


export default class Root extends React.Component{
    render(){
        return(
            <div>
                <MediaQuery query="(min-device-width:1224px)">
                    <Router history={hashHistory}>
                        <Route path="/" component={PCIndex}/>
                        <Route path="/details/:uniquekey" component={PCNewsDetails} />
                        <Route path="/usercenter" component={PCUserCenter}/>
                    </Router>
                </MediaQuery>
                <MediaQuery query="(max-device-width:1224px)">
                    <Router history={hashHistory}>
                        <Route path="/" component={MobileIndex}/>
                        <Route path="/details/:uniquekey" component={MobileNewsDetails} />
                    </Router>
                </MediaQuery>
            </div>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));