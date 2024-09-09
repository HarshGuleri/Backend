import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div className="main-container">
            <div className="main-left">
                <h1 className="main-left-heading">Human<br />Stories & ideas</h1>
                <p className="main-left-para">A place to read, write and deepen your understanding</p>
                <Link to="/Signup">
                <button className="main-left-button">Start reading</button>
                </Link>
            </div>
            <div className="main-right">
                <img className="home-img" src={require("./home-img.webp")} />
            </div>
        </div>
    );
};

export default Main;