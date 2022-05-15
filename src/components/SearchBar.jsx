import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    setDisable(search.length === 0);
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          name="search"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </label>
      <button
        type="submit"
        disabled={disable}
      >
        Search
      </button>
    </form>
  );
}
