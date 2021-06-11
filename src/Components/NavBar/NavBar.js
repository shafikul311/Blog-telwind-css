import { Link } from 'react-router-dom';
import React from 'react';
// import Link from "react-router-dom"

const NavBar = () => {
    return (
      
       <div className="flex border-b-1 border-black p-5 justify-between shadow ">
           <div>
               <p className="mx-5 text-3xl">WORLD BUSINESS NEWS</p>
           </div>
            <div className="flex">
                <Link to="/"> <p className="mx-5 text-3xl">HOME</p></Link>
                <Link to="/popular"> <p className="mx-5 text-3xl">POPULAR NEWS</p></Link>
                <Link to="/about"> <p className="mx-5 text-3xl">ABOUT</p></Link>
       
            </div>
       </div>
              
    );
};

export default NavBar;