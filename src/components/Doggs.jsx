import { useState } from "react"

const Doggs = () => {
  return (
    <form id="dogSelection">
        <div className="form-control">
            <label for="dogSelection">Dog Breed</label>
            <select name="dogs" id="dogs">
                <option value="dog1">dog 1</option>
                <option value="dog2">dog 2</option>
                <option value="dog3">dog 3</option>
                <option value="dog4">dog 4</option>
            </select>
            
            <label for="dogNumber"># of Images</label>
            <input type="number" id="dogNumber" name="dogNumber" min="1" max="10"/>
            <input type="submit"></input>
        </div>
    </form>
  )
}

export default Doggs
