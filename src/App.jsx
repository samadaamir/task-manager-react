import { useState } from "react"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"


const App = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks([...tasks, task])
  }
  return (
    <div className="bg-gray-300 flex justify-center items-center h-screen w-full">
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App