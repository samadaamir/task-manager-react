import React from 'react'

const TaskForm = () => {
  return (
    <div className='bg-white border rounded-2xl flex flex-col items-center gap-3 p-3 w-60 '>
        <h1 className='text-3xl font-bold text-black'>Task Manager</h1>
        <input className="border rounded w-full " type="text" placeholder='Enter Task'/>
        <button className='bg-amber-200 font-bold border px-5 py-1.5 rounded-xl max-w-30 hover:bg-amber-300 transition'>Add task</button>
    </div>
  )
}

export default TaskForm