import React, {Component} from 'react'

export default class BodyIndex extends Component {
    render() {
        var userName='parry';
        var boolInput=false;
        return (
            <div>
                <h2>页面的主体内容</h2>
                <p>{userName==''?'用户没有登录':userName}</p>
                <p><input type="button" value="默认按钮" disabled={boolInput}/></p>
            </div>
        )
    }
}