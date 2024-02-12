import {Button, Col, Form, Input, message, Modal, Row, Spin, Table} from "antd";
import {useEffect, useState} from "react";
import {AiFillDelete} from "react-icons/ai";
import {FaEye} from "react-icons/fa";
import {deleteOrder, getAllOrders, getCustomerOrders, updateOrderPayStatus} from "../helpers/ApiHelpers.js";
import {FacebookOutlined, InstagramOutlined, WhatsAppOutlined, YoutubeOutlined} from "@ant-design/icons";
import VisaLogo from "../assets/images/visa.png";
import MasterCardLogo from "../assets/images/master.png";
import AmexLogo from "../assets/images/amex.png";
import PaypalLogo from "../assets/images/paypal.png";


const columns = [
    {
        title: 'Order Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Item',
        dataIndex: 'item',
        key: 'item',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Quantity',
        dataIndex: 'qty',
        key: 'qty',
    },
    {
        title: 'Option',
        dataIndex: 'option',
        key: 'option',
    },
];
let allOrdersData = [];
function Cart() {
    const [spinning, setSpinning] = useState(false);
    const [tableData, setTableData] = useState();
    const [totalPrice, setTotalPrice] = useState(0);
    const [messageApi, contextHolder] = message.useMessage();
    const [itemNames, setItemNames] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // Update array of item names whenever tableData changes
        setItemNames(calculateItemNames(tableData));
    }, [tableData]);
    const calculateItemNames = (data) => {
        if (!data) return []; // If data is null or undefined, return an empty array
        return data.reduce((names, item) => {
            if (!names.includes(item.item)) {
                names.push(item.item);
            }
            return names;
        }, []);
    };
    const fetchData = async () => {
        setSpinning(true)
        const response = await getCustomerOrders(localStorage.getItem("email"));
        allOrdersData = response.data;
        console.log(allOrdersData)
        setTotalPrice(calculateTotalPrice(response.data));
        await setData(allOrdersData);

        setSpinning(false);
    }
    const setData = (dataArr) => {
        if (dataArr === null) {
            setTableData([]);
        } else if (dataArr.length != null) {
            let tableRows = [];
            dataArr.forEach((data, x) => {
                let dataRow = {
                    key: x,
                    id: data._id,
                    item: data.item,
                    email: data.email,
                    price: data.price,
                    qty: data.qty,
                    option: (
                        <div className="flex flex-row gap-4 text-2xl">
                            <a
                                onClick={() => {
                                    deleteData(data);
                                }}>
                                <AiFillDelete style={{fontSize: '18px'}}/>
                            </a>
                        </div>
                    ),
                };
                tableRows.push(dataRow);
            });
            setTableData(tableRows);
        } else {
            setTableData([]);
        }
    };
    const calculateTotalPrice = (data) => {
        return data.reduce((total, item) => total + (item.price * item.qty), 0);

    };
    const deleteData = async (data) => {
        setSpinning(true);
        try {
            const response = await deleteOrder(data._id);
            setSpinning(false);
            messageApi.open({
                type: 'success',
                content: `${response.data.message}`,
            });
        } catch (err) {
            setSpinning(false);
            messageApi.open({
                type: 'error',
                content: `${err.response.data.message}`,
            });
        }
        await fetchData();
    };

    const updateCart = async () => {
        try {
            for (const order of allOrdersData) {
                await updateOrderPayStatus(order._id, {payStatus: 1});
            }
            await fetchData();
            setModalOpen(false);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Spin spinning={spinning}>
            {contextHolder}
        <div className="my-20">
            <Row>
                <p className="text-textColor font-serif text-6xl w-full text-center mb-10">Cart</p>
            </Row>
            <Row>
                <p className="text-textColor font-serif text-3xl w-full ml-2 mb-2">Order Details</p>
            </Row>
            <Row className="w-full">
                        <Table
                            className="w-full"
                            dataSource={tableData}
                            columns={columns}
                            //loading={dataLoading}
                            pagination={{
                                size: "small",
                                defaultPageSize: 5,
                                showSizeChanger: true,
                                pageSizeOptions: ["5", "10", "20"],
                                showQuickJumper: true,
                            }}
                        />

            </Row>
            <Row className="flex items-center mt-6">
                <p className=" text-3xl font-bold text-textColor font-serif mr-6">Total: <span className="text-primaryColor">{totalPrice}</span> </p>
                <Button type="default" onClick={() => setModalOpen(true)}>Place Order</Button>
            </Row>
        </div>
            <div>
                <Modal
                    title="Payment"
                    centered
                    open={modalOpen}
                    onOk={() => setModalOpen(false)}
                    width={500}
                    closeIcon={false}
                    cancelButtonProps={{style: {display: 'none'}}}
                >
                        <Row className="flex flex-col justify-start items-start text-xl font-serif">
                            <p className="my-4 text-3xl">Total: <span className="text-primaryColor">{totalPrice}</span></p>
                            <div className="flex items-center">
                                <p className="mr-6">Credit or Debit Cart</p>
                                <div className=" flex items-center justify-evenly h-[40px]">
                                    <img src={VisaLogo} alt="VisaCard" className="w-12"/>
                                    <img src={MasterCardLogo} alt="MasterCard" className="w-12"/>
                                    <img src={AmexLogo} alt="AmexCard" className="w-12"/>
                                    <img src={PaypalLogo} alt="PaypalCard" className="w-12"/>
                                </div>
                            </div>

                            <div className="my-3 w-4/5">
                                <Input
                                    maxLength={16}
                                    placeholder="Card Number"/>
                            </div>
                            <div className="my-3">
                                <Input
                                    maxLength={3}
                                    placeholder="CSV"

                                />
                            </div>
                            <Button className="w-[100px] mt-3" type="default" onClick={updateCart}>
                                Pay
                            </Button>
                        </Row>

                </Modal>
            </div>
        </Spin>
    )
}

export default Cart;