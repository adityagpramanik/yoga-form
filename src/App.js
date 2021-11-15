import Header from "./Components/Header.js";
import Form from "./Components/Form.js";
// import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer";

function App(props) {
  const CompletePay = () => {
    alert("Hey");
    console.log("Initiating payment");
  };
  return (
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Header />
                <Form />
              </div>
            }
          />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
