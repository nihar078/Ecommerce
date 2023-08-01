import React from "react";
import "./Title.css";
// import { Card } from "react-bootstrap";
// import { Navbar } from "react-bootstrap";
import HomeTitleButton from "../Home/HomeTitleButton";
import { useLocation } from "react-router-dom";

const Title = () => {
    const location = useLocation()
  return (
    <div className="heading">
       <h1>The Generics</h1>
       {location.pathname === "/home" && <HomeTitleButton />}
    </div>
  );
};

export default Title;