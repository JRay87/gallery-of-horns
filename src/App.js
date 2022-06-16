import React from "react";
import Header from './Header';
import Main from "./Main";
import Footer from "./Footer";
import Modal from 'react-bootstrap/Modal'
import data from './data.json';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: '',
      selectedBeastImg:''
    };
  };

  handleOnHide = () => {
    this.setState({
      showModal: false
    });
  };

  handleOnShowModal = (title, image_url) => {
    this.setState({
      showModal: true,
      selectedBeast: title,
      selectedBeastImg: image_url
    });
  };


  render() {
    return (
      <>
        <Header />
        <Main
          data={data}
          handleOnShowModal={this.handleOnShowModal}
        />
        <Footer />
        <Modal 
        show={this.state.showModal} 
        onHide={this.handleOnHide}
        style={{ width: '100%' }}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedBeast}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className='img-fluid' src={this.state.selectedBeastImg} alt={this.state.selectedBeast} /></Modal.Body>  
        </Modal>
      </>
    );
  }
}

export default App;