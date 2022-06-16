import React from "react";
import Header from './Header';
import Main from "./Main";
import Footer from "./Footer";
import data from './data.json';
import SelectBeast from "./SelectBeast";
import HornedBeast from "./HornedBeast";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: '',
      selectedBeastImage: ''
    };
  };

  handleOnHide = () => {
    this.setState({
      showModal: false
    });
  };

  handleOnShowModal = (title, img_url) => {
    this.setState({
      showModal: true,
      selectedBeast: title, 
      selectedBeastImage: img_url
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

            <HornedBeast
            handleOnShowModal={this.handleOnShowModal}
            />


          <SelectBeast
            handleOnShowModal={this.handleOnShowModal}
            handleOnHide={this.handleOnHide}
            selectedBeast={this.state.selectedBeast}
          />
        <Footer />
      </>
    );
  }
}

export default App;