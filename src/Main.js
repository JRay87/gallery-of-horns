import React from "react";
import HornedBeast from "./HornedBeast";
import './Main.css';


class Main extends React.Component {
    render() {
        let hornedBeast = []
        this.props.data.map((beast, idx) => {
            return hornedBeast.push(
                <HornedBeast
                    title={beast.title}
                    image_url={beast.image_url}
                    description={beast.description}
                    handleOnShowModal={this.props.handleOnShowModal}
                    horns={beast.horns}
                    beast={beast}
                    key={idx}
                />
            )
        });

        return (
            <main>
                {hornedBeast}
            </main>
        )
    }
}

export default Main; 