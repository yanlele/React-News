import React, {Component} from 'react'

export default class BodyIndex extends Component {
    constructor() {
        super();//调用父类的所有初始化方法
        this.state = {
            username: 'Parry',
            age:20
        };
    }


    changeUserInfo() {
        this.setState({
            age:18
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
                <input type="button" value='提交' onClick={this.changeUserInfo.bind(this)}/>
            </div>
        )
    }
}