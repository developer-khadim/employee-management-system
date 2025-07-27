import React from "react";
import Header from "../others/Header";
import CreateTaskForm from "../others/CreateTaskForm";
import AllTask from "../others/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen bg-[#1c1c1c] p-10">
      <Header />
     <CreateTaskForm/>
     <AllTask/>
    </div>
  );
};

export default AdminDashboard;
