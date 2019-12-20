import React from "react";

function PokeList(props) {
  return <ul className="Lista">{props.children}</ul>;
}
export default PokeList;
