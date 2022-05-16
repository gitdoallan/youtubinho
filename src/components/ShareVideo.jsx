import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import copy from 'clipboard-copy';

function ShareVideo() {
  const { id } = useParams();
  const [isCopy, setIsCopy] = useState(false);
  const handleClick = () => {
    copy(`http://localhost:3000/video/${id}`);
    setIsCopy(!isCopy);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
      >
        Share
      </button>
      {
        isCopy && <p>Link Copy!</p>
      }
    </>
  );
}

export default ShareVideo;
