import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/NavBar";
import Title from "./Components/Title";
import Para from "./Components/Para";
import Button from "./Components/button";
import Infos from "./Components/infos";

class App extends Component {
  render() {
    return (
      <div className="Global">
        <div className="App">
          <Navbar />
          <Title />
          <Para />
          <Button />
        </div>
        <Infos />
      </div>
    );
  }
}

export default App;
