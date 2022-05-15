import React from 'react';
import SearchBar from './SearchBar';
import LinksMenu from './LinksMenu';

export default function Header() {
  return (
    <>
      <LinksMenu />
      <SearchBar />
    </>
  );
}
