import { signInWithEmailAndPassword } from "@firebase/auth";
import React, { useState } from "react";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { auth } from "../gfirebase";

export default function LoginPage() {
  const [obsText, setObsText] = useState(true);
  const [passkey, setPasskey] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const userLogin = async (e) => {
    e.preventDefault();
    if (email === "" || passkey === "")
      alert("Password/Email can't be empty");
    else {
      await signInWithEmailAndPassword(auth, email, passkey)
        .then((user) => {
          console.log("user logged in: " + user);
          navigate("/account", { replace: true });
        }).catch((error) => {
          console.log("Error: " + error);
        });
    }
  }

  return (
    <>
      <form
        className="col-md-5 form user-select-none mx-auto mb-5 needs-validation"
        // onSubmit={submit}
        noValidate
      >
        <h2 className="text-center">Welcome back!</h2>

        <div className="d-grid gap-3">

          <div className="container m-auto p-0">
            <label className="form-label">Email</label>
            <div className="container p-0">
              <input
                type="text"
                className="form-control"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="container m-auto p-0">
            <label className="form-label">Password</label>

            <div className="form-group">
              <div className="input-group mb-3">
                <input
                  type={obsText ? "password" : "text"}
                  className="form-control"
                  required
                  value={passkey}
                  onChange={(e) => setPasskey(e.target.value)}
                />
                <div className="input-group-addon mt-auto mb-auto m-1">
                  <div
                    className="input-group-text"
                    onClick={() => setObsText(!obsText)}
                  >
                    {obsText ? <BiHide /> : <BiShow />}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="rounded-3 btn btn-primary border mt-3 me-5 ms-5"
            onClick={userLogin}
          >
            <p className="m-0 p-0" style={{ color: "#ffffff" }}>
              Login
            </p>
          </button>
        </div>

      </form>
    </>
  );
}
