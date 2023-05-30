// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Main from "./components/Main";
import {fetchData} from "./functions/fetchData"
import {baseURL} from "./utils/constant"


function App() {
  const [admitData, setAdmitData] = useState([]);
 
 

  useEffect (() => {
    fetchData(baseURL, setAdmitData);
  }, []);

  
  return (
    <div className="App">
      <Header/>
      <SideNav/>
      <Main/>
    </div>
  );
}

export default App;
