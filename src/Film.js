import React from "react";

const Film = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>release year: {props.year}</h3>
      <img src={props.poster}></img>
    </div>
  );
};

export default Film;
