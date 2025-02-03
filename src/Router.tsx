import { Route, Routes} from "react-router-dom";
import React  from 'react';
import Start from "./Components/Start/Start.tsx";
import Home  from "../src/Components/Home/Home.tsx";
import NotFound from "./Components/NotFound/NotFound.tsx";
import Car  from "./Components/Car/Car.tsx";

const Router = () => {
    return  (
        <Routes>
            <Route  path="/"       element={<Start/>} />
            <Route  path="/8w"       element={<Home/>} />
            <Route  path="/5d"       element={<Car/>} />
            <Route  path="*"       element={<NotFound />} />
        </Routes>        
    )
}
export default Router;

