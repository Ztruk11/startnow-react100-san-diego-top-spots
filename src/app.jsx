import TopSpot from "./topspot";

import React, { Component } from "react";

const axios = require("axios");
import {
  AxiosProvider,
  Request,
  Get,
  Delete,
  Head,
  Post,
  Put,
  Patch,
  withAxios
} from "react-axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    axios
      .get("https://origin-top-spots-api.herokuapp.com/api/topspots")
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="border border-dark">
            <h3>San Diego Top Spots</h3>
            <h6>A list of the top 30 places to see in San Diego, California</h6>
            {this.state.topspots.map(topspot => (
              <TopSpot
                key={topspot.id}
                name={topspot.name}
                description={topspot.description}
                location={topspot.location}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
