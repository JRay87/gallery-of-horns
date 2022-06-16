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
      showModal: false
    };
  };



  handleOnShowModal = (title, image_url) => {
    this.setState({
      showModal: false,
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
          />
          <HornedBeast
            handleOnShowModal={this.handleOnShowModal}
          />
          <SelectBeast
            data={data}
            handleOnShowModal={this.handleOnShowModal}
          />
        <Footer />
      </>
    );
  }
}

export default App;