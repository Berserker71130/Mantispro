import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="bg-white shadow-md rounded-lg p-8 sm:p-10 w-full max-w-2xl">
        <div className="flex justify-end">
          <Link to="/">
            <p className="text-right text-blue-600 text-sm cursor-pointer hover:bg-blue-100">
              Already have an account?
            </p>
          </Link>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h2>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Organization Admin Details
          </h3>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-4 mb-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div>
              <label
                htmlFor="middleName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Middle Name
              </label>
              <input
                type="text"
                id="middleName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label
                htmlFor="userName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="userName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="address"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Address
              </label>
              <input
                type="address"
                id="address"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Organization Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="organizationName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Organization Name*
              </label>
              <input
                type="text"
                id="organizationName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              />
            </div>

            <div>
              <label
                htmlFor="organizationEmail"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Description
              </label>
              <input
                id="description"
                className="shadow appearance-none border rounded w-full w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div>
              <label
                htmlFor="organizationEmail"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Organization Email*
              </label>
              <input
                id="organizationEmail"
                className="shadow appearance-none border rounded w-full w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div>
              <label
                htmlFor="organizationPhone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Organization Phone*
              </label>
              <input
                id="organizationPhone"
                className="shadow appearance-none border rounded w-full w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid.cols-2 gap-4 mb-4"></div>
        </div>

        <div className="mb-4 text-sm text-gray-600 text-center">
          By signing up, you agree to our{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Terms of service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
        </div>

        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Create Account
        </button>
      </div>
    </div>
  );
}
export default SignUp;
