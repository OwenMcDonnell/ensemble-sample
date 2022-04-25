import React from "react";
import { createRoot } from "react-dom/client";
import Film from "./Film";
import SearchField from "./SearchField";
import Results from "./Results";
import BGImage from "./assets/kisspng-filmstrip-template.png";

const App = () => {
  return (
    <div>
      <h1 className="w-full mb-12 mt-12 font-bold text-center text-rose-800 text-2xl">
        Search OMDB!
      </h1>
      <SearchField />
    </div>
  );
};

let root = createRoot(document.getElementById("root"));
root.render(<App />);
