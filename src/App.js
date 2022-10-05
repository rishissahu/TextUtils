import Navbar from './components/navbar/Navbar';
import './App.css';
import TextForm from './components/TextArea/TextArea';

function App() {
  return (
   <> <Navbar title="Textutiles" about="About"/>
   <div className="container"><TextForm/></div> </>
  );
}

export default App;
