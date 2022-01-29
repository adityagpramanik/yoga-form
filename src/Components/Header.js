import React from "react";
import yoga from "../Assets/Yoga.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { auth } from "../gfirebase";
import { signOut } from "@firebase/auth";

export default function Header() {
  let image = {
    height: "10vh",
    marginTop: "10px",
    marginBottom: "10px",
  };

  let navigate = useNavigate();

  const userLogout = async () => {
    alert("loggin out");
    await signOut(auth);
    navigate("/", {replace: true});
  };

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
            {/* <button className="btn shadow-sm" onClick={userLogin}>
              <FiLogIn />
            </button> */}
            <button className="btn shadow-sm" onClick={userLogout}>
              <FiLogOut />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}