import React from 'react';
import './App.css';
import logo from './logo/logo.png';
import Navbar from './navbar/navbar';
import Body from './body/body';
import Slider from './image/image';
import Details from './details/details';
import Footer from './footer/footer';
import Copy from './copyright/copyright';


class App extends React.Component{
  
  render(){
    return(
      <div className='App'>
      <img src={logo} alt=''/>
      <Navbar />
      <Body />
      <Slider />
      <Details />
      <Footer />
      <Copy />
  
      </div>
    )
  }
}



export default App;
