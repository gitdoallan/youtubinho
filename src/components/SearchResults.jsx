/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import VideoCard from './VideoCard';

export default function SearchResults() {
  const { videoResults } = useSelector((state) => state);
  const size = videoResults.length - 1;
  return (
    <ul>
      {videoResults[size].map((item) => (
        <VideoCard key={item.id} {...item} />
      ))}
    </ul>
  );
}
