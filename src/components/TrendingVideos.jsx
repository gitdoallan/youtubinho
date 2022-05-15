import React from 'react';
import VideoCardTrendingAPI from './VideoCardTrendingAPI';

export default function TrendingVideos() {
  return (
    <div>
      <h2>Trending Music: </h2>
      <VideoCardTrendingAPI type="mu" />
      <h2>Trending Movies: </h2>
      <VideoCardTrendingAPI type="mo" />
      <h2>Trending Now:</h2>
      <VideoCardTrendingAPI type="n" />
      <h2>Trending Global:</h2>
      <VideoCardTrendingAPI type="g" />
    </div>
  );
}
