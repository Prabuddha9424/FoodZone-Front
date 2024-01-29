import {Button, Card, Col, Modal, Row} from "antd";
import {useState} from "react";
import PropTypes from "prop-types";
const {Meta} = Card;

function ItemCard(props){
    const [modalOpen, setModalOpen] = useState(false);
    return(
        <>
            <Card
                hoverable
                style={{
                    width: 250,
                }}
                cover={<img alt="Indian Naan Family Meal " src={props.image}/>}
                className="flex flex-col items-center justify-center text-center"
            >
                <Meta
                    className="flex flex-col items-center justify-center"
                    title={<span
                        style={{color: "var( --primary-color)", fontSize: '16px'}}>{props.itemName}</span>}
                    description={<span
                        style={{color: "var(--text-color)", fontSize: '20px'}}>{props.itemPrice}</span>}
                />
                <Button type="primary" style={{marginTop: '20px'}}>Add to Cart</Button>
                &nbsp;
                <Button type="default" style={{marginTop: '20px'}} onClick={() => setModalOpen(true)}>View</Button>
                <Modal
                    title={props.itemName}
                    centered
                    open={modalOpen}
                    onOk={() => setModalOpen(false)}
                    width={800}
                    closeIcon={false}
                    cancelButtonProps={{ style: { display: 'none' } }}
                >
                    <Row>
                        <Col span={12}>
                            <img src={props.image} alt="Set Menu 1" className="w-[400px] h-[400px]"/>
                        </Col>
                        <Col span={12} className="pl-6">
                            <p className="text-base">
                                {props.itemDesc1}
                                <br/>
                                <br/>
                                {props.itemDesc2}
                                <br/>
                                <br/>
                                {props.itemDesc3}
                            </p>
                        </Col>
                    </Row>
                </Modal>
            </Card>
        </>
    );
}
ItemCard.propTypes = {
    image: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    itemPrice: PropTypes.string.isRequired,
    itemDesc1: PropTypes.string.isRequired,
    itemDesc2: PropTypes.string.isRequired,
    itemDesc3: PropTypes.string.isRequired,
};
export default ItemCard;