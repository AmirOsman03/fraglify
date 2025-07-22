import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./ui/pages/HomePage/HomePage.jsx";
import Layout from "./ui/components/Layout/Layout/Layout.jsx";
import PerfumePage from "./ui/pages/PerfumePage/PerfumePage.jsx";
import PerfumeDetails from "./ui/components/Perfume/PerfumeDetails/PerfumeDetails.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={"perfumes"} element={<PerfumePage/>}/>
                    <Route path={"perfumes/:id"} element={<PerfumeDetails/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;