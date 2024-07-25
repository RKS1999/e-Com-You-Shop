// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const AuthRouter = () => {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   return <Outlet />;
// };

// export default AuthRouter;

// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const AuthRouter = () => {
//   const isAuthenticated = !!localStorage.getItem("user");
//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// };

// export default AuthRouter;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRouter = () => {
  const isAuthenticated = !!localStorage.getItem("user");
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRouter;
