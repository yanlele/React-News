import React from 'react'
import {Row, Col} from 'antd'
import {Router, Route, Link, browserHistory} from 'react-router'

export default class MobileList extends React.Component {
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
        const styleImage = {
            display: 'block',
            width: this.props.imageWidth,
            height: '90px',
        };
        const styleH3 = {
            width: this.props.imageWidth,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        };

        const {news} = this.state;
        let newsList;
        if (news.length) {
            newsList = news.map((newsItem, index) => (
                <section key={index} className="m_article list-item special_section clearfix">
                    <Link to={`details/${newsItem.uniquekey}`}>
                        <div className="m_article_img">
                            <img src={newsItem.thumbnail_pic_s} alt={newsItem.title}/>
                        </div>
                        <div className="m_article_info">
                            <div className="m_article_title">
                                <span>{newsItem.title}</span>
                            </div>
                            <div className="m_article_desc clearfix">
                                <div className="m_article_desc_l">
                                    <span className="m_article_channel">{newsItem.realtype}</span>
                                    <span className="m_article_time">{newsItem.date}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </section>
            ))
        } else {
            newsList = '没有加载到新闻'
        }

        return (
            <div>
                <Row>
                    <Col span={24}>
                        {newsList}
                    </Col>
                </Row>
            </div>
        )
    }
}
