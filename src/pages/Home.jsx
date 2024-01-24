import { Row,Col, ConfigProvider, theme } from "antd";
function Home(){
    return(
        <ConfigProvider
        theme={{
            token: {
                colorPrimary: "#faad14",
                colorInfo: "#faad14",
                colorWarning: "#fa541c",
                colorBgBase: "#050606",
                borderRadius: 13,
            },
            algorithm:theme.defaultAlgorithm
        }}
        >
        <Row >
            <Col span={16} className="h-auto border border-primaryColor">
                <Row className="h-20 border border-red-600">
                    <h1>We Curate Delectable <br />
                    Set Menus, Irresistible Desserts, and Refreshing Beverages <br /> 
                    to Elevate Your Everyday Culinary Experience</h1>
                </Row>
                <Row className="h-10 border border-red-600"></Row>
                <Row className="h-10 border border-red-600"></Row>
            </Col>
            <Col span={8} className="h-10 border border-red-600"></Col>
        </Row>
        </ConfigProvider>
    )
}

export default Home;