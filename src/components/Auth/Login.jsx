import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log({ email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-gray-800 to-black">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>
        <form onSubmit={submitHandler} className="flex flex-col space-y-6">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-2 text-gray-300 outline-none bg-gray-700 placeholder:text-gray-500 
                       border-gray-600 py-4 px-6 text-xl rounded-full focus:border-blue-500 
                       focus:bg-gray-600 transition-all duration-300"
            type="email"
            placeholder="arpitkrofficial@gmail.com"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border-2 text-gray-300 outline-none bg-gray-700 placeholder:text-gray-500 
                       border-gray-600 py-4 px-6 text-xl rounded-full focus:border-blue-500 
                       focus:bg-gray-600 transition-all duration-300"
            type="password"
            placeholder="Enter Password"
          />
          <button className="bg-blue-600 hover:bg-blue-500 text-white py-4 px-6 rounded-full 
                             text-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300">
            Log in
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Don&apos;t have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
