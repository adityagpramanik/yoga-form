import Header from "./Components/Header.js";
import Form from "./Components/Form.js";
import UserPage from "./Components/UserPage.js";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer";
import LoginPage from "./Components/LoginPage.js";

function App() {
  let loginCheck = true;
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
        <Route
          exact
          path="/account"
          element={
            <div>
              <Header />
              <UserPage isLogin={loginCheck} />
            </div>
          }
        >
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
