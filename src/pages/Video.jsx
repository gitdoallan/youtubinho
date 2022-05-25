import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchYouTubeAPI } from '../services/api';
import { setCurrentVideo } from '../redux/reducers/currentVideo';
import Loading from '../components/Loading';
import Header from '../components/Header';
// import Player from '../components/Player';
import WatchLater from '../components/WatchLater';
import ShareVideo from '../components/ShareVideo';
import FavoriteButton from '../components/FavoriteButton';

export default function Video() {
  // const { currentVideo } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { state } = useLocation();
  const [videoDetails, setVideoDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(setCurrentVideo(id));
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
            {/* <Player
              videoURL={`https://youtube.com/watch?v=${currentVideo}`}
              width="800px"
              height="400px"
            /> */}
            <WatchLater video={videoDetails} />
            <ShareVideo />
            <FavoriteButton videoDetails={videoDetails} />
          </>
        )}
    </div>
  );
}
