import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AapRoute from "./router";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

function App() {
  return (
    <div className="App">
      <AapRoute />
    </div>
  );
}

export default App;
