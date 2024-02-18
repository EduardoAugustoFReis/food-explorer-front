import {Routes, Route, Navigate} from "react-router-dom";

import {Home} from "../pages/home";
import {NewDish} from "../pages/NewDish";
import {UpdateDish} from "../pages/UpdateDish";
import {DishDetails} from "../pages/DishDetails";

export function AdminRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/new" element={<NewDish/>}/>
      <Route path="/update/:id" element={<UpdateDish/>}/>
      <Route path="/details/:id" element={<DishDetails/>}/>

      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  )
}