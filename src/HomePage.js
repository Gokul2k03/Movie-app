import React from "react";
import './css/HomePage.css'
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

function HomePage(){

    return(
      <div className="landingpage">
        <div className="navbar-brand">
          <h2 className="brand">CINE RECORDS</h2>
        </div>
        <div className="content">
          <h1 className="content-h1">Discover, Enjoy and Access<br></br>
          movies as per your wish</h1>
          <div className="inputbox">
            <MdOutlineScreenSearchDesktop className="search-icon" />
            <input type="text" placeholder="Search here..." id="search"/>
            <button className="button">Search</button>
          </div>
        </div>
      </div>
    );
}


export default HomePage;