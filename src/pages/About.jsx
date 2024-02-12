import {Col, Row} from "antd";
import AboutUs from '../assets/images/about-us.jpg'

function About() {
    return (
        <div className="font-serif text-textColor">
            <Row>
                <p className="font-serif text-6xl w-full text-center py-12">About Us</p>
            </Row>
            <Row className="mb-6">
                <Col span={12} className="pr-20 text-base">
                    <p className="text-2xl">Our Vision</p> <br/>
                    <p>To be the leading provider of exceptional culinary experiences,
                        inspiring joy and satisfaction through our diverse range of high-quality food products.
                        We envision a world where our passion for premium ingredients and
                        innovative menus enhances every dining occasion.</p>
                    <br/>
                    <p className="text-2xl">Our Mission</p> <br/>
                    <p>We are dedicated to delivering excellence in every meal.
                        Our mission is to consistently supply fresh, flavorful,
                        and responsibly sourced ingredients, creating memorable culinary
                        moments for our customers. We strive to exceed expectations, fostering a
                        love for great food and fostering lasting connections with our community.</p>
                </Col>
                <Col span={12} className="flex items-center justify-center">
                    <img src={AboutUs} alt="staff" className="w-4/5 rounded-full border border-primaryColor"/>
                </Col>
            </Row>
            <Row>
                <p className="font-serif text-4xl w-full text-center py-12">Who We Are</p>
            </Row>
            <Row>
                <p className="text-base text-center px-6 pb-20">
                    At <span className="text-primaryColor text-xl font-bold">Food Zone</span>,
                    we pride ourselves on being more than just a food supplier;
                    we are culinary partners dedicated to enhancing your gastronomic journey.
                    With a rich tapestry of premium ingredients, sourced meticulously for quality and freshness,
                    we bring a diverse array of flavors to your table. Our commitment to excellence extends beyond
                    the products we offer – it's ingrained in our service. Whether you're a restaurant seeking top-tier
                    ingredients or an individual in search of culinary inspiration, we cater to your unique needs. <br/>
                    <br/>
                    Our curated selection spans from farm-fresh produce to exquisite artisanal creations,
                    ensuring that every bite is a celebration of taste and quality. We prioritize transparency
                    in sourcing, delivering products that meet the highest standards. Our experienced team understands
                    the dynamic nature of the food industry, staying abreast of trends and innovations to provide you
                    with the latest and finest offerings. <br/>
                    <br/>
                    At the heart of our philosophy is a passion for good food and a belief in its power to create
                    connections and memories. We invite you to explore the world of flavors we offer, trusting that
                    each product represents our unwavering dedication to delivering excellence and making your culinary
                    endeavors truly extraordinary.
                </p>
            </Row>
        </div>
    )
}

export default About;