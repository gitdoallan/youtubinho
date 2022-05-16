import React from 'react';
import { useSelector } from 'react-redux';
import Router from './router';
import Player from './components/Player';

export default function App() {
  const { currentVideo } = useSelector((state) => state);
  return (
    <div>
      <Router />
      <Player
        videoURL={`https://youtube.com/watch?v=${currentVideo}`}
        width="800px"
        height="400px"
      />
    </div>
  );
}
