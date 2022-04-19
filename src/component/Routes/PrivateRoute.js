import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isLogin } from "../IsLogin";

const PrivateRoute = () => {
  return isLogin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
