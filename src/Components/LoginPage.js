import React, { useState } from "react";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

export default function LoginPage(props) {
  console.log("hello " + props.isLogin);

  const [obsText, setObsText] = useState(true);
  const [passkey, setPasskey] = useState("");

  return (
    <>
      <form
        className="col-md-5 form user-select-none mx-auto mb-5 needs-validation"
        // onSubmit={submit}
        novalidate
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
                // value={fname}
                // onChange={(e) => setFname(e.target.value)}
              />
            </div>
          </div>

          <div className="container m-auto p-0">
              <label className="form-label">Password</label>

              <div className="form-group">
                <div class="input-group mb-3">
                  <input
                    type={obsText ? "password" : "text"}
                    className="form-control"
                    required
                    value={passkey}
                    onChange={(e) => setPasskey(e.target.value)}
                  />
                  <div class="input-group-addon mt-auto mb-auto m-1">
                    <div
                      class="input-group-text"
                      onClick={() => setObsText(!obsText)}
                    >
                      {obsText ? <BiHide /> : <BiShow />}
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>

      </form>
    </>
  );
}
