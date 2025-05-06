import { Routes, Route, useNavigate } from "react-router-dom";
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import Customers from "./Customers";
import Income from "./Income";
import Expenses from "./Expenses";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/income" element={<Income />} />
      <Route path="/expenses" element={<Expenses />} />
    </Routes>
  );
}

export default App;
