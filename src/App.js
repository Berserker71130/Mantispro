import { Routes, Route, useNavigate } from "react-router-dom";
import React from "react";

import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
