import { useState } from "react";

const TaskForm = ({ addTask }) => {

  const [task, setTask] = useState("");

  const handleClick = () => {

    if (task.trim() === "") {
      alert("Please Enter a Task");
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
        value={task}
        placeholder="Enter Task"
        onChange={(e) => setTask(e.target.value)}
        className="border rounded-lg p-2"
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