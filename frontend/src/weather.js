import React, { Component } from 'react';
import axios from "axios";

export default class Weather extends Component {
    constructor() {
        super();
        this.state = {
            weather: "",
            location: "Delhi"
        };
    }

    HandleButtonClick = () => {
        axios.get("/weather").then(response => {
            this.setState({
                weather: response.data.temperature + " ℃"
            });
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.HandleButtonClick}>Press Button to Load Details</button>
                <h1>The Weather in {this.state.location} is: {this.state.weather}</h1>
            </div>
        )
    }
}

