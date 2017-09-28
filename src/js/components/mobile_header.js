import React from 'react';

export default class MobileHeader extends React.Component{
    render(){
        return(
            <div id="mobileHeader">
                <header>
                    <img src={require('../../images/logo.png')} alt="logo"/>
                    <span>ReactNews</span>
                </header>
            </div>
        )
    }
}