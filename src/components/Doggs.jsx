import { useState, useEffect } from "react";


// fetches api junk and turns each json message into an option tag for the later used select attribute
const Doggs = () => {
  const [options, setOptions] = useState('');

  useEffect(() => {
    const loadDogJson = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const dogs = await response.json();
        let output = '';
        Object.keys(dogs.message).forEach((breeds) => {
          output += `<option value="${breeds}">${breeds}</option>`;
        });
        setOptions(output);
      } catch (error) {
        console.error("Error with dog breeds (oops):", error);
      }
    };

    loadDogJson();
  }, []);

  return (
    <form id="dogSelection">
      <div className="form-control">
        <label htmlFor="dogSelection">Dog Breed</label>
        <select name="dogs" id="dogs" dangerouslySetInnerHTML={{ __html: options }} />
        
        <label htmlFor="dogNumber"># of Images</label>
        <input type="number" id="dogNumber" name="dogNumber" min="1" max="10" />
        <input type="submit" />
      </div>
    </form>
  );
};

export default Doggs;