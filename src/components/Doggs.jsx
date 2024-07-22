import React, { useState, useEffect } from 'react';
import '../assets/form-control.css'


const Doggs = ({ setSelectedID, setNumImg }) => {
  const [options, setOptions] = useState('');

  useEffect(() => {
    const loadDogJson = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const dogs = await response.json();
        let output = '<option value="empty">Select...</option>'
        let individualID = 0;
        Object.keys(dogs.message).forEach((breeds) => {
          output += `<option value="${breeds}" id=${individualID +=1}>${breeds}</option>`;
        });
        setOptions(output);

        // this is the chunk of code that handles what dog will be displayed
        document.getElementById('dogs').addEventListener('change', function(event) {
          var selectedID = event.target.value;
          setSelectedID(selectedID);
          console.log(selectedID);
        });

        document.getElementById('dogNumber').addEventListener('change', function(event) {
          var numImg = event.target.value;
          setNumImg(numImg);
          console.log(numImg);
        });

      } catch (error) {
        console.error("Error with dog breeds (oops):", error);
      }
    };

    loadDogJson();
  }, [setSelectedID, setNumImg]);

  return (
    <form id="dogSelection">
      <div className="form-control" >
        <label htmlFor="dogSelection">Dog Breed </label>
        <select name="dogs" id="dogs" dangerouslySetInnerHTML={{ __html: options }}  />
        
        <label htmlFor="dogNumber"> # of Images </label>
        <input type="number" id="dogNumber" name="dogNumber" min="1" max="30" />
      </div>
    </form>
  );
};

export default Doggs;