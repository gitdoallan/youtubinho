import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import searchYouTubeAPI from '../services/api';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';

export default function Search() {
  const { query } = useParams();
  useEffect(() => {
    searchYouTubeAPI(query).then((results) => console.log(results.result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <h1>Search</h1>
      <SearchResults />
    </>
  );
}
