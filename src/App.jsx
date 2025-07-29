import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import SetLocalStorage from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

function App() {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext); 

  useEffect(() => {
    SetLocalStorage();
  }, []);

  useEffect(() => {
    if (authData) {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser) {
        setUser(loggedInUser);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (!authData) {
      toast.error("Auth data not loaded");
      return;
    }

    // Check Admin
    const admin = authData.admin?.find((a) => a.email === email && a.password === password);
    if (admin) {
      const adminUser = { role: "admin", email };
      setUser(adminUser);
      localStorage.setItem('loggedInUser', JSON.stringify(adminUser));
      toast.success("Welcome Admin!");
      return;
    }

    // Check Employee
    const employee = authData.employees?.find((e) => e.email === email && e.password === password);
    if (employee) {
      const employeeUser = { role: "employee", email };
      setUser(employeeUser);
      localStorage.setItem('loggedInUser', JSON.stringify(employeeUser));
      toast.success("Welcome Employee!");
      return;
    }

    // Invalid credentials
    toast.error("Invalid Credentials");
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />

      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard />
      )}
    </>
  );
}

export default App;
