import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchYouTubeAPI } from '../services/api';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';
import { addSearchHistory, videoResults } from '../redux/reducers';
import SearchHistoryList from '../components/SearchHistoryList';

export default function Search() {
  const dispatch = useDispatch();
  const { query } = useParams();
  useEffect(() => {
    dispatch(addSearchHistory(query));
    searchYouTubeAPI(query).then(({ result }) => {
      dispatch(videoResults(result));
    })
      .catch((err) => console.log(err));
  }, [query]);

  return (
    <>
      <Header />
      <h1>Search</h1>
      <SearchResults />
      <h2>SearchHistoryList</h2>
      <SearchHistoryList />
    </>
  );
}
