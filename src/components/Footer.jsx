import React from 'react';
import { useSelector } from 'react-redux';

export default function Footer() {
  const { currentVideo } = useSelector((state) => state);
  console.log(currentVideo);
  return (
    <div>
      hello Footer
    </div>
  );
}
