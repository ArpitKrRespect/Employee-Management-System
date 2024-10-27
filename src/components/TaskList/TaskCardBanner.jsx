
const TaskCardBanner = () => {
  return (
    <div
      id="tasklistcards"
      className="h-[200px] flex mt-10 w-full overflow-x-auto items-center justify-start gap-5 flex-nowrap p-4 rounded-lg shadow-lg bg-opacity-60 bg-gray-800"
    >
      {/* Task Card 1 */}
      <div className="flex-shrink-0 h-full w-[300px] bg-gradient-to-r from-red-500 to-red-900 rounded-xl p-4 flex flex-col justify-between shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <div className="flex justify-between items-center">
          <h2 className="bg-red-900 text-sm px-3 py-1 rounded-full text-white">High</h2>
          <h4 className="text-sm text-gray-300">20 Oct 2024</h4>
        </div>
        <h2 className="mt-3 text-xl font-semibold text-white">Make React Project</h2>
        <p className="text-gray-200 text-sm mt-1">
          Build an interactive UI using React components and hooks.
        </p>
      </div>

      {/* Task Card 2 */}
      <div className="flex-shrink-0 h-full w-[300px] bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl p-4 flex flex-col justify-between shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <div className="flex justify-between items-center">
          <h2 className="bg-blue-900 text-sm px-3 py-1 rounded-full text-white">Medium</h2>
          <h4 className="text-sm text-gray-300">22 Oct 2024</h4>
        </div>
        <h2 className="mt-3 text-xl font-semibold text-white">Design Landing Page</h2>
        <p className="text-gray-200 text-sm mt-1">
          Create a visually appealing landing page using Figma.
        </p>
      </div>

      {/* Task Card 3 */}
      <div className="flex-shrink-0 h-full w-[300px] bg-gradient-to-r from-green-400 to-green-600 rounded-xl p-4 flex flex-col justify-between shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <div className="flex justify-between items-center">
          <h2 className="bg-green-900 text-sm px-3 py-1 rounded-full text-white">Low</h2>
          <h4 className="text-sm text-gray-300">24 Oct 2024</h4>
        </div>
        <h2 className="mt-3 text-xl font-semibold text-white">API Integration</h2>
        <p className="text-gray-200 text-sm mt-1">
          Integrate third-party APIs to enhance app functionality.
        </p>
      </div>

      {/* Task Card 4 */}
      <div className="flex-shrink-0 h-full w-[300px] bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl p-4 flex flex-col justify-between shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <div className="flex justify-between items-center">
          <h2 className="bg-purple-900 text-sm px-3 py-1 rounded-full text-white">Medium</h2>
          <h4 className="text-sm text-gray-300">26 Oct 2024</h4>
        </div>
        <h2 className="mt-3 text-xl font-semibold text-white">Unit Testing</h2>
        <p className="text-gray-200 text-sm mt-1">
          Write unit tests to ensure code reliability and performance.
        </p>
      </div>

      {/* Task Card 5 */}
      <div className="flex-shrink-0 h-full w-[300px] bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl p-4 flex flex-col justify-between shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <div className="flex justify-between items-center">
          <h2 className="bg-yellow-900 text-sm px-3 py-1 rounded-full text-white">Low</h2>
          <h4 className="text-sm text-gray-300">28 Oct 2024</h4>
        </div>
        <h2 className="mt-3 text-xl font-semibold text-white">Code Review</h2>
        <p className="text-gray-200 text-sm mt-1">
          Review and refactor code for better performance.
        </p>
      </div>
    </div>
  );
};

export default TaskCardBanner;

