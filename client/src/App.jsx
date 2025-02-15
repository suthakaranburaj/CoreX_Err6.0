import React from "react";
import DepartmentForm from "./Pages/DepartmentForm" // Adjust the import path as needed
import RegistrationForm from "./Pages/RegistrationForm";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
   <Outlet />
  );
};

export default App;
