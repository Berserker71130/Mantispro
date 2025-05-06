import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
function Customers() {
  
  return (
    <div className="p-6 bg-gray-200">
      <div className="mb-6">
        <div className="text-grey-500 text-sm">
          <span className="text-gray-400">Home</span>{" "}
          <span className="mx-1">{">"}</span>{" "}
          <span className="font-semibold text-gray-500">Customers</span>
        </div>
        <hr />
      </div>
      <h2 className="text-xl font-semibold mb-4 bg-gray-100">Customers</h2>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div>
          <label
            htmlFor="customerName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Customer Name
          </label>
          <input
            type="text"
            id="customerName"
            placeholder="Enter Customer Name"
            className=" mb-12 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
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
            placeholder="Enter Customer Name"
            className="mb-12 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Enter Phone Number"
            className=" mb-12 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col items-end justify-end">
          <label
            htmlFor="userType"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Customer Type
          </label>
          <select
            id="customerType"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2 align-bottom"
          >
            <option>Customer Type</option>
            <option>INDIVIDUAL</option>
            <option>Group</option>
            <option>Organization</option>
          </select>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2">
            Save Record
          </button>
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              #
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200 divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray--500">
              1
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Hassan
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              hassan@gmail.com
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              INDIVIDUAL
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              08055885575
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
              <FiEdit className="mr-2 cursor-pointer text-indigo-600 hover:text-indigo-900 h-5 w-5" />
              <FiTrash2 className="cursor-pointer text-red-600 hover:text-red-900 h-5 w-5" />
            </td>
          </tr>
        </tbody>

        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray--500">
              2
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Ibrahim
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              ibrahim@gmail.com
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              INDIVIDUAL
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              08055995584
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
              <FiEdit className="mr-2 cursor-pointer text-indigo-600 hover:text-indigo-900 h-5 w-5" />
              <FiTrash2 className="cursor-pointer text-red-600 hover:text-red-900 h-5 w-5" />
            </td>
          </tr>
        </tbody>

        <tbody className="bg-gray-200 divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray--500">
              3
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Danbaba
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              bandababa@gmail.com
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              INDIVIDUAL
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              09044883343
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
              <FiEdit className="mr-2 cursor-pointer text-indigo-600 hover:text-indigo-900 h-5 w-5" />
              <FiTrash2 className="cursor-pointer text-red-600 hover:text-red-900 h-5 w-5" />
            </td>
          </tr>
        </tbody>

        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray--500">
              4
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Yakubu
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              yakubu@gmail.com
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              INDIVIDUAL
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              09044883343
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
              <FiEdit className="mr-2 cursor-pointer text-indigo-600 hover:text-indigo-900 h-5 w-5" />
              <FiTrash2 className="cursor-pointer text-red-600 hover:text-red-900 h-5 w-5" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4 flex flex-row items-center justify-center">
        <button className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 py-2 px-4 rounded mr-2">
          Previous
        </button>
        <span className="bg-indigo-600 text-white py-2 px-4 rounded">1</span>
        <button className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 py-2 px-4 rounded">
          Next
        </button>
      </div>
      <footer className="bg-gray-100 py-4 text-center text-gray-600 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <span>Copyright © Sohclick Technology Ltd</span>
          <div>
            <Link to="/dashboard" className="mr-4 hover:underline">
              Home
            </Link>
            <a href="/privacy" className="mr-4 hover:underline">
              Privacy
            </a>
            <a href="/contact" className="mr-4 hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Customers;
