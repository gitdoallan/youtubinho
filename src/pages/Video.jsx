import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { searchYouTubeAPI } from '../services/api';
import Loading from '../components/Loading';
import Header from '../components/Header';

export default function Video() {
  const { id } = useParams();
  const { state } = useLocation();
  const [videoDetails, setVideoDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cases = {
      true: () => searchYouTubeAPI(id)
        .then(({ result }) => setVideoDetails(result.find((video) => video.id === id)))
        .catch((err) => console.log(err)),
      false: () => setVideoDetails(state),
    };
    cases[state === null]();
  }, []);

  useEffect(() => {
    setLoading(videoDetails.id === undefined);
  }, [videoDetails]);

  return (
    <div>
      <Header />
      {loading
        ? <Loading />
        : (
          <h1>{videoDetails.title}</h1>
        )}
    </div>
  );
}
