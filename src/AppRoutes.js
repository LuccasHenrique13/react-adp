import React from "react";
import Homepg from "./Homepg";
import Pgabijaudi from "./Pgabijaudi";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Homepg/>}></Route>
                <Route path="/abijaudi" element={<Pgabijaudi/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;