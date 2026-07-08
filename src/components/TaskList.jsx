const TaskList = ({ tasks }) => {
    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">
                Your Tasks
            </h2>

            {tasks.length === 0 ? (
                <p className="text-gray-500">
                    No tasks yet.
                </p>
            ) : (
                <ul className="space-y-2">
                    {tasks.map((task, index) => (
                        <li key={index}
                            className="bg-gray-100 p-3 rounded-lg">
                            {task}
                        </li>
                    )
                    )}
                </ul>
            )}
        </div>
    );
};

export default TaskList;
