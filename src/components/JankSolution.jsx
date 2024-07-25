import React, { useState } from 'react';
import Doggs from './Doggs';
import ImageGallery from './ImageGallery';


// I wanted to pass variables betweeen these two components and couldn't find a good solution, so i made a "parent" component so to speak, that contained both components, and when a
// variable was changed in one, it would send to the parent component, and update any other component's definition of said variable.
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