import {Button, Card, Col, Modal, Row} from "antd";
import {useState} from "react";
import PropTypes from "prop-types";
import {AiFillDelete} from "react-icons/ai";
import {addOrder} from "../helpers/ApiHelpers.js";
const {Meta} = Card;

function ItemCard(props){
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [tableData, setTableData] = useState();
    const setCountWithValidation = (newValue) => {
        const validValue = Math.max(newValue, 0);
        setCount(validValue);
    };
    const setCartData = async () => {
        try {
            const res = await addOrder(
                {
                    item:props.itemName,
                    email:localStorage.getItem("email"),
                    qty:count,
                    status:0,
                    payStatus:0,
                    price:props.itemPrice,
                }
            );
            console.log(res);
        } catch (err) {
            console.log(err)
        }
        window.location.reload();
    };
    /*const setData = async (dataArr) => {
        if (dataArr === null) {
            setTableData([]);
        } else if (dataArr.length !== null) {
            let tableRows = [];
            dataArr.forEach((data, x) => {
                let dataRow = {
                    key: x,
                    item: data.item,
                    email:data.email,
                    price: data.price,
                    qty: data.qty,
                    userData: data.userData,
                    status: data.status,
                    option: (
                        <div className="flex flex-row gap-4 text-2xl">
                            <a
                                /!*onClick={() => {
                                    deleteData(data);
                                }}*!/
                            >
                                <AiFillDelete style={{fontSize: '18px'}}/>
                            </a>
                        </div>
                    ),
                };
                tableRows.push(dataRow);
            })
            setTableData(tableRows);
        } else {
            setTableData([]);
        }
    };*/
    return(
        <>
            <div className="w-[250px] h-[450px] border border-primaryShadow rounded-xl text-textColor hover:shadow-md hover:shadow-primaryColor">
                <div className="w-full h-[250px] rounded-t-xl mb-1">
                    <img src={props.image} alt={props.itemName} className="w-full h-full rounded-t-xl"/>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-xl text-center font-bold text-primaryColor mb-2">{props.itemName}</p>
                    <p className="text-xl ">Rs: <span className="text-2xl ">{props.itemPrice}</span></p>
                    <div className="flex items-baseline justify-center border border-primaryShadow rounded-xl mt-2">
                        <Button type="default"
                                className="h-full flex items-center justify-center border-none"
                                onClick={()=>{setCountWithValidation(count-1)}}
                        >
                            <p>-</p>
                        </Button>
                        <p className="mx-2 text-base" onChange={(e)=>{
                            console.log(e)}}>{(count<=props.Quantity)?count:props.quantity}</p>
                        <Button type="default"
                                className=" h-full flex items-center justify-center border-none"
                                onClick={()=>{setCountWithValidation(count+1)}}
                        >
                            <p>+</p>
                        </Button>
                    </div>
                    <div className="flex items-baseline mt-3">
                        <Button type="default" className="mr-2 h-full" onClick={setCartData}>Add to Cart</Button>
                        <Button type="default"
                                onClick={() => setModalOpen(true)}>View</Button>
                    </div>
                </div>
            </div>
            <Modal
                title="Item Description"
                centered
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                width={800}
                closeIcon={false}
                cancelButtonProps={{style: {display: 'none'}}}
            >
                <Row>
                    <Col span={12}>
                        <img src={props.image} alt="Set Menu 1" className="w-[400px] h-[400px]"/>
                    </Col>
                    <Col span={12} className="pl-6">
                    <p className="text-2xl font-bold text-primaryColor mb-2">{props.itemName}</p>
                        <p className="text-xl mb-3">Rs: <span className="text-2xl ">{props.itemPrice}</span></p>
                        <p className="text-xl mb-4">{props.Quantity}</p>
                        <p className="text-base ">{props.itemDesc} </p>
                    </Col>
                </Row>
            </Modal>
        </>
    );
}
ItemCard.propTypes = {
    image: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    itemPrice: PropTypes.number.isRequired,
    itemDesc: PropTypes.string.isRequired,
    Quantity: PropTypes.number.isRequired,
};
export default ItemCard;