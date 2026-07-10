import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    if (task.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    addTask(task);

    setTask("");
  };

  return (
    <div className="bg-[#8EA8E5] rounded-3xl shadow-xl p-8 h-fit">

      <h2 className="text-3xl font-bold text-[#3E558F] mb-2">
        Add New Task
      </h2>

      <p className="text-[#3E558F]/80 mb-8">
        Organize your work efficiently.
      </p>

      <div className="flex flex-col gap-5">

        {/* Task Input */}

        <div>
          <label className="block text-[#3E558F] font-semibold mb-2">
            Task Name
          </label>

          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="
              w-full
              rounded-xl
              border-2
              border-[#C7D2F3]
              bg-white
              p-3
              outline-none
              focus:border-[#3E558F]
              transition
            "
          />
        </div>

        {/* Add Button */}

        <button
          onClick={handleSubmit}
          className="
            mt-4
            bg-[#3E558F]
            text-white
            py-3
            rounded-xl
            font-semibold
            text-lg
            hover:bg-[#30457A]
            transition
            duration-300
            cursor-pointer
          "
        >
          + Add Task
        </button>

      </div>

      {/* Bottom Card */}

      <div className="mt-10 bg-[#C7D2F3] rounded-2xl p-5">

        <h3 className="text-[#3E558F] font-bold text-lg">
          💡 Productivity Tip
        </h3>

        <p className="text-[#3E558F] mt-2 text-sm leading-6">
          Break large tasks into smaller achievable goals.
          Completing small tasks consistently increases productivity.
        </p>

      </div>

    </div>
  );
};

export default TaskForm