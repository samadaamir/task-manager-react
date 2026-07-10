const TaskList = ({
  tasks,
  deleteTask,
  toggleComplete
}) => {

  return (

    <div className="mt-6">

      <h2 className="text-xl font-bold mb-4">

        Your Tasks

      </h2>

      {

        tasks.length === 0 ?

          (

            <p className="text-gray-500">

              No Tasks Yet.

            </p>

          )

          :

          (

            <ul className="space-y-3">

              {

                tasks.map((task) => (

                  <li
                    key={task.id}
                    className={`flex justify-between items-center p-3 rounded-lg ${
                      task.completed
                        ? "bg-green-100"
                        : "bg-gray-100"
                    }`}
                  >

                    <span
                      className={`${
                        task.completed
                          ? "line-through text-gray-500"
                          : ""
                      }`}
                    >
                      {task.text}
                    </span>

                    <div className="flex gap-2">

                      <button
                        onClick={() => toggleComplete(task.id)}
                        className={`px-3 py-1 rounded text-white ${
                          task.completed
                            ? "bg-yellow-500"
                            : "bg-green-600"
                        }`}
                      >
                        {task.completed ? "Undo" : "Complete"}
                      </button>

                      <button
                        onClick={() => deleteTask(task.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>

                    </div>

                  </li>

                ))

              }

            </ul>

          )

      }

    </div>

  );

};

export default TaskList;