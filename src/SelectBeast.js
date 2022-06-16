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
            <div>
                <Modal
                    show={this.state.ShowModal}
                    onHide={this.props.handleOnHide}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className='img-fluid' src={this.props.img_url} alt={this.props.description} />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}


export default SelectBeast;
