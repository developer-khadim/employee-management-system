// import React, { useState } from "react";
// import { User, Lock, Building2, Eye, EyeOff } from "lucide-react";

// const Login = ({ handleLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

// const submitHandler = async (e) => {
//   e.preventDefault();

//   setIsLoading(true);
//   try {
//     await handleLogin(email, password);
//   } catch (error) {
//     console.error("Login failed:", error);
//   } finally {
//     setIsLoading(false);
//     setEmail("");
//     setPassword("");
//   }
// };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 flex items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mb-4 shadow-lg">
//             <Building2 className="w-8 h-8 text-white" />
//           </div>
//           <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
//           <p className="text-slate-300">
//             Sign in to Employee Management System
//           </p>
//         </div>

//         {/* Login Form */}
//         <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
//           <div className="space-y-6">
//             {/* Email Input */}
//             <div className="space-y-2">
//               <label className="text-sm font-medium text-slate-200 block">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
//                 <input
//                   className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
//                   type="email"
//                   placeholder="Enter your email address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   onKeyPress={(e) => e.key === "Enter" && submitHandler(e)}
//                 />
//               </div>
//             </div>

//             {/* Password Input */}
//             <div className="space-y-2">
//               <label className="text-sm font-medium text-slate-200 block">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
//                 <input
//                   className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   onKeyPress={(e) => e.key === "Enter" && submitHandler(e)}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
//                 >
//                   {showPassword ? (
//                     <EyeOff className="w-5 h-5" />
//                   ) : (
//                     <Eye className="w-5 h-5" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Remember Me & Forgot Password */}
//             <div className="flex items-center justify-between text-sm">
//               <div className="flex items-center text-slate-300 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   className="w-4 h-4 text-emerald-600 bg-transparent border-white/20 rounded focus:ring-emerald-500 focus:ring-2 mr-2"
//                 />
//                 <span>Remember me</span>
//               </div>
//               <button
//                 type="button"
//                 className="text-emerald-400 hover:text-emerald-300 transition-colors"
//               >
//                 Forgot password?
//               </button>
//             </div>

//             {/* Submit Button */}
//             <button
//               className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//               onClick={submitHandler}
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <div className="flex items-center justify-center">
//                   <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
//                   Signing in...
//                 </div>
//               ) : (
//                 "Sign In"
//               )}
//             </button>
//           </div>

//           {/* Footer */}
//           <div className="mt-6 text-center">
//             <p className="text-slate-400 text-sm">
//               Don't have an account?
//               <button className="text-emerald-400 hover:text-emerald-300 ml-1 transition-colors">
//                 Contact Administrator
//               </button>
//             </p>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="text-center mt-8">
//           <p className="text-slate-500 text-sm">
//             © 2025 Employee Management System. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { User, Lock, Building2, Eye, EyeOff } from "lucide-react";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const authData = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    if (!authData || (!authData.employees && !authData.admin)) {
      toast.error("Authentication data is still loading. Please try again.");
      return;
    }

    const normalizedEmail = email.toLowerCase();

    // Check Admin
    const admin = authData.admin?.find(
      (a) => a.email.toLowerCase() === normalizedEmail && a.password === password
    );
    if (admin) {
      const adminUser = { role: "admin", email: admin.email };
      localStorage.setItem('loggedInUser', JSON.stringify(adminUser));
      toast.success("Welcome Admin!");
      navigate("/admin");
      return;
    }

    // Check Employee
    const employee = authData.employees?.find(
      (e) => e.email.toLowerCase() === normalizedEmail && a.password === password
    );
    if (employee) {
      const employeeUser = { role: "employee", email: employee.email };
      localStorage.setItem('loggedInUser', JSON.stringify(employeeUser));
      toast.success("Welcome Employee!");
      navigate("/employee");
      return;
    }

    toast.error("Invalid Credentials");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await handleLogin(email, password);
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mb-4 shadow-lg">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-slate-300">
            Sign in to Employee Management System
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
          <div className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-200 block">
                Email Address
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && submitHandler(e)}
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-200 block">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && submitHandler(e)}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-emerald-600 bg-transparent border-white/20 rounded focus:ring-emerald-500 focus:ring-2 mr-2"
                  disabled={isLoading}
                />
                <span>Remember me</span>
              </div>
              <button
                type="button"
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
                disabled={isLoading}
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              onClick={submitHandler}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Signing in...
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-slate-400 text-sm">
              Don't have an account?
              <button className="text-emerald-400 hover:text-emerald-300 ml-1 transition-colors" disabled={isLoading}>
                Contact Administrator
              </button>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-slate-500 text-sm">
            © 2025 Employee Management System. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;