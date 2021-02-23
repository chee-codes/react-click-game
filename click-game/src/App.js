import React, { Component } from "react";
import Nav from "./components/Nav/index";
import Header from "./components/Header/index";
import ImgCard from "./components/ImageCard";
import Footer from "./components/Footer";
import Main from "./components/Main";
import clubs from "./clubs.json";

class App extends Component {
  state = {
    clubs: clubs,
    score: 0,
    topScore: 0,
    msg: "Click an image to begin!",
    pickedClubs: [],
  };

  clubShuffle = () => {
    clubs.sort((a, b) => 0.5 - Math.random());
  };

  pickedCard = (id) => {
    if (this.state.pickedClubs.indexOf(id) !== -1) {
      this.setState({
        score: 0,
        pickedClubs: [],
        msg: "Game Over, Try Again!",
      });
    } else {
      this.state.pickedClubs.push(id);
      this.setState({
        score: this.state.score + 1,
        msg: "You guessed correctly!",
      });

      if (this.state.score >= this.state.topScore) {
        this.setState({ topScore: this.state.score + 1 });
      }
    }
    this.clubShuffle();
  };

  render() {
    return (
      <div className="App">
        <Nav
          msg={this.state.msg}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Header />
        <Main>
          {this.state.clubs.map((club) => (
            <ImgCard
              id={club.id}
              key={club.id}
              image={club.image}
              pickedCard={this.pickedCard}
            />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
