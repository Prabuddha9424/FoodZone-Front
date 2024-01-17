import {Breadcrumb, Layout, Menu, theme} from 'antd';
import AppLogo from '../assets/images/foodZone-logo.png'

const {Header, Footer, Content} = Layout;
// const items = new Array(15).fill(null).map((_, index) => ({
//     key: index + 1,
//     label: `nav ${index + 1}`,
// }));

const items=[
    {
        key:1,
        label:'Home'
    },
    {
        key:2,
        label:'Menu'
    },
    {
        key:3,
        label:'Items'
    },
    {
        key:4,
        label:'About'
    },{
        key:5,
        label:'Contact US'
    },
]
function UserMain() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout className='border border-red-700 w-screen overflow-hidden h-screen'>
            <Header style={{display: 'flex', alignItems: 'center',}} className='border border-red-700 h-[150px]'>
                <div className="w-[120px] h-[120px] border border-orange-700">
                    <img src={AppLogo} alt="Logo"/>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
            </Header>

            <Content style={{padding: '0 48px',}}>
                <Breadcrumb style={{margin: '16px 0',}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    Content
                </div>
            </Content>

            <Footer style={{textAlign: 'center',}}>
                PSDev Design ©{new Date().getFullYear()} Created by Prabuddha Jayasekara
            </Footer>
        </Layout>
    )
}

export default UserMain;