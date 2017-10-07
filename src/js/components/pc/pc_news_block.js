import React from 'react'
import {Card} from 'antd'
import {Router, Route, Link, browserHistory} from 'react-router'

export default class PCNewsBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            news: '',

        }
    }

    componentWillMount() {
        let myFetchOptions = {
            method: 'GET'
        };

        //获取新闻，复制给news变量接受信息
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({
                news: json
            }));
    }

    render() {
        const {news} = this.state;
        let newsList;
        if (news.length) {
            newsList = news.map((newsItem, index) => (
                <li key={index} >
                    <Link to={`/details/${newsItem.uniquekey}`} target='_blank'>
                        {newsItem.title}
                    </Link>
                </li>
            ))
        } else {
            newsList = '没有加载到新闻'
        }

        return (
            <div className="topNewsList">
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }
}
