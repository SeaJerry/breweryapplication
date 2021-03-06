import "./Main.css";
import { useState } from "react";

const Main = ({ handleZipCode, updateData }) => {
  const [zipCodeInput, setZipCodeInput] = useState("");

  const handleChange = (event) => {
    setZipCodeInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleZipCode(zipCodeInput);
    if (zipCodeInput !== "") updateData(true);
  };

  return (
    <div className="z-form">
      <form className="search-form">
        <input
          value={zipCodeInput}
          type="text"
          onChange={handleChange}
          placeholder="Enter Zip Code"
          className="input-btn"
        />
        <input className="submit-btn" onClick={handleSubmit} type="submit" />
      </form>
    </div>
  );
};

export default Main;
