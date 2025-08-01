

import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import SetLocalStorage from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

function App() {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    SetLocalStorage();
  }, []);

  useEffect(() => {
    if (authData && (authData.employees || authData.admin)) {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser) {
        setUser(loggedInUser);
        // Redirect based on role
        navigate(loggedInUser.role === 'admin' ? '/admin' : '/employee');
      }
    }
  }, [authData, navigate]);

  // Expose setUser for logout
  const handleLogout = () => {
    setUser(null);
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
      {!user && <Navigate to="/login" replace />}
    </>
  );
}

export default App;