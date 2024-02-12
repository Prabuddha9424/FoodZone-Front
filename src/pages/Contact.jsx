import {Button, Col, Form, Input, InputNumber, Row} from "antd";
import ContactUs from '../assets/images/contact-reception.jpg'

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 18,
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
}
const onFinish = (values) => {
    console.log(values);
};
function Contact(){
    return(
        <div>
            <Row>
                <p className="text-textColor font-serif text-6xl w-full text-center py-6">Contact Us</p>
            </Row>
            <Row className="mb-20">
                <Col span={16} className="flex flex-col items-center justify-center pr-6">
                    <p className=" text-textColor text-base pl-28 pb-10">
                        Connect with us effortlessly at
                        <span className="text-primaryColor text text-xl font-bold">Food Zone</span>.
                        Whether you have inquiries about our premium food products,
                        need assistance with orders, or want to explore collaboration opportunities,
                        our dedicated team is here to assist you. Reach out and let's embark on a
                        culinary journey together
                    </p>
                    {/*<Form
                        {...layout}
                        name="nest-messages"
                        onFinish={onFinish}
                        style={{maxWidth: 800,}}
                        validateMessages={validateMessages}
                        className="w-full"
                    >
                        <Form.Item
                            name={['user', 'name']}
                            label="Name"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['user', 'email']}
                            label="Email"
                            rules={[
                                {
                                    type: 'email',
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['user', 'age']}
                            label="Age"
                            rules={[
                                {
                                    type: 'number',
                                    min: 0,
                                    max: 99,
                                },
                            ]}
                        >
                            <InputNumber />
                        </Form.Item>
                        <Form.Item name={['user', 'introduction']} label="Send a Message">
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                ...layout.wrapperCol,
                                offset: 6,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>*/}
                </Col>
                <Col span={8}>
                    <img src={ContactUs} alt="staff" className="w-4/5 rounded-full border border-primaryColor"/>
                </Col>
            </Row>
        </div>

    )
}

export default Contact;