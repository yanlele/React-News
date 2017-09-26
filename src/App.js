import React, {Component} from 'react';
import './App.css';
import ComponentHeader from './js/components/header'
import ComponentFooter from './js/components/footer'
import BodyIndex from './js/components/bodyIndex'

class Index extends Component{
    render(){
        return(
            <div>
                <ComponentHeader/>
                <BodyIndex/>
                <ComponentFooter/>
            </div>
        )
    }
}

export default Index;
