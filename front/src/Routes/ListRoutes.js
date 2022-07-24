import React from "react";
import { Route, Routes } from "react-router-dom";
import Listarticles from "../Components/Articles/Listarticles";
import Listcategories from "../Components/Categories/Listcategories";
import Listscategories from "../Components/Scategories/Listscategories";
import DashboardAdmin from "../Components/Admin/DashboardAdmin";
import Register from "../Components/Admin/Register";
import Cart from "../Components/Client/Cart";
import Card from "../Components/Client/Card";
import Login from "../Components/Admin/Login";
import Logout from "../Components/Admin/Logout";
import ProtectedRoutes from "../Components/Admin/ProtectedRoutes";
import PdfCart from "../Components/Admin/Pdfcard";

const ListRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/DashboardAdmin" element={<DashboardAdmin />} />
          <Route path="/Listcategories" element={<Listcategories />} />
          <Route path="/Listscategories" element={<Listscategories />} />
          <Route path="/Listarticles" element={<Listarticles />} />
        </Route>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/" element={<Card />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
       
      </Routes>
    </div>
  );
};

export default ListRoutes;
