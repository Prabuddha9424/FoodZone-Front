import {Button, Modal} from "antd";
import {useState} from "react";

function ViewItem(){
    const [modalOpen, setModalOpen] = useState(false);
    return(
        <>
            <Button type="primary" onClick={() => setModalOpen(true)}>
                Vertically centered modal dialog
            </Button>
            <Modal
                title="Vertically centered modal dialog"
                centered
                open={modalOpen}
                onOk={() => setModalOpen(false)}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </>
    );
}
export default ViewItem;
