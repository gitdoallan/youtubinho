import React from 'react';
import Header from '../components/Header';
import SearchHistoryList from '../components/SearchHistoryList';

export default function SearchHistory() {
  return (
    <>
      <Header />
      <h1>Search History</h1>
      <SearchHistoryList />
    </>
  );
}
