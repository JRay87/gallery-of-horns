import React from "react";
import './HornedBeast.css';
import Card from 'react-bootstrap/Card'


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: 0,
            showModal: false
        };
    };

    
    // handleTitleClick = () => {
    //     this.props.handleOnShowModal(this.props.selectedBeast, this.props.selectedBeastImg)
    //     this.setState({
    //        showModal: true
    //     });
    // };
    
    handleVotes = () => {
        this.setState({
            votes: this.state.votes + 1
        });
    };

    render() {
        return (
            <article>
                <Card bg="dark" text="light" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title onClick={this.props.handleOnShowModal}>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                        <Card.Text>💖{this.state.votes} times liked.</Card.Text>
                        <Card.Img 
                            // onClick={this.handleVotes(this.props.title)} 
                            variant="bottom" 
                            src={this.props.image_url} 
                        />
                    </Card.Body>
                </Card>
            </article>
        );
    };



}

export default HornedBeast;
