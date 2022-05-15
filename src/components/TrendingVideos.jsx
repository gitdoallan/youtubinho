import React from 'react';
import VideoCardTrendingAPI from './VideoCardTrendingAPI';

export default function TrendingVideos() {
  return (
    <div>
      <VideoCardTrendingAPI type="n" />
      <VideoCardTrendingAPI type="mu" />
      <VideoCardTrendingAPI type="mo" />
      <VideoCardTrendingAPI type="g" />
    </div>
  );
}
