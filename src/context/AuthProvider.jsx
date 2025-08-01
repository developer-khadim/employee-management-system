
import React, { createContext, useState, useEffect } from 'react';
import { GetLocalStorage } from '../utils/localStorage';

// Create AuthContext with default value
export const AuthContext = createContext({
  employees: null,
  admin: null,
});

// Create provider
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    employees: null,
    admin: null,
  });

  useEffect(() => {
    const localData = GetLocalStorage();
    console.log('Local storage data:', localData); // Debug log
    const employees = localData?.employees || null;
    const admin = localData?.admin || null;
    setUserData({ employees, admin });
  }, []);

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;