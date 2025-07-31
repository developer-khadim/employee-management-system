import React, { createContext, useState, useEffect } from 'react';
import { GetLocalStorage } from '../utils/localStorage';

export const  AuthContext= createContext();

// Create provider
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const data = GetLocalStorage();
    if (data) {
      setUserData(data);
    }
  }, []);

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
