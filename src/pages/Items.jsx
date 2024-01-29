import {Col,Menu, Row} from 'antd';
import {Select} from 'antd';

import {Input} from 'antd';
import {useState} from "react";
import {Link, Outlet} from "react-router-dom";

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
        getItem(<Link to="/items">All items</Link>, '1'),
        getItem(<Link to="/items/setmenu">Set Menu</Link>, '2'),
        getItem(<Link to="/items/desert">Desert</Link>, '3'),
        getItem(<Link to="/items/beverage">Beverage</Link>, '4'),
    ];
    return (
        <div className="my-20">
            <Row>
                <p className="text-textColor font-serif text-6xl w-full text-center mb-10">Our Food Items</p>
            </Row>


            <Row>
                <Col span={6}>
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
                <Col span={18}>
                    <Row >
                        <Row className="h-auto w-11/12 p-10 flex items-center justify-between">
                            <Search placeholder="input search text" onSearch={onSearch} style={{width: 500, paddingBlock: 10}}/>
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
                            <Outlet/>
                        </Row>
                    </Row>

                </Col>
            </Row>

            <div className="grid grid-cols-3 gap-4">

            </div>

        </div>
    )
}

export default Items;