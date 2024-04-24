import React , {useState} from "react";
import { Form } from "react-router-dom";
import {Routes, Route } from "react-router-dom";
import Home from "../components/pages/home";
import Shop from "../components/pages/shop";



 const Routing =() =>{
    return (
        <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/shop'} element={<Shop/>}/>

        </Routes>
    )
}
export default Routing;