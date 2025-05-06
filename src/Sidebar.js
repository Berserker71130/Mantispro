import { Link } from "react-router-dom";
import {
  FiClock,
  FiUsers,
  FiTrendingUp,
  FiTrendingDown,
  FiSettings,
} from "react-icons/fi";
function Sidebar() {
  return (
    <div className="bg-gray-200 w-64 flex-shrink-0 h-screen p-4">
      <aside className="bg-gray-100 w-64 p-4 flex flex-col justify-between h-screen">
        <nav className="flex-1">
          <ul className="list-none p-0">
            <li className="mb-2">
              <Link
                to="/dashboard/default"
                className="block py-2 px-3 rounded hover:bg-blue-200"
              >
                Dashboard
              </Link>

              <ul className="list-none p-0 ml-2">
                <li className="rounded-md bg-blue-50 text-gray-700 font-semibold">
                  <Link
                    to="/dashboard/default"
                    className="block py-2 px-4  hover:text-blue-500 font-semibold flex items-center"
                  >
                    <FiClock className="h-5 w-5 mr-2" /> Default
                  </Link>
                </li>
              </ul>
            </li>

            <li className="mb-2">
              <a
                href="#"
                className="block py-2 pl-0 text-gray-500 font-semibold text-sm"
              >
                Form Management
              </a>
            </li>

            <li className="mb-2">
              <Link
                to="/customers"
                className="text-gray-600 block py-2 px-3 rounded hover:text-blue-400 flex items-center font-semibold"
              >
                <FiUsers className="h-5 w-5 mr-2" /> Customers
              </Link>
            </li>

            <li className="mb-2">
              <Link
                to="/income"
                className="text-gray-600 block py-2 px-4  hover:text-blue-500 font-semibold flex items-center"
              >
                <FiTrendingUp className="h-5 w-5 mr-2" /> Income
              </Link>
            </li>

            <li className="mb-2">
              <Link
                to="/expenses"
                className="text-gray-600 block py-2 px-4  hover:text-blue-500 font-semibold flex items-center"
              >
                <FiTrendingDown className="h-5 w-5 mr-2" /> Expenses
              </Link>
            </li>

            <li className="mb-2">
              <a
                href="#"
                className="block py-2 pl-0 text-gray-500 font-semibold text-sm"
              >
                Reports
              </a>
            </li>

            <li className="mb-2">
              <Link
                to="/dashboard/salesExpenses"
                className="text-gray-600 block py-2 px-4  hover:text-blue-500 font-semibold flex items-center"
              >
                <FiSettings className="h-5 w-5 mr-2" /> Sales Expenses
              </Link>
            </li>

            <li className="mb-2">
              <a
                href="#"
                className="block py-2 pl-0 text-gray-500 font-semibold text-sm"
              >
                Uploads
              </a>
            </li>

            <li className="mb-2">
              <Link
                to="/dashboard/uploadExpenses"
                className="text-gray-600 block py-2 px-4  hover:text-blue-500 font-semibold flex items-center"
              >
                <FiSettings className="h-5 w-5 mr-2" /> Upload Expenses
              </Link>
            </li>

            <li className="mb-2">
              <Link
                to="/dashboard/uploadIncome"
                className="text-gray-600 block py-2 px-4  hover:text-blue-500 font-semibold flex items-center"
              >
                <FiSettings className="h-5 w-5 mr-2" /> Upload Income
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
export default Sidebar;
