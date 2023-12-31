import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Sales from "../pages/Sales";
import Firms from "../pages/Firms";
import Brands from "../pages/Brands";
import Purchases from "../pages/Purchases";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="purchases" element={<Purchases/>} />
            <Route path="sales" element={<Sales/>} />
            <Route path="products" element={<Products/>} />
            <Route path="firms" element={<Firms/>} />
            <Route path="brands" element={<Brands/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

//here we wrapped the DashboardPage with Privatrouter and thanks to this, the user will not be directed to the dashboard page without logging into the system.

//When the user registers, he gets a token and this token is transmitted to Privatrouter in the backend and it is determined that he has logged into the system.Authhoritirization