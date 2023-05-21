// App.js
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import SideImage from "./components/SideImage";
import Main from "./components/Main";

function App() {
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [admitData, setAdmitData] = useState([]);
  return (
    <div className="App">
       <SideImage/>
       <Header selectedCardId={selectedCardId} admitData={admitData} />
      <SideNav />
      <Main selectedCardId={selectedCardId} admitData={admitData} setSelectedCardId={setSelectedCardId} setAdmitData={setAdmitData} />
    </div>
  );
}

export default App;
