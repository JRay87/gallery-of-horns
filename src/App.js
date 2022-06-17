import React from "react";
import Header from './Header';
import Main from "./Main";
import Footer from "./Footer";
import data from './data.json';
import SelectBeast from "./SelectBeast";
import {Form, Button} from 'react-bootstrap';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: '',
      selectedBeastImage: '',
      name: '',
      howToSort: '',
      beast: data
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
  
  handleSubmit = (event) => {
    event.preventDefault();
    let userName = event.target.name.value;
    let selected = event.target.selected.value;

    this.setState({
      name: userName,
      howToSort: selected
    });

  };

  handleInput = (event) => {
    let userName = event.target.value;
    this.setState({
      name: userName,
    });
  }

  handleSelect= (event) => {
    let selected = event.target.value;
    console.log(selected);
    if (selected === 'one') {
      let newBeasts = data.beast.filter(() => this.beast.horns === 1);
      this.setState({
        sortedBeasts : newBeasts
      })
      console.log(newBeasts);
    } else if (selected === 'two') { 
      let newBeasts = data.beast.filter(() => this.beast.horns === 2);
      this.setState({
        sortedBeasts : newBeasts
      })
    } else if (selected === 'three') { 
      let newBeasts = data.beast.filter(() => this.beast.horns === 3);
      this.setState({
        sortedBeasts : newBeasts
      })
    } else {
      let newBeasts = data.beast.filter(() => this.beast.horns === 100);
      this.setState({
        sortedBeasts : newBeasts
      })
    }
  }
  
  render() {
      return (
      <>
        <Header />
          <Main
            data={data}
            handleOnShowModal={this.handleOnShowModal}
          />
        <Form onSubmit={this.handleSubmit}>
          <Form.Label>
            <Form.Control type="text" name="name" onInput={this.handleInput}/>
          </Form.Label>
          <Form.Group>
            <p>Selected Horns</p>
            <Form.Select name="selected" onChange={this.handleSelect}>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
              <option value="one-hundred">One Hundred</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
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