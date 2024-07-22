import React, { useState } from 'react';
import Doggs from './Doggs';
import ImageGallery from './ImageGallery';

const JankSolution = () => {
  const [selectedID, setSelectedID,] = useState('');
  const [numImg, setNumImg] = useState(1);

  return (
    <div>
      <Doggs setSelectedID={setSelectedID} setNumImg={setNumImg}/>
      <ImageGallery selectedID={selectedID} numImg={numImg} />
    </div>
  );
};

export default JankSolution;