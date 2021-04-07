import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import { Component } from 'react';


function App() {
  return (
    <>
      <Particles
      className="particles-canvas"
        params={{
            particles :{
              number :{
                value :40 ,
                density :{
                  enable: true, 
                  value_area:900
                  }
                },
                shape :{
                  type: "circle",
                  stroke :{
                    width: 6,
                    color: "#f9ab00"
                  }
              }
            }
        }}
        
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
