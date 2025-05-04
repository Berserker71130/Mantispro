import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <div className=" mb-6 flex justify-end">
          <Link to="/signup" className="text-blue-500 hover:underline">
            <p className="text-blue-600 text-sm">Don't have an account?</p>
          </Link>
        </div>
        <h2 className="text-2xl font-bold mb-6 ">Login</h2>
        <form className=" space-y-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label
              className="blocktext-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-600 text-sm">
              <input type="checkbox" className="form checkbox mr-2" />
              Keep me signed in
            </label>
            <a
              href="/forgot-password"
              className="inline-block align-baseline font-bold text-sm text-gray-700 hover:text-blue-800"
            >
              Forgot Password?
            </a>
          </div>
          <button
            onClick={handleLogin}
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Login
          </button>
          <div className="border-t border-gray-300 pt-4">
            <div className="relative flex items-center justify-center">
              <div className="absolute left-0 w-1/4 border-t border-gray-300"></div>
              <p className="text-gray-600 font-bold text-gray-700 text-center text-sm px-4">
                Login With
              </p>
              <div className="absolute right-0 w-1/4 border-t border-gray-300"></div>
            </div>
            <div className="flex justify-around mt-2">
              <button className="bg-white border border-gray-300 text-gray-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center">
                <FaGoogle className="inline-block w-4 h-4 mr-2 text-red-500" />
                Google
              </button>
              <button className="bg-white border border-gray-300 text-gray-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center">
                <FaTwitter className="inline-block w-4 h-4 mr-2 text-blue-500" />
                Twitter
              </button>
              <button className="bg-white border border-gray-300 text-gray-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center">
                <FaFacebook className="inline-block w-4 h-4 mr-2 text-blue-500" />
                Facebook
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
