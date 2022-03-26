import React from "react";
import { Navigate } from "react-router-dom";
import path from "../../services/routerPath.json";

const PrivateRoute = ({ children, isCompleted }) => (
  <>{isCompleted ? <>{children} </> : <Navigate to={path.block1} />}</>
);

export default PrivateRoute;
