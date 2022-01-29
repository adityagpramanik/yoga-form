import React, { useEffect, useState } from "react";
import "./Form.css";
import { auth, store } from "../gfirebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { addDoc, collection, getDocs, query, where, doc } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [age, setAge] = useState(18);
  const [slot, setSlot] = useState("");
  const [passkey, setPasskey] = useState("");
  const [obsText, setObsText] = useState(true);
  const [loginCheck, setLoginCheck] = useState(false);
  const [monthCheck, setMonthCheck] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      if (auth.currentUser != null) {
        setLoginCheck(true);

        const q = query(
          collection(store, "details"),
          where("email", "==", auth.currentUser.email)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const date = new Date();
          if (doc.data()["booked"].at(-1) === date.getMonth()) {
            console.log(doc.id, " => ", doc.data()["booked"].at(-1));
            setMonthCheck(true);
          }
        });
      }
    };
    getUser();
    console.log("user: " + auth.currentUser);
  });

  const navigate = useNavigate();

  const CompletePay = () => {
    console.log("Initiating payment");
    return true;
  };

  const submit = async (e) => {
    e.preventDefault();

    if (passkey.length < 10) alert("Choose a strong password");
    else if (age < 18 && age > 65) {
      alert(
        "Unable to register user must be at least 18 & at most 65 years old"
      );
    }
    else if (CompletePay) {
      if (auth.currentUser == null) {
        createUserWithEmailAndPassword(auth, email, passkey)
          .then((userCredential) => {
            var user = userCredential.user;
            console.log("user created: " + user);
            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("unable to create user: " + errorMessage);
          });
      }

      let bookedArray = [];
      const detailsCollRef = collection(store, "details");

      const querySnapshot = await getDocs(query(detailsCollRef, where("email", "==", email)));
      querySnapshot.forEach((doc) => {
        bookedArray = doc.data()["booked"];
      });

      const today = new Date();
      bookedArray.push(today.getMonth());

      await addDoc(collection(store, "details"), {
        name: { fname: fname, lname: lname },
        email: email,
        contact: contact,
        age: age,
        slot: slot,
        booked: bookedArray,
      });

      console.log("database updated successfully.");

      navigate("/account", { replace: true });
    }
    else
      alert("Payment failed. Try again!");
  };
  return (
    <div className="m-2">
      <form
        className="col-md-5 form user-select-none mx-auto mb-5 needs-validation"
        onSubmit={submit}
        noValidate
      >
        <h2 className="text-center">Admission form</h2>

        <div className="d-grid gap-3">
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

          <div className="row">
            <div className="col">
              <label className="form-label">Mobile Number</label>
            </div>
            <div className="col">
              <label className="form-label">Age</label>
            </div>
          </div>

          <div className="row">
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
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Age"
                required
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="container form-check m-auto p-0">
            <label>Timing</label>

            <div className="row m-2">
              <div className="form-check col-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  required
                  value={slot}
                  onChange={(e) => setSlot("A")}
                />
                <label className="form-check-label" for="exampleRadios1">
                  6-7 AM
                </label>
              </div>

              <div className="form-check col-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  required
                  value={slot}
                  onChange={(e) => setSlot("B")}
                />
                <label className="form-check-label" for="exampleRadios2">
                  7-8 AM
                </label>
              </div>

              <div className="form-check col-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  required
                  value={slot}
                  onChange={(e) => setSlot("C")}
                />
                <label className="form-check-label" for="exampleRadios3">
                  8-9 AM
                </label>
              </div>

              <div className="form-check col-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  required
                  value={slot}
                  onChange={(e) => setSlot("D")}
                />
                <label className="form-check-label" for="exampleRadios4">
                  5-6 PM
                </label>
              </div>
            </div>
          </div>

          {loginCheck ? (
            <></>
          ) : (
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
          )}

          {!monthCheck ? (
            <button
              type="submit"
              className="rounded-3 btn btn-primary border mt-3 me-5 ms-5"
            >
              <p className="m-0 p-0" style={{ color: "#ffffff" }}>
                Enroll
              </p>
            </button>
          ) : (
            <button
              className="rounded-3 btn btn-primary disabled border mt-3 me-5 ms-5"
            >
              <p className="m-0 p-0" style={{ color: "#ffffff" }}>
                Enroll
              </p>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
