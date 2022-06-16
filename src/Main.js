import React from "react";
import HornedBeast from "./HornedBeast";
import './Main.css';

class Main extends React.Component {
    render () {
        let hornedBeast = []
        this.props.data.forEach((beast, idx) => {
            hornedBeast.push(
                <HornedBeast
                    title={beast.title}
                    image_url={beast.image_url}
                    description={beast.description}
                    horns={beast.horns}
                    key={idx}
			        handleOnShowModal={this.props.handleOnShowModal}
                />    
    )});

        return (
            <main>
                {hornedBeast} 
            </main>
            )
    }
}

export default Main; 