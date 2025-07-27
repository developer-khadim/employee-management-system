import React from "react";
import Header from "../others/Header";
import CreateTaskForm from "../others/CreateTaskForm";

const AdminDashboard = () => {
  return (
    <div className="h-screen bg-[#1c1c1c] p-10">
      <Header />
     <CreateTaskForm/>
    </div>
  );
};

export default AdminDashboard;
