import React from 'react';
import {Row, Col} from 'antd';
import {
    Menu,
    Icon,
    Tabs,
    message,
    Form,
    Input,
    Button,
    CheckBox,
    Modal
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

class PCHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: ['top'],
            modalVisible: false,//是否可见
            action: 'login',
            hasLogined: false,//是否登录
            userNickName: '',//用户昵称
            userid: 0
        }
    }

    /*是否显示模态框的方法*/
    setModalVisible(value){
        this.setState({
            modalVisible:value
        })
    };

    /*导航栏点击*/
    handleClick(e){
        if(e.key='register'){
            this.setState({
                current:'register'
            });
            this.setModalVisible(true)
        }else{
            this.setState({
                current:e.key
            })
        }
    };

    /*页面提交的方法*/
    handleSubmit(e){
        //页面开始想后端提交数据

    }

    render() {
        let {getFieldProps} = this.props.form;
        //根据用户的登录状态显示不同的组件
        const userShow = this.state.hasLogined ?
            <Menu.Item key="logout" class="register">
                <Button type='primary' htmlType='button'>{this.state.userNickName}</Button>
                &nbsp;&nbsp;
                <link target='_blank'>
                    <Button type="dashed" htmltype='button'>个人中心</Button>
                </link>
                &nbsp;&nbsp;
                <link target='_blank'>
                    <Button type="ghost" htmltype='button'>退出</Button>
                </link>
            </Menu.Item>
            :
            <Menu.Item key="register" className="register">
                <Icon type="appstore"/>注册/登录
            </Menu.Item>;
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src={require('../../../images/logo.png')} alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        {/*放置导航*/}
                        <Menu
                            mode="horizontal"
                            selectedKeys={this.state.current}
                            onClick={this.handleClick.bind(this)}>

                            <Menu.Item key="top">
                                <Icon type="appstore"/>头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore"/>社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="appstore"/>国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="appstore"/>国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore"/>娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore"/>体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="appstore"/>科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="appstore"/>时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>

                        <Modal
                            title="用户中心"
                            wrapClassName="vertical-center-modal"
                            visible={this.state.modalVisible}
                            onCancel={() => this.setModalVisible(false)}
                            onOk={() => this.setModalVisible(false)}
                            okText='关闭'
                        >
                            <Tabs type="card">
                                <TabPane tab="注册" key="2">
                                    <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label='账户'>
                                            <Input placeholder="请输入您的账号" {...getFieldProps('r_userName')}/>
                                        </FormItem>
                                        <FormItem label='密码'>
                                            <Input type="password" placeholder="请输入您的密码" {...getFieldProps('r_password')}/>
                                        </FormItem>
                                        <FormItem label='确认密码'>
                                            <Input type="password" placeholder="请再次输入您的密码" {...getFieldProps('r_confirmPassword')}/>
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">注册</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>

                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
}

export default PCHeader = Form.create({})(PCHeader)