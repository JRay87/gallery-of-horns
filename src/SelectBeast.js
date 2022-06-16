import React from "react";
import Modal from 'react-bootstrap/Modal'


class SelectBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            selectedBeast: '',
            selectedBeastImg: '',
        };
    };

    handleOnHide = () => {
        this.setState({
          showModal: false
        });
      };

    render() {
        return (
            <>
                <Modal
                    show={this.props.handleOnShowModal}
                    onHide={this.handleOnHide}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.selectedBeast}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className='img-fluid' src={this.props.selectedBeastImg} alt={this.selectedBeast} />
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}


export default SelectBeast;
