import Header from "./Components/Header.js";
import Form from "./Components/Form.js";
import UserPage from "./Components/UserPage.js";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Footer } from "./Components/Footer";

function App(props) {
  let login = false,
    home = true;

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
              <Header isLogin={login} isHome={home} />
              <Form />
            </div>
          }
        />
        <Route
          exact
          path="/account"
          element={
            <div>
              <Header isLogin={login} isHome={home} />
              <UserPage />
            </div>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
