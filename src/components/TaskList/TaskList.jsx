// import React from "react";

// const TaskList = () => {
//   return (
//     <div id="task-list" className="mt-10 py-5 w-full flex items-center justify-start gap-5 flex-nowrap h-[55%] overflow-x-auto ">
//       <div className="h-full w-[400px] flex-shrink-0 p-5 bg-red-400 rounded-xl">
//         <div className="flex items-center justify-between" >
//             <h2 className="text-sm bg-red-600 text-white px-2 py-1 rounded " >High</h2>
//             <span className="text-sm" >7-Jun-2025</span>
//         </div>
//         <h2 className="text-2xl font-medium mt-5 " >Create a clone of this page</h2>
//         <p className="text-sm mt-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, labore dolores quae fuga quas voluptas.</p> 
//       </div>
//       <div className="h-full w-[400px] flex-shrink-0 p-5 bg-blue-400 rounded-xl">
//         <div className="flex items-center justify-between" >
//             <h2 className="text-sm bg-red-600 text-white px-2 py-1 rounded " >High</h2>
//             <span className="text-sm" >7-Jun-2025</span>
//         </div>
//         <h2 className="text-2xl font-medium mt-5 " >Create a clone of this page</h2>
//         <p className="text-sm mt-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, labore dolores quae fuga quas voluptas.</p> 
//       </div>
//       <div className="h-full w-[400px] flex-shrink-0 p-5 bg-green-400 rounded-xl">
//         <div className="flex items-center justify-between" >
//             <h2 className="text-sm bg-red-600 text-white px-2 py-1 rounded " >High</h2>
//             <span className="text-sm" >7-Jun-2025</span>
//         </div>
//         <h2 className="text-2xl font-medium mt-5 " >Create a clone of this page</h2>
//         <p className="text-sm mt-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, labore dolores quae fuga quas voluptas.</p> 
//       </div>
//       <div className="h-full w-[400px] flex-shrink-0 p-5 bg-yellow-400 rounded-xl">
//         <div className="flex items-center justify-between" >
//             <h2 className="text-sm bg-red-600 text-white px-2 py-1 rounded " >High</h2>
//             <span className="text-sm" >7-Jun-2025</span>
//         </div>
//         <h2 className="text-2xl font-medium mt-5 " >Create a clone of this page</h2>
//         <p className="text-sm mt-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, labore dolores quae fuga quas voluptas.</p> 
//       </div>
//     </div>
//   );
// };

// export default TaskList;


import React, { useState, useEffect } from "react";
import { GetLocalStorage } from "../../utils/localStorage";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks for the logged-in employee
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser && loggedInUser.role === "employee") {
      const localData = GetLocalStorage();
      const employee = localData?.employees?.find(
        (e) => e.email === loggedInUser.email
      );
      if (employee?.tasks) {
        setTasks(employee.tasks);
      }
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
      id="task-list"
    >
      <h2 className="text-xl font-semibold text-emerald-400 mb-4">Your Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-400 text-center">No tasks assigned</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-white">
            <thead>
              <tr className="border-b border-gray-600">
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

export default TaskList;