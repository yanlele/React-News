import React from 'react'
import {Card} from 'antd'
import {Router, Route, Link, browserHistory} from 'react-router'

export default class PCNewsImageBlock extends React.Component {
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
        const styleImage={
            display:'block',
            width:this.props.imageWidth,
            height:'90px',
        };
        const styleH3={
            width:this.props.imageWidth,
            whiteSpace:'nowrap',
            overflow:'hidden',
            textOverflow:'ellipsis'
        };

        const {news} = this.state;
        let newsList;
        if (news.length) {
            newsList = news.map((newsItem, index) => (
               <div key={index} className="imageblock">
                   <Link to={`details/${newsItem.uniquekey}`} target='_blank'>
                       <div className="custom-image">
                           <img src={newsItem.thumbnail_pic_s} style={styleImage} alt=''/>
                       </div>
                       <div className="custom-card">
                           <h3 style={styleH3}>{newsItem.title}</h3>
                           <p>{newsItem.author_name}</p>
                       </div>
                   </Link>
               </div>
            ))
        } else {
            newsList = '没有加载到新闻'
        }

        return (
            <div className="topNewsList mt20">
                <Card title={this.props.cartTitle} style={{width:this.props.width}}>
                    {newsList}
                </Card>
            </div>
        )
    }
}
