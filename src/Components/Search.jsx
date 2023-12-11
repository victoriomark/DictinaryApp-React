import React from "react";
function Search({ Text, fetchData }) {
  const handleSearch = () => {
    fetchData();
  };
  return (
    <div className="container d-flex mt-4">
      <input
        onChange={(event) => Text(event.target.value)}
        className="form-control"
        type="text"
        placeholder="Seach"
      />
      <button onClick={handleSearch} className="btn">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}

export default Search;
