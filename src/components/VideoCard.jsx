import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export default function VideoCard(props) {
  console.log(props);
  const {
    id, title, publishedTime, richThumbnail, thumbnails, duration, viewCount,
  } = props;
  const [thumbnailRich, setThumbnailRich] = useState(false);
  return (
    <li>
      <Link to={`/video/${id}`} state={{ ...props }}>
        <img
          src={thumbnailRich ? richThumbnail.url : thumbnails[0].url}
          alt={title}
          onMouseOver={() => richThumbnail?.url && setThumbnailRich(true)}
          onFocus={() => richThumbnail?.url && setThumbnailRich(true)}
          onMouseOut={() => setThumbnailRich(false)}
          onBlur={() => setThumbnailRich(false)}
          width="360"
          height="202"
        />
        <h4>{title}</h4>
        <em>{publishedTime}</em>
        {' - '}
        <span>{duration}</span>
        {' - '}
        <span>{viewCount.short}</span>
      </Link>
    </li>
  );
}

VideoCard.propTypes = {
  id: propTypes.string,
  title: propTypes.string,
  publishedTime: propTypes.string,
  richThumbnail: propTypes.string,
  thumbnails: propTypes.string,
  duration: propTypes.string,
  viewCount: propTypes.string,
}.isRequired;
