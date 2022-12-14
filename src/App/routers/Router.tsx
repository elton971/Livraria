import React, {Fragment} from 'react'
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import {Home_Page} from "../pages/Home_Page";
import {Description_Page} from "../pages/Description_Page";
import {Login_Page} from "../pages/Login_Page";
import {Painel_Control_Page} from "../pages/Painel_Control_Page";

export default function Router() {
  return (
    <BrowserRouter>
        <Fragment>
            <Routes >
                <Route path="/home" element={<Home_Page/>} />
                <Route path="/book/:id" element={<Description_Page/>} />
                <Route path="/" element={<Login_Page/>}/>
                <Route path="/Painel" element={<Painel_Control_Page/>}/>
            </Routes>
        </Fragment>
    </BrowserRouter>
  )
}
