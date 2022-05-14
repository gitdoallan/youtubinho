import React, { useState } from 'react';

function Search() {
  const [search, setSearch] = useState('');
  const [disable, setDisable] = useState(true);

  const handleChange = ({ target }) => {
    setSearch(target.value);
    const searchValidated = search.length !== 0;
    setDisable(searchValidated);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // axois API
  };

  return (
    <>
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
        />
      </label>
      <button
        type="submit"
        disabled={disable}
        onClick={handleClick}
      >
        Search
      </button>
    </>
  );
}

export default Search;
