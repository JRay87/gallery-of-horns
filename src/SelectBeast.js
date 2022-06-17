import React from "react";
import Modal from 'react-bootstrap/Modal'


class SelectBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: true ,
            selectedBeast: '',
            selectedBeastImg: '',
        };
    };



    render() {
        return (
                <Modal
                    show={this.props.showModal}
                    onHide={this.props.handleOnHide}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className='img-fluid' src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.description} />
                    </Modal.Body>
                </Modal>
        );
    }
}


export default SelectBeast;
