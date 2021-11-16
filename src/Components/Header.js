import React from "react";
import PropTypes from "prop-types";
import yoga from "../Assets/Yoga.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { FiHome } from "react-icons/fi";

export default function Header() {
  let image = {
    height: "10vh",
    marginTop: "10px",
    marginBottom: "10px",
  };

  // let navigate = useNavigate();

  // const navHome = (e)=> {
  //   e.preventDefault();
  //   console.log("nav home");
  //   navigate("/", {replace: true});
  // };

  return (
    <>
      <div className="row text-center m-0" style={{ maxWidth: "100%" }}>
        <div className="col"></div>
        <div className="col">
          <img src={yoga} alt="logo" style={image} />
        </div>
        <div className="col mt-auto mb-auto">
          <div className="col me-3" style={{ float: "right" }}>
            <button className="btn shadow-sm">
              <Link
                to={"/account"}
                replace={true}
                style={{ color: "black" }}
              >
                <FiUser />
              </Link>
            </button>
            <button className="btn shadow-sm">
              <Link
                to={"/"}
                replace={true}
                style={{ color: "black" }}
              >
                <FiHome />
              </Link>
            </button>
          </div>
          <div className="col me-3" style={{ float: "right" }}>
            <button className="btn shadow-sm">
              <FiLogIn />
            </button>
            <button className="btn shadow-sm">
              <FiLogOut />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}