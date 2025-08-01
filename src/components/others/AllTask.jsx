// import React from 'react'

// const AllTask = () => {
//   return (
//    <div className='bg-[#2c2c2c] h-96 mt-5 p-5 overflow-auto ' id='All-tasks' >
//     <div className='bg-red-300  rounded py-2 mb-2 px-4 flex justify-between items-center ' >
//         <h2 className='text-white'  >Khadim Ali</h2>
//         <h1 className='text-white' >Develop clone of Facebook</h1>
//         <h5 className='text-white' >Status</h5>
//     </div>
//     <div className='bg-green-400  rounded py-2 mb-2 px-4 flex justify-between items-center ' >
//         <h2 className='text-white'  >Khadim Ali</h2>
//         <h1 className='text-white' >Develop clone of Facebook</h1>
//         <h5 className='text-white' >Status</h5>
//     </div>
//     <div className='bg-blue-400  rounded py-2 mb-2 px-4 flex justify-between items-center ' >
//         <h2 className='text-white'  >Khadim Ali</h2>
//         <h1 className='text-white' >Develop clone of Facebook</h1>
//         <h5 className='text-white' >Status</h5>
//     </div>
//     <div className='bg-yellow-400  rounded py-2 mb-2 px-4 flex justify-between items-center ' >
//         <h2 className='text-white'  >Khadim Ali</h2>
//         <h1 className='text-white' >Develop clone of Facebook</h1>
//         <h5 className='text-white' >Status</h5>
//     </div>
//     <div className='bg-cyan-400  rounded py-2 mb-2 px-4 flex justify-between items-center ' >
//         <h2 className='text-white'  >Khadim Ali</h2>
//         <h1 className='text-white' >Develop clone of Facebook</h1>
//         <h5 className='text-white' >Status</h5>
//     </div>
//     <div className='bg-red-400  rounded py-2 mb-2 px-4 flex justify-between items-center ' >
//         <h2 className='text-white'  >Khadim Ali</h2>
//         <h1 className='text-white' >Develop clone of Facebook</h1>
//         <h5 className='text-white' >Status</h5>
//     </div>
//     <div className='bg-green-400  rounded py-2 mb-2 px-4 flex justify-between items-center ' >
//         <h2 className='text-white'  >Khadim Ali</h2>
//         <h1 className='text-white' >Develop clone of Facebook</h1>
//         <h5 className='text-white' >Status</h5>
//     </div>
//     <div className='bg-yellow-400  rounded py-2 mb-2 px-4 flex justify-between items-center ' >
//         <h2 className='text-white'  >Khadim Ali</h2>
//         <h1 className='text-white' >Develop clone of Facebook</h1>
//         <h5 className='text-white' >Status</h5>
//     </div>
//     <div className='bg-blue-400  rounded py-2 mb-2 px-4 flex justify-between items-center ' >
//         <h2 className='text-white'  >Khadim Ali</h2>
//         <h1 className='text-white' >Develop clone of Facebook</h1>
//         <h5 className='text-white' >Status</h5>
//     </div>
//     <div className='bg-red-400  rounded py-2 mb-2 px-4 flex justify-between items-center ' >
//         <h2 className='text-white'  >Khadim Ali</h2>
//         <h1 className='text-white' >Develop clone of Facebook</h1>
//         <h5 className='text-white' >Status</h5>
//     </div>
//    </div>
//   )
// }

// export default AllTask

import React, { useState, useEffect } from "react";
import { GetLocalStorage } from "../../utils/localStorage";

const AllTask = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch all tasks from employees in localStorage
  useEffect(() => {
    const localData = GetLocalStorage();
    if (localData?.employees) {
      const allTasks = localData.employees.flatMap((emp) =>
        emp.tasks.map((task) => ({
          ...task,
          employeeName: emp.name,
          employeeEmail: emp.email,
        }))
      );
      setTasks(allTasks);
    }
  }, []);

  // Determine status color
  const getStatusColor = (task) => {
    if (task.completed) return "bg-green-500";
    if (task.failed) return "bg-red-500";
    if (task.active) return "bg-blue-500";
    return "bg-yellow-500"; // New task or other
  };

  return (
    <div
      className="bg-[#2c2c2c] mt-5 p-6 rounded-xl shadow-lg w-full max-w-4xl mx-auto overflow-auto h-96"
      id="All-tasks"
    >
      <h2 className="text-xl font-semibold text-emerald-400 mb-4">All Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-400 text-center">No tasks available</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-white">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="py-2 px-4">Employee</th>
                <th className="py-2 px-4">Task Title</th>
                <th className="py-2 px-4">Category</th>
                <th className="py-2 px-4">Due Date</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-700 hover:bg-[#3c3c3c]"
                >
                  <td className="py-2 px-4">{task.employeeName}</td>
                  <td className="py-2 px-4">{task.title}</td>
                  <td className="py-2 px-4 capitalize">{task.category}</td>
                  <td className="py-2 px-4">{task.date}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(
                        task
                      )}`}
                    >
                      {task.completed
                        ? "Completed"
                        : task.failed
                        ? "Failed"
                        : task.active
                        ? "Active"
                        : "New"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllTask;