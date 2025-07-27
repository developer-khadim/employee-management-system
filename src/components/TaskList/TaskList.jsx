import React from "react";

const TaskList = () => {
  return (
    <div id="task-list" className="mt-10 py-5 w-full flex items-center justify-start gap-5 flex-nowrap h-[55%] overflow-x-auto ">
      <div className="h-full w-[400px] flex-shrink-0 p-5 bg-red-400 rounded-xl">
        <div className="flex items-center justify-between" >
            <h2 className="text-sm bg-red-600 text-white px-2 py-1 rounded " >High</h2>
            <span className="text-sm" >7-Jun-2025</span>
        </div>
        <h2 className="text-2xl font-medium mt-5 " >Create a clone of this page</h2>
        <p className="text-sm mt-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, labore dolores quae fuga quas voluptas.</p> 
      </div>
      <div className="h-full w-[400px] flex-shrink-0 p-5 bg-blue-400 rounded-xl">
        <div className="flex items-center justify-between" >
            <h2 className="text-sm bg-red-600 text-white px-2 py-1 rounded " >High</h2>
            <span className="text-sm" >7-Jun-2025</span>
        </div>
        <h2 className="text-2xl font-medium mt-5 " >Create a clone of this page</h2>
        <p className="text-sm mt-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, labore dolores quae fuga quas voluptas.</p> 
      </div>
      <div className="h-full w-[400px] flex-shrink-0 p-5 bg-green-400 rounded-xl">
        <div className="flex items-center justify-between" >
            <h2 className="text-sm bg-red-600 text-white px-2 py-1 rounded " >High</h2>
            <span className="text-sm" >7-Jun-2025</span>
        </div>
        <h2 className="text-2xl font-medium mt-5 " >Create a clone of this page</h2>
        <p className="text-sm mt-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, labore dolores quae fuga quas voluptas.</p> 
      </div>
      <div className="h-full w-[400px] flex-shrink-0 p-5 bg-yellow-400 rounded-xl">
        <div className="flex items-center justify-between" >
            <h2 className="text-sm bg-red-600 text-white px-2 py-1 rounded " >High</h2>
            <span className="text-sm" >7-Jun-2025</span>
        </div>
        <h2 className="text-2xl font-medium mt-5 " >Create a clone of this page</h2>
        <p className="text-sm mt-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, labore dolores quae fuga quas voluptas.</p> 
      </div>
    </div>
  );
};

export default TaskList;
