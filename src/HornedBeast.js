import React from "react";
import data from "./data.json";
import './HornedBeast.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: 0
        };
    };

handleVotes = () => {
    this.setState({
        votes: this.state.votes + 1
    })
}



render () {
    return (
    <article>
        <Card bg="dark" text="light" style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>{this.props.description}</Card.Text>
    <Card.Text>💖{this.state.votes} times liked.</Card.Text>
    <Button variant="primary" onClick={this.handleVotes}> Pick Me!</Button>
  <Card.Img variant="bottom" src={this.props.image_url} onClick={this.handleVotes}/>
  </Card.Body>
</Card>
</article>
    );
};



}

export default HornedBeast;