import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import propTypes from 'prop-types';

const state = {
  pip: false,
  playing: true,
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

export default function Player({ videoURL, width, height }) {
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
        width={width}
        height={height}
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
        onStart={() => console.log('ON START')}
        onPause={() => setplayerState({ ...playerState, playing: false })}
        onPlay={() => setplayerState({ ...playerState, playing: true })}
      />
      <button type="button" onClick={() => setplayerState({ ...playerState, muted: !muted })}>Mute</button>
      <button type="button" id="playBtn" onClick={() => setplayerState({ ...playerState, playing: !playing })}>{playing ? 'Stop' : 'Play'}</button>
    </div>
  );
}

Player.propTypes = {
  videoId: propTypes.string,
}.isRequired;
