const Header = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-900 text-white p-6 md:p-8 flex items-center justify-between shadow-2xl rounded-b-lg backdrop-blur-lg bg-opacity-80">
      <div>
        <h1 className="text-xl md:text-2xl font-extrabold animate-text-gradient mb-1">
          Hello 👋
        </h1>
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600 animate-text-flash">
          Arpit
        </h2>
      </div>
      <div className="flex items-center">
        <button className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-red-600/50 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:scale-105">
          Log out
        </button>
      </div>
    </nav>
  );
};

export default Header;
