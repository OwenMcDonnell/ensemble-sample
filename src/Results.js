import Film from "./Film";

const Results = (props) => {
  return (
    <div className="search-results">
      {props.errorMessage.length > 0 ? (
        <h1>No matching films found! {props.errorMessage}</h1>
      ) : (
        props.films.map((f) => {
          return <Film title={f.Title} director={f.Year} />;
        })
      )}
    </div>
  );
};

export default Results;
