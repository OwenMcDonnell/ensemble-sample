import { useState, useEffect } from "react";
import Results from "./Results";

const SearchField = (props) => {
  const [search, setSearch] = useState("Search");
  const [films, setFilms] = useState([]);
  const [searchType, setSearchType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let searchPerformed = false;

  // useEffect(() => {
  //   searchPerformed = true;
  // }, [films]);

  async function searchFilms() {
    let searchParam = searchType === "id" ? "i" : "s";
    console.log("searchParam: ", searchParam);
    const resp = await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&${searchParam}=${search}`
    );
    let respJSON = await resp.json();
    console.log("response: ", respJSON);
    if (respJSON.Error) {
      setErrorMessage(respJSON.Error);
    } else {
      setErrorMessage("");
      setFilms(respJSON.Search);
    }

    console.log("errorMessage: ", errorMessage);
    //setFilms(respJSON.Search);
  }

  const searchChange = (e) => {
    setSearch(e.target.value);
    //console.log("changed!: ", e.target);
  };

  return (
    <div className="search-field w-10/12 mx-auto">
      <form
        className="search-field p-12 mb-12 rounded-md bg-slate-500 
          shadow-md flex justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
          searchFilms();
        }}
      >
        <input
          id="title"
          onChange={searchChange}
          value={search}
          placeholder=""
        />
        <label htmlFor="search-type" className="p-5">
          Search By: &nbsp;
          <select
            className="space-x-4"
            id="search-type"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            onBlur={(e) => setSearchType(e.target.value)}
          >
            <option key={"title"} value={"title"}>
              Title
            </option>
            <option key={"id"} value={"id"}>
              Id
            </option>
          </select>
        </label>

        <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold border-gray-400 p-2 shadow rounded">
          Search
        </button>
      </form>

      <Results errorMessage={errorMessage} films={films} />
    </div>
  );
};

export default SearchField;
