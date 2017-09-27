import React, {Component} from 'react';
import ComponentHeader from './js/components/header'
import ComponentFooter from './js/components/footer'
import BodyIndex from './js/components/bodyIndex'

class Index extends Component{
    componentWillMount(){
        //将要加载
        console.log('Index - componentWillMount')
    }

    componentDidMount(){
        //加载完成
        console.log('Index-componentDidMount')
    }


    render(){
        return(
            <div>
                <ComponentHeader/>
                <BodyIndex userId={123456}/>
                <ComponentFooter/>
            </div>
        )
    }
}

export default Index;
