import React from "react";
import PropTypes from 'prop-types'
import yoga from "../Assets/Yoga.png";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import { FiUser } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { FiHome } from "react-icons/fi";

export default function Header(props) {
  let image = {
    height: "12vh",
    marginTop: "10px",
    marginBottom: "10px",
  };

  const tapHome = () => {
      alert("something");
  }
  return (
    <>
      <div className="row text-center" style={{ maxWidth: "100%" }}>
        <div className="col"></div>
        <div className="col">
          <img src={yoga} alt="logo" style={image} />
        </div>
        <div className="col mt-auto mb-auto">
          <div className="col me-3" style={{ float: "right" }}>
            <button className="btn shadow-sm" onClick={tapHome}>
              {props.isHome? <FiUser />: <FiHome/>}
            </button>
          </div>
          <div className="col me-3" style={{ float: "right" }}>
            <button className="btn shadow-sm">
            {props.isLogin? <FiLogOut/> : <FiLogIn/>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Header.prototype = {
    isLogin : PropTypes.bool,
    isHome : PropTypes.bool,
}