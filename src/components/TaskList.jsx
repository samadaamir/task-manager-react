const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className="mt-6">

      <h2 className="text-xl font-bold mb-3">
        Your Tasks
      </h2>

      {tasks.length === 0 ? (
        <p className="text-gray-500">
          No tasks yet.
        </p>
      ) : (
        <ul className="space-y-2">

          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
            >
              <span>{task}</span>

              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}

        </ul>
      )}

    </div>
  );
};

export default TaskList;