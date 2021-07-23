import React, {useState, useEffect} from "react";



const DropDownBar = () => {

  const [searchState, setSearchState] = useState({
    
  })
  return (
    <div>
      <form>
      <h3>Search For:</h3>
      <select>
        <option value="people">People 🍇</option>
        <option value="planets">Planets 🥭"</option>
      </select>
      <input type="number" name="id" />
      <button>Search</button>
      </form>
    </div>
  );
};

export default DropDownBar;
