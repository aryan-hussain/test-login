import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ children, ...rest }) {
  const isAuthenticated = localStorage.getItem("token") !== null;
  console.log(isAuthenticated, "isAuthenticated");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
