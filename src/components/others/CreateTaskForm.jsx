// import React from "react";

// const CreateTaskForm = () => {
//   return (
//     <div className="p-5 bg-[#2c2c2c] my-8 rounded-lg shadow-md w-full mx-auto">
//       <form className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 w-full">
//         <div className="w-1/2">
//           <div className="mb-4">
//             <label
//               className="block text-sm font-medium text-emerald-500 mb-1"
//               htmlFor="task-title"
//             >
//               Task Title
//             </label>
//             <input
//               id="task-title"
//               className="text-sm py-2 px-3 w-full rounded border border-gray-500 bg-transparent text-white focus:ring-2 focus:ring-emerald-400 focus:outline-none transition"
//               type="text"
//               placeholder="Enter Task Title"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-sm font-medium text-emerald-500 mb-1"
//               htmlFor="due-date"
//             >
//               Due Date
//             </label>
//             <input
//               id="due-date"
//               className="text-sm py-2 px-3 w-full rounded border border-gray-500 bg-transparent text-gray-400 focus:ring-2 focus:border-none focus:ring-emerald-400 focus:outline-none transition"
//               type="date"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-sm font-medium text-emerald-500 mb-1"
//               htmlFor="assign-to"
//             >
//               Assign To
//             </label>
//             <input
//               id="assign-to"
//               className="text-sm py-2 px-3 w-full rounded border bg-transparent border-gray-500 text-white focus:ring-2 focus:ring-emerald-400 focus:outline-none transition"
//               type="text"
//               placeholder="Employee name"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-sm font-medium text-emerald-500 mb-1"
//               htmlFor="category"
//             >
//               Category
//             </label>
//             <select
//               id="category"
//               className="text-sm py-2 px-3 w-full rounded border border-gray-500 bg-[#2c2c2c] text-white focus:ring-2 focus:ring-emerald-400 focus:outline-none transition"
//             >
//               <option value="">Select a category</option>
//               <option value="design">Design</option>
//               <option value="development">Development</option>
//               <option value="marketing">Marketing</option>
//               <option value="research">Research</option>
//               <option value="testing">Testing</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
//         </div>

//         <div className="w-2/5 flex flex-col items-start justify-center ">
//           <label
//             className="block text-sm font-medium text-emerald-500 mb-1"
//             htmlFor="description"
//           >
//             Description
//           </label>
//           <textarea
//             id="description"
//             className="w-full h-[195px] text-sm py-2 px-3 rounded border border-gray-500 bg-transparent text-gray-100 focus:ring-2 focus:ring-emerald-400 focus:outline-none transition resize-none mb-4"
//             placeholder="Enter Task Description"
//             rows="8"
//           ></textarea>

//           <button
//             className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-6 rounded shadow transition w-full focus:outline-none focus:ring-2 focus:ring-emerald-400 mt-2"
//             type="submit"
//           >
//             Create Task
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateTaskForm;


import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { GetLocalStorage } from "../../utils/localStorage";

const CreateTaskForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    dueDate: "",
    assignTo: "",
    category: "",
    description: "",
  });
  const [employees, setEmployees] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch employees from localStorage on mount
  useEffect(() => {
    const localData = GetLocalStorage();
    if (localData?.employees) {
      setEmployees(localData.employees);
    }
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { title, dueDate, assignTo, category, description } = formData;

    // Validate inputs
    if (!title || !dueDate || !assignTo || !category || !description) {
      toast.error("Please fill out all fields");
      setIsSubmitting(false);
      return;
    }

    try {
      // Find the selected employee
      const localData = GetLocalStorage();
      const employee = localData.employees.find((emp) => emp.name === assignTo);

      if (!employee) {
        toast.error("Selected employee not found");
        setIsSubmitting(false);
        return;
      }

      // Create new task
      const newTask = {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title,
        description,
        date: dueDate,
        category,
      };

      // Update employee's tasks
      const updatedEmployees = localData.employees.map((emp) =>
        emp.name === assignTo
          ? { ...emp, tasks: [...emp.tasks, newTask] }
          : emp
      );

      // Save to localStorage
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));

      // Notify success
      toast.success(`Task "${title}" assigned to ${assignTo}`);

      // Reset form
      setFormData({
        title: "",
        dueDate: "",
        assignTo: "",
        category: "",
        description: "",
      });
    } catch (error) {
      console.error("Error creating task:", error);
      toast.error("Failed to create task");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 bg-[#2c2c2c] my-8 rounded-xl shadow-lg w-full mx-auto max-w-4xl">
      <h2 className="text-xl font-semibold text-emerald-400 mb-6">
        Create New Task
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 w-full"
      >
        <div className="w-full lg:w-1/2 space-y-4">
          {/* Task Title */}
          <div>
            <label
              htmlFor="task-title"
              className="block text-sm font-medium text-emerald-400 mb-1"
            >
              Task Title
            </label>
            <input
              id="task-title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm text-white bg-[#3c3c3c] border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
              type="text"
              placeholder="Enter Task Title"
              disabled={isSubmitting}
            />
          </div>

          {/* Due Date */}
          <div>
            <label
              htmlFor="due-date"
              className="block text-sm font-medium text-emerald-400 mb-1"
            >
              Due Date
            </label>
            <input
              id="due-date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm text-white bg-[#3c3c3c] border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
              type="date"
              disabled={isSubmitting}
            />
          </div>

          {/* Assign To */}
          <div>
            <label
              htmlFor="assign-to"
              className="block text-sm font-medium text-emerald-400 mb-1"
            >
              Assign To
            </label>
            <select
              id="assign-to"
              name="assignTo"
              value={formData.assignTo}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm text-white bg-[#3c3c3c] border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
              disabled={isSubmitting}
            >
              <option value="">Select an employee</option>
              {employees.map((emp) => (
                <option key={emp.id} value={emp.name}>
                  {emp.name}
                </option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-emerald-400 mb-1"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm text-white bg-[#3c3c3c] border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
              disabled={isSubmitting}
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

        <div className="w-full lg:w-2/5 flex flex-col">
          {/* Description */}
          <label
            htmlFor="description"
            className="block text-sm font-medium text-emerald-400 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full h-48 text-sm px-4 py-2 text-white bg-[#3c3c3c] border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition resize-none"
            placeholder="Enter Task Description"
            disabled={isSubmitting}
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className={`mt-6 w-full py-3 px-6 text-white font-semibold rounded-lg shadow transition focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
              isSubmitting
                ? "bg-emerald-600/50 cursor-not-allowed"
                : "bg-emerald-500 hover:bg-emerald-600"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                Creating Task...
              </div>
            ) : (
              "Create Task"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTaskForm;