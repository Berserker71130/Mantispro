import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent page refresh
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <div className="mb-6 text-right">
          <Link
            to="/signup"
            className="text-blue-500 hover:underline text-sm"
            aria-label="Go to Signup Page"
          >
            Don't have an account?
          </Link>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-600 text-sm">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="ml-2">Keep me signed in</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-sm font-bold text-blue-500 hover:text-blue-700"
              aria-label="Forgot Password"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 w-full"
          >
            Login
          </button>
          <div className="border-t border-gray-300 pt-4 mt-6">
            <div className="flex items-center justify-center mb-4">
              <span className="text-gray-600 text-sm font-bold bg-white px-4">
                Or Login With
              </span>
            </div>
            <div className="flex justify-around">
              <button
                type="button"
                className="bg-white border border-gray-300 text-gray-500 font-bold py-2 px-4 rounded flex items-center focus:outline-none focus:ring focus:ring-gray-200"
                aria-label="Login with Google"
              >
                <FaGoogle className="w-5 h-5 mr-2 text-red-500" />
                Google
              </button>
              <button
                type="button"
                className="bg-white border border-gray-300 text-gray-500 font-bold py-2 px-4 rounded flex items-center focus:outline-none focus:ring focus:ring-gray-200"
                aria-label="Login with Twitter"
              >
                <FaTwitter className="w-5 h-5 mr-2 text-blue-500" />
                Twitter
              </button>
              <button
                type="button"
                className="bg-white border border-gray-300 text-gray-500 font-bold py-2 px-4 rounded flex items-center focus:outline-none focus:ring focus:ring-gray-200"
                aria-label="Login with Facebook"
              >
                <FaFacebook className="w-5 h-5 mr-2 text-blue-500" />
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
