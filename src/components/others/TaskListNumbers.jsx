// import React from 'react'

// const TaskListNumbers = () => {
//   return (
//     <div className='flex mt-10 justify-between gap-5 screen ' >
//       <div className='w-[42%] py-6 px-9 bg-red-400 rounded-lg ' >
//         <h2 className='text-3xl font-semibold' >0</h2>
//         <h3 className='text-xl font-medium' >New Task</h3>
//       </div>
//       <div className='w-[42%] py-6 px-9 bg-blue-400 rounded-lg ' >
//         <h2 className='text-3xl font-semibold' >0</h2>
//         <h3 className='text-xl font-medium' >New Task</h3>
//       </div>
//       <div className='w-[42%] py-6 px-9 bg-green-400 rounded-lg ' >
//         <h2 className='text-3xl font-semibold' >0</h2>
//         <h3 className='text-xl font-medium' >New Task</h3>
//       </div>
//       <div className='w-[42%] py-6 px-9 bg-yellow-400 rounded-lg ' >
//         <h2 className='text-3xl font-semibold' >0</h2>
//         <h3 className='text-xl font-medium' >New Task</h3>
//       </div>
//     </div>
//   )
// }

// export default TaskListNumbers

import React, { useState, useEffect } from "react";
import { GetLocalStorage } from "../../utils/localStorage";

const TaskListNumbers = () => {
  const [taskCounts, setTaskCounts] = useState({
    newTask: 0,
    active: 0,
    completed: 0,
    failed: 0,
  });

  // Fetch task counts for logged-in employee
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser && loggedInUser.role === "employee") {
      const localData = GetLocalStorage();
      const employee = localData?.employees?.find(
        (e) => e.email === loggedInUser.email
      );
      if (employee?.tasks) {
        const counts = employee.tasks.reduce(
          (acc, task) => {
            if (task.newTask) acc.newTask++;
            if (task.active) acc.active++;
            if (task.completed) acc.completed++;
            if (task.failed) acc.failed++;
            return acc;
          },
          { newTask: 0, active: 0, completed: 0, failed: 0 }
        );
        setTaskCounts(counts);
      }
    }
  }, []);

  return (
    <div className="flex flex-wrap mt-10 justify-between gap-4">
      <div className="flex-1 min-w-[150px] py-6 px-6 bg-red-500 rounded-lg text-center">
        <h2 className="text-3xl font-semibold text-white">{taskCounts.newTask}</h2>
        <h3 className="text-lg font-medium text-white">New Tasks</h3>
      </div>
      <div className="flex-1 min-w-[150px] py-6 px-6 bg-blue-500 rounded-lg text-center">
        <h2 className="text-3xl font-semibold text-white">{taskCounts.active}</h2>
        <h3 className="text-lg font-medium text-white">Active Tasks</h3>
      </div>
      <div className="flex-1 min-w-[150px] py-6 px-6 bg-green-500 rounded-lg text-center">
        <h2 className="text-3xl font-semibold text-white">
          {taskCounts.completed}
        </h2>
        <h3 className="text-lg font-medium text-white">Completed Tasks</h3>
      </div>
      <div className="flex-1 min-w-[150px] py-6 px-6 bg-yellow-500 rounded-lg text-center">
        <h2 className="text-3xl font-semibold text-white">{taskCounts.failed}</h2>
        <h3 className="text-lg font-medium text-white">Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;