import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "./Components/Main/Main";
import Cards from "./Components/Cards/Cards";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import UsersList from "./Components/UsersList/UsersList";
import About from './Components/About/About'

function App() {
  // DATA STATE // STORAGE
  const [data, setData] = useState([]);
  const [zipCode, setZipCode] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      const url = `https://api.openbrewerydb.org/breweries?by_postal=${zipCode}`;
      // get the data from the api
      const response = await fetch(url);
      // convert the data to Json
      const data = await response.json();
      // set state with the result
      console.log(data);
      setData(data);
    };
    // call the function

    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [zipCode]);
  // dependency param
  const handleZipCode = (zip) => {
    setZipCode(zip)
  }

  const updateData = (isTrue) => {
    setIsSubmitted(isTrue)
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main handleZipCode={handleZipCode} updateData={updateData}/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/UsersList" element={<UsersList/>} />
        <Route path="/Footer" element={<Footer/>} />
      </Routes>

      {isSubmitted && <Cards apiCallData={data} />}
      <Footer />
    </div>
  );
}

export default App;
