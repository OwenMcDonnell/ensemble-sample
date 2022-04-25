import React from "react";

const Film = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>release year: {props.year}</h3>
      <img src={props.poster}></img>
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold border-gray-400 p-2 m-2 shadow rounded">
        More Info
      </button>
    </div>
  );
};

export default Film;
