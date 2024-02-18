import {Routes, Route, Navigate} from "react-router-dom";

import {Home} from "../pages/home";
import {DishDetails} from "../pages/DishDetails";

export function CustomerRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<DishDetails/>}/>

      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  )
}