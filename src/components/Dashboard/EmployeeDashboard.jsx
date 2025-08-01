// import React from 'react'
// import Header from '../others/Header'
// import TaskListNumbers from '../others/TaskListNumbers'
// import TaskList from '../TaskList/TaskList'

// const EmployeeDashboard = () => {
//   return (
//    <div className='bg-[#1c1c1c] h-screen p-10'>
//     <Header/>
//     <TaskListNumbers/>
//     <TaskList/>
//    </div>
//   )
// }

// export default EmployeeDashboard

import React from 'react';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = () => {
  return (
    <div className='bg-[#1c1c1c] h-screen p-10'>
      <Header />
      <TaskListNumbers />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;