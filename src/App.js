import Header from "./Components/Header.js";
import Form from "./Components/Form.js";
import UserPage from "./Components/UserPage.js";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Form />
          }
        />
        <Route
          exact
          path="/account"
          element={
            <UserPage />
          }
        >
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
