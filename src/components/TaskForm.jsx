import { useState } from "react"

const TaskForm = () => {

  const [task, setTask] = useState("")

  const handleChange = (e) => {
    setTask(e.target.value)
  }
  const handleClick = ()=>{
    if (task.trim() === ""){
      alert("Please Enter Your Task..");
      return;
    }
      console.log(task)
      setTask("")
    
  }
  return (
    <div className='bg-white border rounded-2xl flex flex-col items-center gap-3 p-3 w-60 '>
      <h1 className='text-3xl font-bold text-black'>Task Manager</h1>
      <input
        className="border rounded w-full "
        type="text" placeholder='Enter Task'
        value={task}
        onChange={handleChange}
      />
      <button 
      className='bg-amber-200 font-bold border px-5 py-1.5 rounded-xl max-w-30 hover:bg-amber-300 transition'
      onClick={handleClick}
      >Add task</button>
       <p className="text-gray-600">
        Current Task: <span className="font-semibold">{task}</span>
      </p>
    </div>
    
  )

}
export default TaskForm