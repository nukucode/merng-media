import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

/* CONTEXT AND PROVIDER */
import { AuthContext } from "../context/auth";

export const PrivateRoute = () => {
  const { user } = useContext(AuthContext);
  return <>{!user ? <Outlet /> : <Navigate to="/" />}</>;
};
