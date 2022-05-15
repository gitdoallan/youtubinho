import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

export default function SearchHistoryList() {
  const { searchHistory } = useSelector((state) => state);
  return (
    <ul>
      {searchHistory.slice(0).reverse().map((item) => (
        <li key={uuid()}>
          <Link to={`/search/${item}`}>{item}</Link>
        </li>
      ))}
    </ul>
  );
}
