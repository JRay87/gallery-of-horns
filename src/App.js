import React from "react";
import Header from './Header';
import Main from "./Main";
import Footer from "./Footer";
import data from './data.json';
import SelectBeast from "./SelectBeast";
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

  
  handleOnShowModal = (title) => {
    this.setState({
      showModal: true,
      selectedBeast: title, 
      // selectedBeastImage: image_url
    });
  };
  
  handleOnHide = () => {
    this.setState({
      showModal: false
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

          <SelectBeast
            showModal={this.state.showModal}
            handleOnHide={this.handleOnHide}
            selectedBeast={this.state.selectedBeast}
          />
        <Footer />
      </>
    );
  }
}

export default App;