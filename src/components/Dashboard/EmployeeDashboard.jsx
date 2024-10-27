import Header from "../reusedcomponents/Header";
import TaskList from "../reusedcomponents/TaskList";
import TaskCardBanner from "../TaskList/TaskCardBanner";

const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8">
      <Header />

      <div className="mt-8 p-6 bg-opacity-80 bg-gray-800 rounded-xl shadow-2xl backdrop-blur-md">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-300 mt-2">Track progress</p>
        <TaskList />
      </div>

      <div className="mt-6">
        <TaskCardBanner />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
