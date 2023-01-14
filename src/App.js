// import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Experience from './Components/Experience/Experience';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <Fragment> 
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      </div></Fragment>
  );
   
}

export default App;
