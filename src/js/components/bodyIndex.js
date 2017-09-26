import React, {Component} from 'react'

export default class BodyIndex extends Component {
    render() {
        var userName='parry123123';
        var boolInput=false;

        var html="yanle   &nbsp;&nbsp;&nbsp;&nbsp;   testProject";
        return (
            <div>
                <h2>页面的主体内容</h2>
                <p>{userName==''?'用户没有登录':userName}</p>
                <p><input type="button" value={userName} disabled={boolInput}/></p>
                {/*注释*/}
                <p>{html}</p>
                <p dangerouslySetInnerHTML={{__html:html}}></p>
            </div>
        )
    }
}