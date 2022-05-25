import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchYouTubeAPI } from '../services/api';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';
import { addSearchHistory } from '../redux/reducers/searchHistory';
import { videoResults } from '../redux/reducers/videoResults';
import SearchHistoryList from '../components/SearchHistoryList';
import Loading from '../components/Loading';

export default function Search() {
  const checkResults = useSelector((state) => state.videoResults);
  const size = checkResults[checkResults.length - 1];
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { query } = useParams();
  useEffect(() => {
    dispatch(addSearchHistory(query));
    searchYouTubeAPI(query).then(({ result }) => {
      console.log(result);
      dispatch(videoResults(result));
    })
      .catch((err) => console.log(err));
  }, [query]);

  useEffect(() => {
    setLoading(!size?.length);
  }, [checkResults, query]);

  return (
    <>
      <Header />
      <h1>Search</h1>
      {loading ? <Loading /> : <SearchResults />}
      <h2>SearchHistoryList</h2>
      <SearchHistoryList fromElse />
    </>
  );
}
