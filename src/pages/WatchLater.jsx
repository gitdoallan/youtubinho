import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Header from '../components/Header';
import VideoCard from '../components/VideoCard';

export default function WatchLater() {
  const videos = useSelector(({ watchLater }) => watchLater);
  console.log(videos);

  return (
    <>
      <Header />
      <h1>WatchLater</h1>
      {
        videos.map(({
          id, title, publishedTime, richThumbnail, thumbnails, duration, viewCount,
        }) => (
          <VideoCard
            key={uuidv4()}
            id={id}
            title={title}
            publishedTime={publishedTime}
            richThumbnail={richThumbnail}
            thumbnails={thumbnails}
            duration={duration}
            viewCount={viewCount}
          />
        ))
      }
    </>
  );
}
