import React,{Component} from 'react'

export default class ComponentHeader extends Component{
    render(){
        const styleComponentHeader={
            header:{
                backgroundColor:'#333333',
                color:'#fff',
                'padding-top':'15px',
                paddingBottom:'15px'
            },

            //还可以定义其他的样式。。。
        };

        return(
            <header style={styleComponentHeader.header}>
                <h1>首页header</h1>
            </header>
        )
    }
}