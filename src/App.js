import Navbar from './components/navbar/Navbar';
import './App.css';
import TextForm from './components/TextArea/TextArea';
import React, {useState} from 'react'

function App() {
  const [mode, setmode] = useState('light')

 const toggleMode=()=>{
    if(mode==="light"){
      setmode("dark")
    }
    else{
      setmode("light")
    }
  }
  

  return (
    <>

      <Navbar title="Textutiles" about="About"  mode={mode} toggleMode={toggleMode}/>
      <div className="container"><TextForm/></div>

    </>
  );
}

export default App;
