import React, { useState, useEffect } from 'react';

const ImageGallery = ({ selectedID, numImg }) => {
  const [imgLinks, setImgLinks] = useState([]);

  useEffect(() => {
    const fetchImg = async () => {
      if (selectedID && numImg) {
        const response = await fetch(`https://dog.ceo/api/breed/${selectedID}/images/random/${numImg}`);
        const data = await response.json();
        setImgLinks(data.message);
      }
    };

    fetchImg();
  }, [selectedID, numImg]);

  return (
    <div id="imgBox">
      {imgLinks.length > 0 ? (
        imgLinks.map((link, index) => (
          <img key={index} src={link} alt="Dogs will be loaded here!!" height={200} width={200} />
        ))
      ) : (
        <p class="Info">your dogs will appear here onec you've made your choice.
          unfortunately, some dogs have a limited amout of photos.
        </p>
      )}
    </div>
  );
};

export default ImageGallery;