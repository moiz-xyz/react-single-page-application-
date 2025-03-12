import './App.css';
import Navbar from "./Components/01_Navbar/Navbar.js";
import Main_section from './Components/02_Main section/Main_section.js';
import About from './Components/03_About/About.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main_section />
      <About/>
    </div>
  );
}

export default App;
