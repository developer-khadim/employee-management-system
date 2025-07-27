import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import SetLocalStorage, { GetLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    SetLocalStorage(); // set only once when app loads
  }, []);

  const handleLogin = (email, password) => {
    // hardcoded logic or fetch from localStorage
    if (email === "khadim@gmail.com" && password === "123") {
      toast.success("Welcome Admin!");
      setUser({ role: "admin", email });
    } else if (email === "emp@gmail.com" && password === "123") {
      toast.success("Welcome Employee!");
      setUser({ role: "employee", email });
    } else {
      toast.error("Invalid email or password!");
    }
  };

  const data = useContext(AuthContext)
  console.log(data)

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
