import './App.css';
import NavBar from './Components/Nav';
import Feature from './Components/Features';
import Contact from './Components/Contacts';
import About from './Components/About';
import FooterBar from './Components/Footer';
import Home from './Components/Home';

function App() {
  return (
    <div className="App" id='app0'>
      <NavBar />
      <Home />
      <About />
      <Feature />
      <Contact />
      <FooterBar />
    </div>
  );
}

export default App;
