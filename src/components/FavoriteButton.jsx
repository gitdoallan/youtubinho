import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addFavorites, removeFavorites } from '../redux/reducers/favorites';

export default function FavoriteButton({ videoDetails }) {
  const [hasFavorite, setHasFavorite] = useState(false);
  const allFavorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    const result = allFavorites.some(({ id }) => id === videoDetails.id);
    setHasFavorite(result);
  }, [allFavorites]);

  const handleFavoriteButton = (bool) => {
    const cases = {
      true: () => dispatch(removeFavorites(videoDetails)),
      false: () => dispatch(addFavorites(videoDetails)),
    };
    cases[bool]();
  };

  return (
    <button type="button" onClick={() => handleFavoriteButton(hasFavorite)}>
      {hasFavorite ? 'Remove Favorito' : 'Adiciona Favorito'}
    </button>
  );
}

FavoriteButton.propTypes = {
  videoDetails: PropTypes.object,
}.isRequired;
