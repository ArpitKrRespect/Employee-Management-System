const TaskList = () => {
  return (
    <div className="flex mt-5 w-full gap-6 justify-between flex-wrap">
      <div className="flex-1 min-w-[200px] rounded-xl py-6 px-8 bg-red-800 text-white shadow-lg transition-transform transform hover:scale-105">
        <h2 className="text-4xl font-bold">2</h2>
        <h3 className="text-xl font-medium">New Tasks</h3>
      </div>
      <div className="flex-1 min-w-[200px] rounded-xl py-6 px-8 bg-blue-600 text-white shadow-lg transition-transform transform hover:scale-105">
        <h2 className="text-4xl font-bold">3</h2>
        <h3 className="text-xl font-medium">In Progress</h3>
      </div>
      <div className="flex-1 min-w-[200px] rounded-xl py-6 px-8 bg-purple-700 text-white shadow-lg transition-transform transform hover:scale-105">
        <h2 className="text-4xl font-bold">4</h2>
        <h3 className="text-xl font-medium">Completed</h3>
      </div>
      <div className="flex-1 min-w-[200px] rounded-xl py-6 px-8 bg-cyan-700 text-white shadow-lg transition-transform transform hover:scale-105">
        <h2 className="text-4xl font-bold">1</h2>
        <h3 className="text-xl font-medium">Overdue</h3>
      </div>
    </div>
  );
};

export default TaskList;
