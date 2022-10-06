import Navbar from './components/navbar/Navbar';
import './App.css';
import TextForm from './components/TextArea/TextArea';
import React, {useState} from 'react'

function App() {
  const [mode, setmode] = useState('light')

 const toggleMode=()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.background="#100929"
      document.body.style.color="white"
      document.getElementById("textArea1").style.color="white"
      
    }
    else{
      setmode("light")
      document.body.style.background ="white"
      document.body.style.color="black"
      document.getElementById("textArea1").style.color="black"


    }
  }
  

  return (
    <>

      <Navbar title="Textutiles" about="About"  mode={mode} toggleMode={toggleMode}/>
      <div className="container"><TextForm mode={mode} /></div>

    </>
  );
}

export default App;
