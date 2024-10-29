const CreateTask = () => {
  return (
    <div className="mt-8 p-6 bg-opacity-80 bg-gray-800 rounded-xl shadow-2xl backdrop-blur-md max-w-lg mx-auto lg:mx-0 lg:w-1/3">
      <form className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600">
          Task List
        </h3>
        <input
          type="text"
          placeholder="Make a Component"
          className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
        />
        <h3 className="text-lg font-semibold text-gray-300">Description</h3>
        <textarea
          cols="30"
          rows="5"
          placeholder="Task details..."
          className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        ></textarea>
        <h3 className="text-lg font-semibold text-gray-300">Date</h3>
        <input
          type="date"
          className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
        />
        <h3 className="text-lg font-semibold text-gray-300">Assign To:</h3>
        <input
          type="text"
          placeholder="Employee Name"
          className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200"
        />
        <h3 className="text-lg font-semibold text-gray-300">Category</h3>
        <input
          type="text"
          placeholder="Design, Develop"
          className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
        />
        <button className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
