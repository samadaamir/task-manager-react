import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {

  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = (taskText) => {

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    };

    setTasks([...tasks, newTask]);

  };

  // Delete Task
  const deleteTask = (id) => {

    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);

  };

  // Toggle Complete
  const toggleComplete = (id) => {

    const updatedTasks = tasks.map((task) => {

      if (task.id === id) {

        return {
          ...task,
          completed: !task.completed
        };

      }

      return task;

    });

    setTasks(updatedTasks);

  };

  return (

    <div className="min-h-screen bg-gray-200 flex justify-center items-center">

      <div className="bg-white p-6 rounded-xl shadow-lg w-[420px]">

        <TaskForm addTask={addTask} />

        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />

      </div>

    </div>

  );

};

export default App;