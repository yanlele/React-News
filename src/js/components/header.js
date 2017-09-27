import React,{Component} from 'react'

export default class ComponentHeader extends Component{
    constructor(){
        super();

        this.state={
            miniHeader:false//默认是加载高头部
        }
    }

    switchHeader(){
        this.setState({
            miniHeader:!this.state.miniHeader
        })
    }

    render(){
        const styleComponentHeader={
            header:{
                backgroundColor:'#333333',
                color:'#fff',
                paddingTop:(this.state.miniHeader)?'3px':'15px',
                paddingBottom:(this.state.miniHeader)?'3px':'15px'
            },

            //还可以定义其他的样式。。。
        };

        return(
            <header style={styleComponentHeader.header} className="smallFontSize" onClick={this.switchHeader.bind(this)}>
                <h1>首页header</h1>
            </header>
        )
    }
}