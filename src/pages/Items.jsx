import {Col, Menu, Row, Spin} from 'antd';
import {Input} from 'antd';
import {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import {SearchOutlined} from "@ant-design/icons";
import ItemCard from "../components/ItemCard.jsx";
import {getAllProducts} from "../helpers/ApiHelpers.js";

let allItems=[];

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
    const [filteredArr, setFilteredArr] = useState([])
    const [cartData, setCartData] = useState([]);
    const [spinning, setSpinning] = useState(false);
    useEffect(() => {
        if (filteredArr){
            fetchData();
        }
    }, []);

    const fetchData = async () => {
        const response = await getAllProducts();
        allItems = response.data;
        await setData(allItems);
    }
    const setData = async (dataArr) => {
        setSpinning(true);
        if (dataArr === null) {
            setCartData([]);
        } else if (dataArr.length !== null) {
            let cart = [];
            dataArr.forEach((data, x) => {
                let dataObj = {
                    key: x,
                    name: data.name,
                    price: data.price,
                    qty: data.qty,
                    category: data.category,
                    image: data.image,
                    intro: data.intro,
                };
                cart.push(dataObj);
            })
            setCartData(cart);
        } else {
            setCartData([]);
        }
        setSpinning(false);
    };
    const onClick = (e) => {
        setCurrent(e.key);
    };
    const items = [
        getItem(<Link to="/items">All items</Link>, '1'),
        getItem(<Link to="/items/setmenu">Set Menu</Link>, '2'),
        getItem(<Link to="/items/desert">Desert</Link>, '3'),
        getItem(<Link to="/items/beverage">Beverage</Link>, '4'),
    ];
    const searchData = (text) => {
        if (text !== null && text.trim() !== "") {
            let filtered = allItems.filter((data) => {
                return data.name.toLowerCase().includes(text.toLowerCase());
            });
            console.log(filtered);
            setFilteredArr(filtered);
            setData(filtered);
        } else {
            setFilteredArr([]);
            setData([]);
        }
    };

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
                            <Input
                                className="rounded-full"
                                type="text"
                                placeholder="Search food items"
                                style={{width: 500}}
                                onChange={(e) => {
                                    searchData(e.target.value);
                                }}
                                suffix={<SearchOutlined
                                    style={{fontSize: '16px', color: 'var(--border-blue)', fontWeight: 'bolder'}}
                                    className="site-form-item-icon"/>}
                            />
                        </Row>

                        <Row>
                            {(filteredArr.length===0) ? (
                                <Outlet/>
                            ) : (
                                <>
                                    <Spin spinning={spinning}>
                                        <div className="border-b border-primaryColor mb-2">
                                            <br/>
                                            <div className="w-full grid grid-cols-3 gap-16 px-10 pb-10">
                                                {cartData && cartData.map((item) => (
                                                    <ItemCard
                                                        key={item.key}
                                                        image={item.image}
                                                        itemName={item.name}
                                                        itemPrice={item.price}
                                                        itemDesc={item.intro}
                                                        Quantity={item.qty}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </Spin>
                                </>
                            )}

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