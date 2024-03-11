import React from "react";

const SearchTask = ({ search, setSearch }) => {
  return (
    <form
      action=""
      className="search-form"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        role="searchbox"
        placeholder="Search Tasks"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchTask;
