import React, { useEffect } from 'react';
import { trendingAPI } from '../services/api';

export default function TrendingVideos() {
  useEffect(() => {
    trendingAPI().then(({ contents }) => {
      console.log(contents);
    }).catch((err) => console.log(err));
  }, []);
  return (
    <div>TrendingVideos</div>
  );
}
