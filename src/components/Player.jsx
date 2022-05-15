import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import propTypes from 'prop-types';

const state = {
  pip: false,
  playing: false,
  controls: false,
  light: false,
  volume: 0.8,
  muted: false,
  played: 0,
  loaded: 0,
  duration: 0,
  playbackRate: 1.0,
  loop: false,
};

export default function Player({ videoURL }) {
  const [playerState, setplayerState] = useState(state);
  const {
    pip, playing, controls, light, volume, muted, playbackRate, loop,
  } = playerState;

  useEffect(() => {
    console.log(playing);
  }, [playing]);

  return (
    <div>
      <ReactPlayer
        className="react-player"
        width="800px"
        height="400px"
        url={videoURL}
        pip={pip}
        playing={playing}
        controls={controls}
        light={light}
        loop={loop}
        playbackRate={playbackRate}
        volume={volume}
        muted={muted}
        onReady={() => console.log('ON READY')}
        onStart={() => console.log('onStart')}
        onPause={() => console.log('onPause')}
      />
      <button type="button" onClick={() => setplayerState({ ...playerState, muted: !muted })}>Mute</button>
      <button type="button" id="playBtn" onClick={() => setplayerState({ ...playerState, playing: !playing })}>Play</button>
    </div>
  );
}

Player.propTypes = {
  videoId: propTypes.string,
}.isRequired;
