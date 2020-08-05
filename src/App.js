import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AapRoute from "./router";
import "animate.css/animate.min.css";
import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAz7TrXJU10-5GXTszkWKPTTIuXjVh4YsE",
  authDomain: "jamia-abul-qasim.firebaseapp.com",
  databaseURL: "https://jamia-abul-qasim.firebaseio.com",
  projectId: "jamia-abul-qasim",
  storageBucket: "jamia-abul-qasim.appspot.com",
  messagingSenderId: "473287735657",
  appId: "1:473287735657:web:e82b9661873a8b424d65f8",
  measurementId: "G-MWQNCQDRBK",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function App() {
  return (
    <div className="App">
      <AapRoute />
    </div>
  );
}

export default App;
