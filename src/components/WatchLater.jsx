import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addwatchLater } from '../redux/reducers/watchLater';

function WatchLater({ video }) {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => dispatch(addwatchLater(video))}
    >
      Watch Later
    </button>
  );
}

WatchLater.propTypes = {
  video: PropTypes.shape(),
  addwatchLater: PropTypes.func,
}.isRequires;

export default WatchLater;
