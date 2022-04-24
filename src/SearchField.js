import { useState, useEffect } from "react";
import Results from "./Results";

const SearchField = (props) => {
  const [search, setSearch] = useState("Film Title");
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
    <div className="search-field">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchFilms();
        }}
      >
        <label htmlFor="title">Title </label>
        <input
          id="title"
          onChange={searchChange}
          value={search}
          placeholder=""
        />
        <label htmlFor="search-type">
          Search By:
          <select
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

        <button>Search</button>
      </form>

      <Results errorMessage={errorMessage} films={films} />
    </div>
  );
};

export default SearchField;
