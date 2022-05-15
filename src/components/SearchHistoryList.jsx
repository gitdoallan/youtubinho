import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

export default function SearchHistoryList() {
  const { searchHistory } = useSelector((state) => state);
  return (
    <ul>
      {searchHistory.map((item) => (
        <li key={uuid()}>{item}</li>
      ))}
    </ul>
  );
}
