import React, { useState } from "react";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import LoginPage from "./LoginPage";

export default function UserPage({ isLogin }) {
  console.log("hello " + isLogin);

  let some = 'Aditya';

  return (
    <>
      {isLogin ? (
        <div className="container text-center mt-5 mx-auto">
            <div className="col m-3">
            <label className="label">Hello, {some} </label>
            </div>
            <div className="col m-3">
            <label className="label">Email</label>
            </div>
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
}
