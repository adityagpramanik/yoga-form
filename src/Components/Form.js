import React, { useState } from "react";
import "./Form.css";
import { db } from "../gfirebase";

export default function Form() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [age, setAge] = useState(18);
  const [slot, setSlot] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (age >= 18 && age <= 65)
      alert(
        fname + " " + lname + " " + email + " " + contact + " " + age + " " + slot
      );
    else {
      alert('Unable to register user must be at least 18 & at most 65 years old');
    }
  };
  return (
    <div className="ms-5 me-5">
      <form
        className="col-md-5 form user-select-none mx-auto mb-5 needs-validation"
        onSubmit={submit}
        novalidate
      >
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
                    required
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>

                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Lastname"
                    required
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
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
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
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
                required
                value={age}
                onChange={(e) => {setAge(e.target.value); }}
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
                  required
                  value={slot}
                  onChange={(e) => setSlot("A")}
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
                  required
                  value={slot}
                  onChange={(e) => setSlot("B")}
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
                  required
                  value={slot}
                  onChange={(e) => setSlot("C")}
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
                  required
                  value={slot}
                  onChange={(e) => setSlot("D")}
                />
                <label class="form-check-label" for="exampleRadios3">
                  5-6 PM
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
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
