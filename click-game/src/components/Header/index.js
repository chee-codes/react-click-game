import React from "react";
import Style from "./style.css";

const Header = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Click Game</h1>
        <h2 className="lead">
          Click on an image to earn points, but dont click on it more than once!
        </h2>
      </div>
    </div>
  );
};

export default Header;
