import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";

const App = () => {
  // Load tasks from Local Storage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [search, setSearch] = useState("");

  // Save Tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Complete Task
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Edit Task
  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, text: newText }
          : task
      )
    );
  };

  // Search Tasks
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  return (
    <div className="min-h-screen bg-[#FAF7F2] px-10 py-8">

      {/* Heading */}
      <h1 className="text-5xl font-bold text-center text-[#3E558F] mb-10">
        Task Manager
      </h1>

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left */}
        <div>
          <TaskForm addTask={addTask} />
        </div>

        {/* Right */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          <SearchBar
            search={search}
            setSearch={setSearch}
            totalTasks={tasks.length}
            completedTasks={completedTasks}
            pendingTasks={pendingTasks}
          />

          <TaskList
            tasks={filteredTasks}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            editTask={editTask}
          />

        </div>

      </div>

    </div>
  );
};

export default App