import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { searchYouTubeAPI } from '../services/api';
import Loading from '../components/Loading';
import Header from '../components/Header';
import Player from '../components/Player';
import WatchLater from '../components/WatchLater';
import ShareVideo from '../components/ShareVideo';
import FavoriteButton from '../components/FavoriteButton';

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
          <>
            <h1>{videoDetails.title}</h1>
            <Player videoURL={`https://youtube.com/watch?v=${videoDetails.id}`} />
            <WatchLater video={videoDetails} />
            <ShareVideo />
            <FavoriteButton videoDetails={videoDetails} />
          </>
        )}
    </div>
  );
}
