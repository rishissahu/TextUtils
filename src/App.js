import Navbar from './components/navbar/Navbar';
import './App.css';
import TextForm from './components/TextArea/TextArea';
import React, { useState } from 'react'
import About from './components/about/about';
// import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.background = "#100929"
      document.body.style.color = "white"
      // document.getElementById("textArea1").style.color = "white"

    }
    else {
      setmode("light")
      document.body.style.background = "white"
      document.body.style.color = "black"
      // document.getElementById("textArea1").style.color = "black"


    }
  }


  return (
    <>
      <BrowserRouter>
        <Navbar title="Textutiles" about="About" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/" element={<div className="container"><TextForm mode={mode} /></div>}></Route>
          <Route exact path='/about' element={<About mode={mode} />}> </Route>
        </Routes>
        {/* code imported from the documentation some more code is there which is not used here so removed  */}
      </BrowserRouter>

    </>
  );
}

export default App;


