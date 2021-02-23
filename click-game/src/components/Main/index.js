import React from "react";
import Style from "./style.css";

const Main = (props) => {
  return <div className="row">{props.children}</div>;
};

export default Main;
