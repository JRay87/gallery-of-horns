import React from "react";
import HornedBeast from "./HornedBeast";
import data from './data.json';
import App from './App';
import './Main.css';

class Main extends React.Component {
    render () {
        let hornedBeast = []
        data.forEach((beast, idx) => {
            hornedBeast.push(
                <HornedBeast
                    title={beast.title}
                    image_url={beast.image_url}
                    description={beast.description}
                    horns={beast.horns}
                    key={idx}
                />    
            )
        })

        return (
            <main>
                {hornedBeast}
            </main>
            )
    }
}

export default Main; 