import React from 'react'
import yoga from "../Assets/Yoga.png"

export default function Header() {
    let image = {
        height: "12vh",
        marginTop: '10px',
        marginBottom: '10px',
    }
    return (
        <div className="d-flex justify-content-center">
            <img src={yoga} alt="logo" style = {image}/>
        </div>
    )
}