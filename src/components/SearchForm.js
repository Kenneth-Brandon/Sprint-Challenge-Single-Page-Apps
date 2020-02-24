import React, { useState } from "react";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="search-form">
      <form>
        <label>Search: </label>
        <input
          name="search"
          placeholder="Search"
          onChange={event => setSearchTerm(event.target.value)}
          value={searchTerm}
        />
      </form>
    </section>
  );
}

export default SearchForm;
