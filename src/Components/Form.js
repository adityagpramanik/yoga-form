import React from "react";
import "./Form.css";

export default function Form() {
    function submit (e) {
        alert("Initiating payment process" + e);
    }
  return (
    <div className="ms-5 me-5">
      <form className="col-md-5 form user-select-none mx-auto mb-5 needs-validation" novalidate>
        <h2 className="text-center">Admission form</h2>

        <div class="d-grid gap-3">
          <div className="container m-auto p-0">
            <label className="form-label">Name</label>

            <div className="container p-0">
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Firstname"
                    // required
                  />
                </div>

                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Lastname"
                    // required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container m-auto p-0">
            <label className="form-label">Email Address</label>

            <div className="col">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                // required
              />
            </div>
          </div>

          <div className="container m-auto p-0">
            <label className="form-label">Mobile Number</label>

            <div className="col">
              <input
                type="tel"
                className="form-control"
                placeholder="Contact"
                // required
              />
            </div>
          </div>

          <div className="container m-auto p-0">
            <label className="form-label">Age</label>

            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Age"
                // required
              />
            </div>
          </div>

          <div className="container form-check m-auto p-0">
            <label>Timing</label>

            <div className="row m-2">
              <div class="form-check col-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                //   required
                />
                <label class="form-check-label" for="exampleRadios1">
                  6-7 AM
                </label>
              </div>

              <div class="form-check col-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                  required
                />
                <label class="form-check-label" for="exampleRadios2">
                  7-8 AM
                </label>
              </div>

              <div class="form-check col-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  value="option3"
                  required
                />
                <label class="form-check-label" for="exampleRadios3">
                  8-9 AM
                </label>
              </div>

              <div class="form-check col-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  value="option3"
                  required
                />
                <label class="form-check-label" for="exampleRadios3">
                  5-6 PM
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            onSubmit={submit}
            className="rounded-3 btn btn-primary border mt-3 me-5 ms-5"
          >
            <p className="m-0 p-0" style={{ color: "#ffffff" }}>
              Enroll
            </p>
          </button>
        </div>
      </form>
    </div>
  );
}
