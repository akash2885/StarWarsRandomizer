import React, {Component} from "react";
import StarWars from "./StarWars";
import grouping from "./Affiliations";
import './style.css'

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <StarWars/>

            </div>
        );
    }
}

export default App