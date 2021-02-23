import React, { Component } from "react";
import Nav from "./components/Nav/index";
import Header from "./components/Header/index";
import ImgCard from "./components/ImageCard";
import Footer from "./components/FooterOne";
import Main from "./components/Main";

class App extends Component {
  state = {
    teams: teams,
    score: 0,
    topScore: 0,
    msg: "Click an image to begin!",
    pickedTeams: [],
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Main />
        <ImgCard />
        <Footer />
      </div>
    );
  }
}

export default App;
