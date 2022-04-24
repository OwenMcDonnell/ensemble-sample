import React from "react";

const Film = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.director}</h3>
    </div>
  );
};

export default Film;
