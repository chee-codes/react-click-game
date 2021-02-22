import React from "react";
import Style from "./style.css";

const Header = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Click Game</h1>
        <p className="lead">
          Click on an image to earn points, but dont click on it more than once!
        </p>
      </div>
    </div>
  );
};

export default Header;
