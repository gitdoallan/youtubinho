import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { favorites } from '../redux/reducers/favorites';

export default function FavoriteButton({ videoDetails }) {
  const dispatch = useDispatch();
  const handleFavoriteButton = () => {
    dispatch(favorites(videoDetails));
  };

  return (
    <button type="button" onClick={handleFavoriteButton}>Favoritar</button>
  );
}

FavoriteButton.propTypes = {
  videoDetails: PropTypes.object,
}.isRequired;
