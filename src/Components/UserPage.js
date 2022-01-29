import React, { useState, useEffect } from "react";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import LoginPage from "./LoginPage";
import { auth, store } from "../gfirebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { MdAlternateEmail } from "react-icons/md";
import { BiCake } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { BiAlarm } from "react-icons/bi";

export default function UserPage() {
  const [loginCheck, setLoginCheck] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [booked, setBooked] = useState([]);
  const [slot, setSlot] = useState("");

  const timing = { A: "6-7 AM", B: "7-8 AM", C: "8-9 AM", D: "5-6 PM" };

  useEffect(() => {
    const getUser = () => {
      var authInfo = auth.currentUser;
      if (authInfo != null) {
        setLoginCheck(true);
        setEmail(auth.currentUser.email);
      }
    };

    getUser();
  });

  const detailsCollRef = collection(store, "details");

  useEffect(() => {
    const getDetails = async () => {
      const q = query(detailsCollRef, where("email", "==", email));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setName(
          doc.data()["name"]["fname"] + " " + doc.data()["name"]["lname"]
        );
        setAge(doc.data()["age"]);
        setContact(doc.data()["contact"]);
        setSlot(doc.data()["slot"]);

        setBooked(doc.data()["booked"]);
      });
    };

    getDetails();
  });

  return (
    <>
      {loginCheck ? (
        <div className="grid user-select-none gap-3">
          <div className="col text-center">
            <h3>
              Hello, <b>{name}</b>
            </h3>
          </div>

          <div className="container text-center">
            <ul
              className="list-group list-group-horizontal"
              style={{ listStyle: "none" }}
            >
              <li className="item m-2">
                <MdAlternateEmail />
              </li>
              <li className="item m-2">{email}</li>
            </ul>
          </div>

          <div className="container text-center">
            <ul
              className="list-group list-group-horizontal"
              style={{ listStyle: "none" }}
            >
              <li className="item m-2">
                <BiCake />
              </li>
              <li className="item m-2">{age} Years</li>
            </ul>
          </div>

          <div className="container text-center">
            <ul
              className="list-group list-group-horizontal"
              style={{ listStyle: "none" }}
            >
              <li className="item m-2">
                <BiPhone />
              </li>
              <li className="item m-2">+91 {contact}</li>
            </ul>
          </div>

          <div className="container text-center">
            <ul
              className="list-group list-group-horizontal"
              style={{ listStyle: "none" }}
            >
              <li className="item m-2">
                <BiAlarm />
              </li>
              <li className="item m-2">{timing[slot]}</li>
            </ul>
          </div>
          <br />
          <div className="container text-center">
            <ul
              className="list-group list-group-horizontal"
              style={{ listStyle: "none" }}
            >
              <li className="item m-2"></li>
              <li className="item m-2">
                <b> Booked classes </b>
              </li>
            </ul>
          </div>

          <div className="container text-center">
            {booked.map((e) => {
              return <MonthCard month={e} />;
            })}
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export const MonthCard = ({ month }) => {
  let monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return <div className="card m-2">{monthList[month]}</div>;
};
