import React from "react";
import Style from "./style.css";

const Nav = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        <span>{props.msg}</span>
        <span>
          Score: {props.score} | Top Score: {props.topScore}
        </span>
      </nav>
    </div>
  );
};

export default Nav;
