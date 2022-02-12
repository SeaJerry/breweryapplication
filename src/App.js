import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {

  // DATA STATE // STORAGE
  const [data, setData] = useState([]);
  const [zipCode, setZipCode] = useState("");
  const [zipCodeInput, setZipCodeInput] = useState("");

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      const url = (`https://api.openbrewerydb.org/breweries?by_postal=${zipCode}`)
      // get the data from the api
      const response = await fetch(url);
      // convert the data to Json
      const data = await response.json();
      // set state with the result
      console.log(data)
      setData(data);
    };
    // call the function

    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [zipCode]);
  // dependency param

  const handleChange = (event) => {
    setZipCodeInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setZipCode(zipCodeInput);
  };

  return (
    <div className="App">
      <form className="search-form">
      <input value={zipCodeInput} type="text" onChange={handleChange} placeholder="Enter Zip Code" />
      <input onClick={handleSubmit} type="submit"  />
      </form>
    </div>
  );
}

export default App;
