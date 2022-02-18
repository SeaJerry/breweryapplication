import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "./Components/Main/Main";
import Cards from "./Components/Cards/Cards";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import UsersList from "./Components/UsersList/UsersList";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import { BlogCardData } from "./Components/Blog/BlogCardData";

function App() {
  const [data, setData] = useState([]);
  const [zipCode, setZipCode] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [usersListData, setUsersListData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.openbrewerydb.org/breweries?by_postal=${zipCode}`;

      const response = await fetch(url);

      const data = await response.json();

      console.log(data);
      setData(data);
    };

    fetchData().catch(console.error);
  }, [zipCode]);

  const handleZipCode = (zip) => {
    setZipCode(zip);
  };

  const updateData = (isTrue) => {
    setIsSubmitted(isTrue);
  };

  const resetIsSubmitted = () => {
    setIsSubmitted(false);
  };

  const handleUsersData = (brewery) => {
    if (usersListData === []) {
      setUsersListData(brewery);
    } else {
      setUsersListData([...usersListData, brewery]);
    }
  };
  console.log(usersListData);
  return (
    <>
      <NavBar removeData={resetIsSubmitted} />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Main handleZipCode={handleZipCode} updateData={updateData} />
            }
          />
          <Route path="/About" element={<About />} />
          <Route
            path="/UsersList"
            element={<UsersList usersListData={usersListData} />}
          />
          <Route path="/Blog" element={<Blog BlogCardData={BlogCardData} />} />
        </Routes>
        <div className="cards-section">
          {isSubmitted && (
            <Cards apiCallData={data} handleUsersData={handleUsersData} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
