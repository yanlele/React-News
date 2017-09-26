import React, {Component} from 'react'

export default class BodyIndex extends Component {
    render() {
        var userName='parry';

        return (
            <div>
                <h2>页面的主体内容</h2>
                <p>{userName==''?'用户没有登录':userName}</p>
            </div>
        )
    }
}