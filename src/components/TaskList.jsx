import { useState } from "react";
import {
  Pencil,
  Trash2,
  CheckCircle,
  RotateCcw,
  Save
} from "lucide-react";

const TaskList = ({
  tasks,
  deleteTask,
  toggleComplete,
  editTask,
}) => {

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };

  const saveEdit = (id) => {

    if (editText.trim() === "") {
      alert("Task cannot be empty");
      return;
    }

    editTask(id, editText);
    setEditingId(null);
    setEditText("");

  };

  return (

    <div className="bg-[#8EA8E5] rounded-3xl shadow-xl p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl font-bold text-[#3E558F]">
          My Tasks
        </h2>

        <span className="bg-[#3E558F] text-white px-4 py-2 rounded-xl font-semibold">
          {tasks.length} Tasks
        </span>

      </div>

      {

        tasks.length === 0 ?

          (

            <div className="bg-white rounded-2xl p-10 text-center">

              <h2 className="text-2xl font-bold text-[#3E558F]">

                No Tasks Found

              </h2>

              <p className="text-gray-500 mt-2">

                Start by adding your first task.

              </p>

            </div>

          )

          :

          (

            <div className="space-y-5">

              {

                tasks.map((task) => (

                  <div
                    key={task.id}
                    className={`

                    rounded-2xl
                    p-5
                    shadow-lg
                    transition
                    hover:scale-[1.02]

                    ${task.completed
                        ? "bg-green-100"
                        : "bg-white"}

                    `}
                  >

                    <div className="flex justify-between items-center">

                      {/* Left */}

                      <div className="flex-1">

                        {

                          editingId === task.id ?

                            (

                              <input

                                value={editText}

                                onChange={(e) =>
                                  setEditText(e.target.value)
                                }

                                className="border-2 border-[#3E558F] rounded-xl p-2 w-full outline-none"

                              />

                            )

                            :

                            (

                              <>

                                <h3
                                  className={`

                                  text-xl
                                  font-semibold

                                  ${task.completed
                                      ? "line-through text-gray-500"
                                      : "text-[#3E558F]"}

                                  `}
                                >

                                  {task.text}

                                </h3>

                                <p className="text-sm text-gray-500 mt-2">

                                  {task.completed
                                    ? "Completed"
                                    : "Pending"}

                                </p>

                              </>

                            )

                        }

                      </div>

                      {/* Right */}

                      <div className="flex gap-3 ml-6">

                        {

                          editingId === task.id ?

                            (

                              <button

                                onClick={() => saveEdit(task.id)}

                                className="bg-[#3E558F] text-white p-3 rounded-xl hover:scale-105 transition"

                              >

                                <Save size={18} />

                              </button>

                            )

                            :

                            (

                              <button

                                onClick={() => handleEdit(task)}

                                className="bg-yellow-400 p-3 rounded-xl hover:scale-105 transition"

                              >

                                <Pencil size={18} />

                              </button>

                            )

                        }

                        <button

                          onClick={() =>
                            toggleComplete(task.id)
                          }

                          className={`

                          p-3
                          rounded-xl
                          text-white
                          transition
                          hover:scale-105

                          ${task.completed
                              ? "bg-orange-500"
                              : "bg-green-600"}

                          `}

                        >

                          {

                            task.completed

                              ?

                              <RotateCcw size={18} />

                              :

                              <CheckCircle size={18} />

                          }

                        </button>

                        <button

                          onClick={() =>
                            deleteTask(task.id)
                          }

                          className="bg-red-500 text-white p-3 rounded-xl hover:scale-105 transition"

                        >

                          <Trash2 size={18} />

                        </button>

                      </div>

                    </div>

                  </div>

                ))

              }

            </div>

          )

      }

    </div>

  )

}

export default TaskList