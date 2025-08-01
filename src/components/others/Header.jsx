// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { GetLocalStorage } from "../../utils/localStorage";

// const Header = () => {
//   const navigate = useNavigate();
//   const [userName, setUserName] = useState("User");

//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//     if (loggedInUser) {
//       const localData = GetLocalStorage();
//       let name = "User";
//       if (loggedInUser.role === "admin") {
//         const admin = localData?.admin?.find(
//           (a) => a.email === loggedInUser.email
//         );
//         name = admin?.name || "Admin";
//       } else {
//         const employee = localData?.employees?.find(
//           (e) => e.email === loggedInUser.email
//         );
//         name = employee?.name || "Employee";
//       }
//       setUserName(name);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
    
//     navigate("/login");
//   };

//   return (
//     <div className="flex items-center justify-between text-white mb-8">
//       <h1 className="text-2xl font-medium">
//         Hello <br />
//         <span className="text-3xl font-semibold">{userName} 👋</span>
//       </h1>
//       <button
//         onClick={handleLogout}
//         className="bg-red-600 hover:bg-red-700 py-2 px-6 font-medium text-lg text-white rounded-md transition focus:outline-none focus:ring-2 focus:ring-red-500"
//       >
//         Log Out
//       </button>
//     </div>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GetLocalStorage } from "../../utils/localStorage";

const Header = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      const localData = GetLocalStorage();
      let name = "User";
      if (loggedInUser.role === "admin") {
        const admin = localData?.admin?.find(
          (a) => a.email === loggedInUser.email
        );
        name = admin?.name || "Admin";
      } else {
        const employee = localData?.employees?.find(
          (e) => e.email === loggedInUser.email
        );
        name = employee?.name || "Employee";
      }
      setUserName(name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between text-white mb-8">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">{userName} 👋</span>
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 py-2 px-6 font-medium text-lg text-white rounded-md transition focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;