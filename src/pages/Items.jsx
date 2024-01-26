import {Button, Card, Col, ConfigProvider, Menu, Row} from 'antd';
import {Select} from 'antd';

const {Meta} = Card;
import SetMenu1 from '../assets/images/set menu-1-Indian-Naan-Family-Meal.jpg'
import {Input} from 'antd';
import {useState} from "react";

const {Search} = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

function getItem(label, key, icon, children, theme) {
    return {
        key,
        icon,
        children,
        label,
        theme,
    };
}

function Items() {
    const [current, setCurrent] = useState('1');
    const onClick = (e) => {
        setCurrent(e.key);
    };
    const items = [
        getItem('All items', '1'),
        getItem('Set Menu', '2'),
        getItem('Desert', '3'),
        getItem('Beverage', '4'),
    ];
    return (
        <div className="my-20">
            <Row>
                <p className="text-textColor font-serif text-6xl w-full text-center py-">Our Food Items</p>
            </Row>
            <Row className="h-auto flex items-center justify-between my-10 mr-20">
                <Search placeholder="input search text" onSearch={onSearch} style={{width: 300, paddingBlock: 10}}/>
                <div>
                    <Select
                        showSearch
                        style={{
                            width: 200,
                        }}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={[
                            {
                                value: '1',
                                label: 'Not Identified',
                            },
                            {
                                value: '2',
                                label: 'Closed',
                            },
                            {
                                value: '3',
                                label: 'Communicated',
                            },
                            {
                                value: '4',
                                label: 'Identified',
                            },
                            {
                                value: '5',
                                label: 'Resolved',
                            },
                            {
                                value: '6',
                                label: 'Cancelled',
                            },
                        ]}
                    />
                </div>
            </Row>

            <Row>
                <Col span={6} className="h-60">
                    <p className="text-textColor font-serif text-3xl w-full ml-2 mb-2">Category</p>
                    <Menu
                        onClick={onClick}
                        style={{width: 300}}
                        openKeys={['1']}
                        selectedKeys={[current]}
                        mode="vertical"
                        items={items}
                        className="bg-transparent "
                    />
                </Col>
                <Col span={18} className="grid grid-cols-3 gap-4 px-10">
                    <Card
                        hoverable
                        style={{
                            width: 250,
                        }}
                        cover={<img alt="Indian Naan Family Meal " src={SetMenu1}/>}
                        className="flex flex-col items-center justify-center text-center"
                    >
                        <Meta
                            className="flex flex-col items-center justify-center"
                            title={<span style={{color: "var( --primary-color)", fontSize: '16px'}}>Indian Naan Family Meal</span>}
                            description={<span
                                style={{color: "var(--text-color)", fontSize: '20px'}}>₨4,600 – ₨11,500</span>}
                        />
                        <Button type="primary" style={{marginTop: '20px'}}>Add to Cart</Button>

                    </Card>
                    <Card
                        hoverable
                        style={{
                            width: 250,
                        }}
                        cover={<img alt="Indian Naan Family Meal " src={SetMenu1}/>}
                        className="flex flex-col items-center justify-center text-center"
                    >
                        <Meta
                            className="flex flex-col items-center justify-center"
                            title={<span style={{color: "var( --primary-color)", fontSize: '16px'}}>Indian Naan Family Meal</span>}
                            description={<span
                                style={{color: "var(--text-color)", fontSize: '20px'}}>₨4,600 – ₨11,500</span>}
                        />
                        <Button type="primary" style={{marginTop: '20px'}}>Add to Cart</Button>

                    </Card>
                    <Card
                        hoverable
                        style={{
                            width: 250,
                        }}
                        cover={<img alt="Indian Naan Family Meal " src={SetMenu1}/>}
                        className="flex flex-col items-center justify-center text-center"
                    >
                        <Meta
                            className="flex flex-col items-center justify-center"
                            title={<span style={{color: "var( --primary-color)", fontSize: '16px'}}>Indian Naan Family Meal</span>}
                            description={<span
                                style={{color: "var(--text-color)", fontSize: '20px'}}>₨4,600 – ₨11,500</span>}
                        />
                        <Button type="primary" style={{marginTop: '20px'}}>Add to Cart</Button>

                    </Card>
                    <Card
                        hoverable
                        style={{
                            width: 250,
                        }}
                        cover={<img alt="Indian Naan Family Meal " src={SetMenu1}/>}
                        className="flex flex-col items-center justify-center text-center"
                    >
                        <Meta
                            className="flex flex-col items-center justify-center"
                            title={<span style={{color: "var( --primary-color)", fontSize: '16px'}}>Indian Naan Family Meal</span>}
                            description={<span
                                style={{color: "var(--text-color)", fontSize: '20px'}}>₨4,600 – ₨11,500</span>}
                        />
                        <Button type="primary" style={{marginTop: '20px'}}>Add to Cart</Button>

                    </Card>
                    <Card
                        hoverable
                        style={{
                            width: 250,
                        }}
                        cover={<img alt="Indian Naan Family Meal " src={SetMenu1}/>}
                        className="flex flex-col items-center justify-center text-center"
                    >
                        <Meta
                            className="flex flex-col items-center justify-center"
                            title={<span style={{color: "var( --primary-color)", fontSize: '16px'}}>Indian Naan Family Meal</span>}
                            description={<span
                                style={{color: "var(--text-color)", fontSize: '20px'}}>₨4,600 – ₨11,500</span>}
                        />
                        <Button type="primary" style={{marginTop: '20px'}}>Add to Cart</Button>

                    </Card>
                    <Card
                        hoverable
                        style={{
                            width: 250,
                        }}
                        cover={<img alt="Indian Naan Family Meal " src={SetMenu1}/>}
                        className="flex flex-col items-center justify-center text-center"
                    >
                        <Meta
                            className="flex flex-col items-center justify-center"
                            title={<span style={{color: "var( --primary-color)", fontSize: '16px'}}>Indian Naan Family Meal</span>}
                            description={<span
                                style={{color: "var(--text-color)", fontSize: '20px'}}>₨4,600 – ₨11,500</span>}
                        />
                        <Button type="primary" style={{marginTop: '20px'}}>Add to Cart</Button>

                    </Card>
                </Col>
            </Row>

            <div className="grid grid-cols-3 gap-4">

            </div>

        </div>
    )
}

export default Items;