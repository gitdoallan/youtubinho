import React from 'react';
import { Link } from 'react-router-dom';

export default function LinksMenu() {
  return (
    <>
      <Link to="/">Home</Link>
      {' - '}
      <Link to="/search-history">Search History</Link>
    </>
  );
}
