import { employees, admin } from "./emp";

// Save data to localStorage
export const SetLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

// // Retrieve data from localStorage
export const GetLocalStorage = () => {
  const employeesData = JSON.parse(localStorage.getItem("employees"));
  const adminData = JSON.parse(localStorage.getItem("admin"));
   
  return { employees: employeesData, admin: adminData };
};


export default SetLocalStorage;