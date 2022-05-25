/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import VideoCard from './VideoCard';

export default function SearchResults() {
  const { videoResults } = useSelector((state) => state);
  const size = videoResults.length - 1;
  return (
    <ul>
      {videoResults[size].map((item) => (
        <VideoCard key={uuidv4()} {...item} />
      ))}
    </ul>
  );
}
