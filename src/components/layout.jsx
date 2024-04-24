import { BrowserRouter as BrowserRouter ,Link  } from "react-router-dom";
import React from "react";
import Navbarheader from "./navbar";
 
 const Layout = ({children }) => {
   return (
    <BrowserRouter>
      <div className="App">
     
     <div> 
      <Navbarheader/>
      <div>{children}  </div>

      </div>
      </div>




    </BrowserRouter>
   
   )
 }
 
 export default Layout