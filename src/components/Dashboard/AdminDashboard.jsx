import AllTask from "../reusedcomponents/AllTask";
import CreateTask from "../reusedcomponents/CreateTask";
import Header from "../reusedcomponents/Header";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8">
      <Header />
      <div className="flex gap-8 mt-8">
        <AllTask />
        <CreateTask />
      </div>
    </div>
  );
};

export default AdminDashboard;
