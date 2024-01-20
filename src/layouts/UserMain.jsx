import {Breadcrumb, Button, ConfigProvider, Form, Input, Layout, Menu, theme} from 'antd';
import AppLogo from '../assets/images/foodZone-logo.png'
import VisaLogo from '../assets/images/visa.png'
import MasterCardLogo from '../assets/images/master.png'
import AmexLogo from '../assets/images/amex.png'
import PaypalLogo from '../assets/images/paypal.png'
import {
    AppstoreOutlined,
    EnvironmentOutlined,
    FacebookOutlined, InstagramOutlined,
    MailOutlined,
    PhoneOutlined,
    SettingOutlined, TwitterOutlined, WhatsAppOutlined, YoutubeOutlined
} from '@ant-design/icons';
import {useState} from "react";

const {Header, Footer, Content} = Layout;

function getItem(label, key, icon) {
    return {
        key,
        icon,
        label,
    };
}

const items = [
    getItem('Home', 1, <MailOutlined/>),
    getItem('Menu', 2, <AppstoreOutlined/>),
    getItem('Items', 3, <SettingOutlined/>),
    getItem('About', 4, <SettingOutlined/>),
    getItem('Contact Us', 5, <SettingOutlined/>)
];

function UserMain() {
    const [current, setCurrent] = useState('1');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#faad14",
                    colorInfo: "#faad14",
                    colorWarning: "#fa541c",
                    colorBgBase: "#050606",
                    borderRadius: 13,
                },
                algorithm: theme.darkAlgorithm,
                components: {},
            }}
        >
            <Layout className='border border-red-700 w-screen'>
                <Header className='w-full h-[120px] flex items-center bg-BackgroundColor sticky top-0 mt-5'>
                    <div className="w-[120px] h-auto mr-4">
                        <img src={AppLogo} alt="Logo"/>
                    </div>
                    <div className="w-full h-20 flex items-center justify-center">
                        <Menu
                            onClick={onClick}
                            defaultOpenKeys={[1]}
                            selectedKeys={[current]}
                            mode="horizontal"
                            items={items}
                            className="bg-transparent w-full"
                        />
                    </div>
                </Header>

                <Content style={{padding: '0 48px',}}>
                    <Breadcrumb style={{margin: '16px 0',}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{
                        minHeight: 280,
                        padding: 24,
                    }}
                         className="border border-orange-700 h-auto"
                    >
                        Content
                        <div className="h-40 w-full bg-purple-600"></div>
                        <div className="h-40 w-full bg-yellow-500"></div>
                        <div className="h-40 w-full bg-purple-600"></div>
                        <div className="h-40 w-full bg-amber-50"></div>
                    </div>
                </Content>

                <Footer style={{textAlign: 'center',}} className="pb-1">
                    <div className="w-full h-auto flex items-startjustify-between">
                        {/*-----------who we are start-----------*/}
                        <div className="flex flex-col items-center pl-2 w-3/12 h-full">
                            <img className="w-16 h-16 rounded-full border border-primaryColor" src={AppLogo} alt="AppLogo"/>
                            <p className="pt-4 text-center px-4">
                                We are your culinary destination, crafting unforgettable
                                experiences with curated set menus, decadent desserts,
                                and refreshing beverages. Discover extraordinary flavors with us!
                                <br/><br/>
                                We are accepting,
                            </p>
                            <div className="w-full py-4 flex items-center justify-evenly">
                                <img src={VisaLogo} alt="VisaCard" className="w-12"/>
                                <img src={MasterCardLogo} alt="MasterCard" className="w-12"/>
                                <img src={AmexLogo} alt="AmexCard" className="w-12"/>
                                <img src={PaypalLogo} alt="PaypalCard" className="w-12"/>
                            </div>
                        </div>
                        {/*-----------contact us start-----------*/}
                        <div className="w-4/12 h-full px-10 ml-20 flex flex-col items-start">
                            <h1 className="text-xl font-medium mb-5">Contact Us</h1>
                            <div className="flex items-start justify-start mb-5">
                                <div className="flex items-center justify-center mr-4 pt-1">
                                    <EnvironmentOutlined style={{ fontSize: '25px', color: 'var(--primary-color)' }}/>
                                </div>
                                <p className="text-start">
                                    123 Main Street, Suite 456,<br/>
                                    Cityville, CA 12345 <br/>
                                    USA
                                </p>
                            </div>
                            <div className="flex items-center justify-start mb-5">
                                <div className="flex items-center justify-center mr-4">
                                    <PhoneOutlined style={{ fontSize: '25px', color: 'var(--primary-color)' }}/>
                                </div>
                                <p className="text-start">
                                    +94 715222123<br/>
                                    +1 2666626262<br/>
                                </p>
                            </div>
                            <div className="flex items-center justify-start">
                                <div className="flex items-center justify-center mr-4">
                                    <MailOutlined style={{ fontSize: '25px', color: 'var(--primary-color)' }}/>
                                </div>
                                <p className="text-start">
                                    psdev@gmail.com
                                </p>
                            </div>

                        </div>
                        {/*-----------stay connected start-----------*/}
                        <div className="w-5/12 h-full flex flex-col items-start">
                            <h1 className="text-xl font-medium mb-5">Stay Connected</h1>
                            <p className="pb-4">Stay updated with us and receive exclusive offers!</p>
                            <div className="w-full flex justify-center items-center">
                                <Form
                                    className=" w-full"
                                    layout="inline"
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item className="w-8/12">
                                        <Input placeholder="email" />
                                    </Form.Item>
                                    <Form.Item className="">
                                        <Button>Subscribe</Button>
                                    </Form.Item>
                                </Form>
                            </div>
                            <div className="mt-10 w-3/5 flex items-center justify-between">
                                <a href="#" >
                                    <FacebookOutlined style={{ fontSize: '30px'}}/>
                                </a>
                                <a href="#" >
                                    <YoutubeOutlined style={{ fontSize: '30px'}}/>
                                </a>
                                <a href="#" >
                                    <WhatsAppOutlined style={{ fontSize: '30px'}}/>
                                </a>
                                <a href="#" >
                                    <InstagramOutlined style={{ fontSize: '30px'}}/>
                                </a>
                                <a href="#" >
                                    <TwitterOutlined style={{ fontSize: '30px'}}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className="mb-0">
                        PSDev Design ©{new Date().getFullYear()} Created by Prabuddha Jayasekara
                    </p>

                </Footer>
            </Layout>
        </ConfigProvider>
    )
}

export default UserMain;