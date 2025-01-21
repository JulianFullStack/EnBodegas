import { Route, Routes} from "react-router-dom";
import React  from 'react';
import Start from "./Components/Start/Start.tsx";
import Home  from "../src/Components/Home/Home.tsx";
import NotFound from "./Components/NotFound/NotFound.tsx";

const Router = () => {
    return  (
        <Routes>
            <Route  path="/"       element={<Start/>} />
            <Route  path="/home"       element={<Home/>} />
            <Route  path="*"       element={<NotFound />} />
        </Routes>        
    )
}
export default Router;

