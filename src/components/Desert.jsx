import ItemCard from "./ItemCard.jsx";
import {getAllDeserts} from "../helpers/ApiHelpers.js";
import {useEffect, useState} from "react";
import {Spin} from "antd";

let allBeverages = [];

function Desert() {
    useEffect(() => {
        fetchData();
    }, []);
    const [cartData, setCartData] = useState([]);
    const [spinning, setSpinning] = useState(false);
    const fetchData = async () => {
        const response = await getAllDeserts();
        allBeverages = response.data;
        await setData(allBeverages);
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
    return (
        <Spin spinning={spinning}>
            <div className="border-b border-primaryColor mb-2">
                <p className="text-xl text-textColor font-serif">Desserts</p>
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
    );
}

export default Desert;