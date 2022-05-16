import React from 'react';
import { Link } from 'react-router-dom';

export default function LinksMenu() {
  return (
    <>
      <Link to="/">Home</Link>
      {' - '}
      <Link to="/search-history">Search History</Link>
      {' - '}
      <Link to="/watch-later">Watch Later</Link>
      {' - '}
      <Link to="/favorites">Favorites</Link>
      {' - '}
      <Link to="/liked-videos">Liked Videos</Link>
      {' - '}
      <Link to="/watched-videos">Watched Videos</Link>
      {' - '}
      <Link to="/login">Login</Link>
      {' - '}
      <Link to="/about">About</Link>
      {' - '}
      <Link to="/profile">Profile</Link>
    </>
  );
}
