import React, {Component} from 'react'
import BodyChild from './bodyChild'
import ReactDOM from 'react-dom'

import ReactMixin from 'react-mixin'
import MixinLog from './mixins'

const defaultProps={
    username:'这是一个默认的用户名'
};

export default class BodyIndex extends Component {
    constructor() {
        super();//调用父类的所有初始化方法
        this.state = {
            username: 'Parry',
            age:20
        };
    }

    changeUserInfo(age) {
        this.setState({
            age:age
        });

        //第一种方式,reactDom获取原生节点操作
        // var mySubmitButton=document.getElementById('submitButton');
        // ReactDOM.findDOMNode(mySubmitButton).style.color='red';

        //第二种方式：refs操作节点
        console.log(this.refs.submitButton);
        this.refs.submitButton.style.color='red';

        MixinLog
    }

    handleChildValueChange(event){
        this.setState({
            age:event.target.value
        })
    }

    changeValue(e){
        this.setState({
            age:e.target.value
        })
    }
    changeAge(e,age){
        this.setState({
            age:age
        })
    }

    render() {
        /*        setTimeout(() => {
         //更改state的时候
         this.setState({
         username: 'Tom'
         })
         }, 4000);*/

        var html = "yanle   &nbsp;&nbsp;&nbsp;&nbsp;   testProject";
        return (
            <div>
                <h2>页面的主体内容</h2>
                <p>{this.state.username} {this.props.userId} ,age:{this.state.age}</p>
                <p>age:{this.state.age}</p>
                <input id="submitButton" ref='submitButton' type="button" value='提交' onClick={this.changeUserInfo.bind(this,99)}/>
                <BodyChild {...this.props} handleChildValueChange={this.handleChildValueChange.bind(this)}/>

                {/*双向绑定的研究*/}
                <label htmlFor="">双向绑定</label>
                <input type="text" onChange={this.changeValue.bind(this)} />
            </div>
        )
    }
}

BodyIndex.propTypes={
    userId:React.PropTypes.number.isRequired
};

BodyIndex.defaultProps=defaultProps;

ReactMixin(BodyIndex.prototype, MixinLog);
