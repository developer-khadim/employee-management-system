import React from "react";

const CreateTaskForm = () => {
  return (
    <div className="p-5 bg-[#2c2c2c] my-8 rounded-lg shadow-md w-full mx-auto">
      <form className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 w-full">
        <div className="w-1/2">
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-emerald-500 dark:text-gray-200 mb-1"
              htmlFor="task-title"
            >
              Task Title
            </label>
            <input
              id="task-title"
              className="text-sm py-2 px-3 w-full rounded border border-emerald-500 dark:border-gray-600 bg-transparent dark:bg-[#23272f] text-white dark:text-gray-100 focus:ring-2 focus:ring-emerald-400 focus:outline-none transition"
              type="text"
              placeholder="Enter Task Title"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-emerald-500 dark:text-gray-200 mb-1"
              htmlFor="due-date"
            >
              Due Date
            </label>
            <input
              id="due-date"
              className="text-sm py-2 px-3 w-full rounded border border-emerald-300  bg-[#2c2c2c] dark:bg-[#23272f] text-gray-400 dark:text-gray-100 focus:ring-2 focus:ring-emerald-400 focus:outline-none transition"
              type="date"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-emerald-500 dark:text-gray-200 mb-1"
              htmlFor="assign-to"
            >
              Assign To
            </label>
            <input
              id="assign-to"
              className="text-sm py-2 px-3 w-full rounded border bg-transparent border-emerald-300 dark:border-gray-600  text-white dark:text-gray-100 focus:ring-2 focus:ring-emerald-400 focus:outline-none transition"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-emerald-500 mb-1"
              htmlFor="category"
            >
              Category
            </label>
            <select
              id="category"
              className="text-sm py-2 px-3 w-full rounded border border-emerald-300 dark:border-gray-600 bg-[#2c2c2c] text-white  dark:text-gray-100 focus:ring-2 focus:ring-emerald-400 focus:outline-none transition"
            >
              <option value="">Select a category</option>
              <option value="design">Design</option>
              <option value="development">Development</option>
              <option value="marketing">Marketing</option>
              <option value="research">Research</option>
              <option value="testing">Testing</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start justify-center ">
          <label
            className="block text-sm font-medium text-emerald-500 dark:text-gray-200 mb-1"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            className="w-full h-[195px] text-sm py-2 px-3 rounded border border-emerald-300 dark:border-gray-600 bg-[#2c2c2c] dark:bg-[#23272f] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-emerald-400 focus:outline-none transition resize-none mb-4"
            placeholder="Enter Task Description"
            rows="8"
          ></textarea>

          <button
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-6 rounded shadow transition w-full focus:outline-none focus:ring-2 focus:ring-emerald-400 mt-2"
            type="submit"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTaskForm;
