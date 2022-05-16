import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { HISTORY_LIMIT_PAGE, HISTORY_LIMIT_ELSE } from '../helpers/magicNumbers';

export default function SearchHistoryList({ fromElse }) {
  const { searchHistory } = useSelector((state) => state);
  const reverse = searchHistory.slice(0).reverse();
  return (
    <ul>
      {reverse.slice(0, fromElse ? HISTORY_LIMIT_ELSE : HISTORY_LIMIT_PAGE).map((item) => (
        <li key={uuid()}>
          <Link to={`/search/${item}`}>{item}</Link>
        </li>
      ))}
    </ul>
  );
}

SearchHistoryList.propTypes = {
  fromElse: propTypes.bool,
};

SearchHistoryList.defaultProps = {
  fromElse: false,
};
