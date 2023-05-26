import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import React, { Suspense } from "react";
import AdminRoutes from "./Routes/AdminRoutes";
import EmployerRoutes from './Routes/EmployerRoutes';

import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Dashboard from "./component/AdminLayout/index";
import LoginPage from "./pages/LoginPage/index";
import AdminLogin from "./pages/LoginPage/AdminLogin";
import DefaultLayout from "./pages/Employee/DefaultLayout";

const App = () => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/admin" element={<ProtectedRoute component={Dashboard} token={"admin-token"} />}>
          {AdminRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route>
        <Route path="/employer" element={<ProtectedRoute component={DefaultLayout} token={"emp-token"}/>}>
            {EmployerRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
            ))}
        </Route>
      </Routes>
    </Suspense>
  );
};


export default App;
