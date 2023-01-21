import './App.css';
import { Fragment } from 'react';
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <Fragment>
      <div className="App">
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </div></Fragment>
  );

}

export default App;
