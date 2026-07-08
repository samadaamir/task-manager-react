import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    if (task.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    addTask(task);

    setTask("");
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold text-center">
        Task Manager
      </h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={handleChange}
        className="border p-2 rounded-lg"
      />

      <button
        onClick={handleClick}
        className="bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;