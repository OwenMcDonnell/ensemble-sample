import React from "react";
import { createRoot } from "react-dom/client";
import Film from "./Film";
import SearchField from "./SearchField";
import Results from "./Results";

const App = () => {
  return (
    <div className="search-container">
      <h1>Search OMDB!</h1>
      <SearchField />
    </div>
  );
};

let root = createRoot(document.getElementById("root"));
root.render(<App />);
