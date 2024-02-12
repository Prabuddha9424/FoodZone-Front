import {Row, Col, Carousel} from "antd";
import UserLogo from '../assets/images/owner.jpg'
import RicePlate from '../assets/images/home-rice-plate.png'
import Chef from '../assets/images/home-chef.jpg'
import ChefTop from '../assets/images/home-chef-1.jpg'
import ChefBottom from '../assets/images/home-chef-2.jpg'
import {ClockCircleFilled, CrownFilled} from "@ant-design/icons";
import {getAllSetItems} from "../helpers/ApiHelpers.js";
import {useEffect, useState} from "react";

let allBeverages = [];

function Home() {
    useEffect(() => {
        fetchData();
    }, []);
    const [cartData, setCartData] = useState([]);
    const fetchData = async () => {
        const response = await getAllSetItems();
        allBeverages = response.data;
        await setData(allBeverages);
    }
    const setData = async (dataArr) => {
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
    };
    return (
        <div className="text-textColor">
            {/*-----------------1st row--------------------*/}
            <Row>
                <Col span={12} className="h-auto">
                    <Row className="h-auto w-full">
                        <p className="font-serif text-6xl">
                            Savor daily delights with curated menus,
                            irresistible desserts, and refreshing beverages
                        </p>
                    </Row>
                    <Row className="h-auto py-6">
                        <p className="text-base font-light">
                            Explore our diverse menu, where curated sets,
                            tempting desserts, and refreshing beverages blend seamlessly,
                            offering a daily indulgence that satisfies every craving with
                            culinary excellence
                        </p>
                    </Row>
                    <Row className="h-auto flex justify-items-start items-center">
                        <img src={UserLogo} alt="User Logo" className="w-16 rounded-full m-6"/>
                        <p className="text-base font-light">
                            <span className="font-bold text-primaryColor">Hames Rodrigo</span> <br/>
                            Founder & Ceo
                        </p>
                    </Row>
                </Col>
                <Col span={12} className="h-auto p-6">
                    <img src={RicePlate} alt="Sea Food Rice" className="hover:animate-shake"/>
                </Col>
            </Row>
            {/*-----------------2nd row--------------------*/}
            <Row className="my-20 ">
                <Col span={6} className="max-h-[420px] min-w-[200px]">
                    <img src={Chef} alt="Chef" className="rounded-full h-[400px] w-[250px] hover:animate-pulse"/>
                </Col>
                <Col span={6} className="flex flex-col items-center justify-between max-h-[420px]">
                    <img src={ChefTop} alt="cooking" className="w-[180px] h-[180px] rounded-full hover:animate-pulse"/>
                    <img src={ChefBottom} alt="cooking"
                         className="w-[180px] h-[180px] rounded-full hover:animate-pulse"/>
                </Col>
                <Col span={12} className="flex flex-col max-h-[420px]">
                    <Row className="mb-6">
                        <h1 className="font-serif text-4xl">
                            Passionate service and quality focus,
                            your culinary satisfaction is paramount
                        </h1>
                    </Row>
                    <Row className="mb-6">
                        <p className="text-base font-light">
                            Embark on a scientific journey with our dedicated
                            researchers from Nottingham University’s School of Medicine.
                            Our focus revolves around antigens, delving deep into their
                            profound impact on auto-antibodies. Uncover the intricate
                            mechanisms as we explore how these antibodies combat and block
                            invading antigens, shaping the future of medical understanding</p>
                    </Row>
                    <Row>
                        <Col span={12} className="h-auto flex items-center justify-between">
                            <CrownFilled
                                style={{fontSize: '50px', color: 'var(--primary-color)'}}
                                className="border border-primaryColor rounded-full p-4 mr-2"
                            />
                            <p className="text-base">
                                <span className="font-bold">Premium Quality</span> <br/>
                                We provide premium & quality food items
                            </p>
                        </Col>
                        <Col span={12} className="h-auto flex items-center justify-between">
                            <ClockCircleFilled
                                style={{fontSize: '50px', color: 'var(--primary-color)'}}
                                className="border border-primaryColor rounded-full p-4 mr-2"
                            />
                            <p className="text-base">
                                <span className="font-bold">24/7 Hours Open</span> <br/>
                                Open 24/7 for Your Convenience
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/*-----------------3rd row--------------------*/}

            <div className=" items-center px-10 py-10 mt-20 w-full">

                <p className="font-serif text-4xl w-full text-center py-12">
                    Explore Our Most Popular Set Menu
                </p>
                <Carousel autoplay={true} infinite={true} slidesToShow={3} slidesToScroll={1}>
                    {cartData && cartData.map((item) => (
                        <div key={item.key}>
                            <div className="flex flex-col items-center justify-center mb-6">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-[186px] h-[186px] rounded-full border border-primaryColor hover:shadow-md hover:shadow-primaryColor"
                                />
                                <p className="text-base font-bold text-center p-3">
                                    {item.name}
                                </p>
                            </div>
                        </div>
                ))}
                {/*<div>
                    <div className="flex flex-col items-center justify-center mb-6">
                        <img
                            src={SetMenu1}
                            alt="Indian Naan Family Meal "
                            className="w-[186px] h-[186px] rounded-full border border-primaryColor hover:shadow-md hover:shadow-primaryColor"
                            />
                            <p className="text-base font-bold text-center p-3">
                                Indian Naan Family Meal
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-center justify-center mb-6">
                            <img
                                src={SetMenu1}
                                alt="Indian Naan Family Meal "
                                className="w-[186px] h-[186px] rounded-full border border-primaryColor"
                            />

                            <p className="text-base font-bold text-center">
                                Indian Naan Family Meal
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-center justify-center mb-6">
                            <img
                                src={SetMenu1}
                                alt="Indian Naan Family Meal "
                                className="w-[186px] h-[186px] rounded-full border border-primaryColor"
                            />

                            <p className="text-base font-bold text-center">
                                Indian Naan Family Meal
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-center justify-center mb-6">
                            <img
                                src={SetMenu1}
                                alt="Indian Naan Family Meal "
                                className="w-[186px] h-[186px] rounded-full border border-primaryColor"
                            />

                            <p className="text-base font-bold text-center">
                                Indian Naan Family Meal
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-center justify-center mb-6">
                            <img
                                src={SetMenu1}
                                alt="Indian Naan Family Meal "
                                className="w-[186px] h-[186px] rounded-full border border-primaryColor"
                            />

                            <p className="text-base font-bold text-center">
                                Indian Naan Family Meal
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-center justify-center mb-6">
                            <img
                                src={SetMenu1}
                                alt="Indian Naan Family Meal "
                                className="w-[186px] h-[186px] rounded-full border border-primaryColor"
                            />

                            <p className="text-base font-bold text-center">
                                Indian Naan Family Meal
                            </p>
                        </div>
                    </div>*/}
                </Carousel>
            </div>
        </div>
    )
}

export default Home;