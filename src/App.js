import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar'
import Showcase from './Components/Showcase'
import Contact from './Components/Contact'
import Context from './Components/Context'
import Brandsdata from './Data/data.json'
import Popup from './Components/Popup';
import Collection from './Components/Collection';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



function App() {
  const DataArray = []
  Object.keys(Brandsdata).map((item) => {
    DataArray.push(Brandsdata[item])
  })

  const [colors, setColors] = useState(DataArray);
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);


  useEffect(() => {
    setColors(DataArray.filter((data) => data.title.toLowerCase().includes(search.toLowerCase())));

  }, [search])
  const data = {
    colors,
    selected,
    setSelected,
    search,
    setSearch,
    text,
    setText,
    isCopied,
    setIsCopied
  }

  return (
    <div className="App">
      <Context.Provider value={data}>
        <Sidebar />
        <Contact />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Showcase />} />
            <Route path="/c/:slugs" element={<Collection />} />
          </Routes>
        </BrowserRouter>
        {isCopied ? <Popup /> : ''}
      </Context.Provider>
    </div >
  );
}

export default App;
