import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import propTypes from 'prop-types';
import { trendingAPI } from '../services/api';

export default function VideoCardTrendingAPI({ type }) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    trendingAPI(type).then(({ contents }) => {
      setVideos(contents);
    }).catch((err) => console.log(err));
  }, []);
  return (
    <ul>
      {videos.map(({ video }) => (
        <li key={uuidv4()}>
          <Link to={`/video/${video.videoId}`}>
            <img src={video.thumbnails[0].url} alt={video.title} />
            <h4>{video.title}</h4>
            <em>{video.publishedTimeText}</em>
            {' - '}
            <span>{video.lengthText}</span>
            {' - '}
            <span>{video.viewCountText}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

VideoCardTrendingAPI.propTypes = {
  type: propTypes.string,
}.isRequired;
