import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Modal} from 'antd';
import {Menu, Icon} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';

import {
    Tabs,
    message,
    Form,
    Input,
    Button,
    Checkbox,
    Card,
    notification,
    Upload
} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
// import {Router, Route, Link, browserHistory} from 'react-router'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class MobileUserCenter extends React.Component {
    render() {
        return (
            <div>
                <MobileHeader/>
                <Row>
                    <Col span={24}>
                        <Tabs>
                            <TabPane tab="我的搜藏" key="1">

                            </TabPane>
                            <TabPane tab="我的搜评论" key="2">

                            </TabPane>
                            <TabPane tab="头像设置" key="3">

                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>

                <MobileFooter/>
            </div>
        )
    }
}