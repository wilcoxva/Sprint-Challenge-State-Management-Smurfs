import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import SmurfsList from "./SmurfsList";
import Axios from 'axios';
import SmurfsPost from "./SmurfsPost";

export const SmurfsContext = createContext();

const App = () => {

  const [smurf, setSmurf] = useState([]);
  console.log('smurf', smurf)

  useEffect(() => {
    Axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        setSmurf(res.data);
    });
}, []);

    return (
      <div className="App">
        <SmurfsContext.Provider value={smurf}>
          <SmurfsList />
          <SmurfsPost />
        </SmurfsContext.Provider>
        
      </div>
    );
};

export default App;
