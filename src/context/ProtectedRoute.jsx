import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { GetLocalStorage } from '../utils/localStorage';

const ProtectedRoute = ({ children, requiredRole, allowAnonymous = false }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      const localData = GetLocalStorage();
      const isValidUser =
        (loggedInUser.role === 'admin' &&
          localData?.admin?.some((a) => a.email === loggedInUser.email)) ||
        (loggedInUser.role === 'employee' &&
          localData?.employees?.some((e) => e.email === loggedInUser.email));
      if (isValidUser) {
        setUser(loggedInUser);
      }
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#1c1c1c] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (allowAnonymous) {
    // For routes like /login, redirect logged-in users to their dashboard
    if (user) {
      return <Navigate to={user.role === 'admin' ? '/admin' : '/employee'} replace />;
    }
    return children;
  }

  // For protected routes, check user and role
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;