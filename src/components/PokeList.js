import React from "react";
import PokeListStyle from "../style/PokeList.css";

function PokeList(props) {
  return <ul className="List">{props.children}</ul>;
}
export default PokeList;
