import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { trendingAPI } from '../services/api';

export default function VideoCardTrendingAPI({ type }) {
  useEffect(() => {
    trendingAPI(type).then(({ contents }) => {
      console.log(contents);
    }).catch((err) => console.log(err));
  }, []);
  return (
    <div>VideoCardTrendingAPI</div>
  );
}

VideoCardTrendingAPI.propTypes = {
  type: propTypes.string,
}.isRequired;
