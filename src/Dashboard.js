import { GiPlantSeed } from "react-icons/gi";
import {
  FiClock,
  FiHome,
  FiSearch,
  FiSettings,
  FiTrendingDown,
  FiTrendingUp,
  FiUser,
  FiUsers,
  FiBell,
} from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import react from "react";
function Dashboard() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-white shadow py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <GiPlantSeed className="text-green-500 mr-2" size={24} />
            <h2 className="text-xl font-semibold mr-4">Mantis</h2>
          </div>

          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="texxt"
              placeholder="Ctrl + K"
              className="bg-gray-100 rounded-md py-2 pl-10 pr-4 focus:outline-none text-sm"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FiBell
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
            size={20}
          />
          <FaUserCircle
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
            size={20}
          />
          <span className="text-gray-700">John Doe</span>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="bg-gray-100 w-64 p-4 flex flex-col justify-between h-screen">
          <nav className="flex-1">
            <ul className="list-none p-0">
              <li className="mb-2">
                <a
                  href="#"
                  className="block py-2 pl-0 text-gray-500 hover:text-blue-500 font-semibold text-sm hover:text-blue-500"
                >
                  Dashboard
                </a>

                <ul className="list-none p-0 ml-2">
                  <li className="rounded-md bg-blue-50 text-blue-700 font-semibold">
                    <a
                      href="#"
                      className="block py-2 px-4  hover:text-blue-500 font-semibold flex items-center"
                    >
                      <FiClock className="mr-2" /> Default
                    </a>
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
                <a
                  href="#"
                  className="block py-2 pl-0 text-gray-700 hover:text-blue-500 font-semibold flex items-center"
                >
                  <FiUsers className="mr-2" /> Customers
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#"
                  className="block py-2 pl-0 text-gray-700 hover:text-blue-500 font-semibold flex items-center"
                >
                  <FiTrendingUp className="mr-2" /> Income
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#"
                  className="block py-2 pl-0 text-gray-700 hover:text-blue-500 font-semibold flex items-center"
                >
                  <FiTrendingDown className="mr-2" /> Expenses
                </a>
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
                <a
                  href="#"
                  className="block py-2 pl-0 text-gray-700 hover:text-blue-500 font-semibold flex items-center"
                >
                  <FiSettings className="mr-2" /> Sales Expenses
                </a>
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
                <a
                  href="#"
                  className="block py-2 pl-0 text-gray-700 hover:text-blue-500 font-semibold flex items-center"
                >
                  <FiSettings className="mr-2" /> Upload Expenses
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#"
                  className="block py-2 pl-0 text-gray-700 hover:text-blue-500 font-semibold flex items-center"
                >
                  <FiSettings className="mr-2" /> Upload Income
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-md p-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-1">
                Total Amount
              </h3>
              <div className="text-2xl font-bold text-gray-800">
                4,42,236{" "}
                <span className="bg-blue-500 bg-opacity-25 text-blue-500 text-sm rounded-sm">
                  <FiTrendingUp
                    className="inline-block mr-1 text-blue-500 align-middle"
                    size={16}
                  />
                  59.3%
                </span>
              </div>
              <p className="text-gray-500 text-sm">
                You made an extra{" "}
                <span className="text-blue-500 font-bold">35,000</span> this
                year
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-md p-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-1">
                Total Customers
              </h3>
              <div className="text-2xl font-bold text-gray-800">
                78,250{" "}
                <span className=" bg-blue-500 bg-opacity-25 text-blue-500 text-sm rounded-sm">
                  <FiTrendingUp
                    className="inline-block mr-1 text-blue-500 align-middle"
                    size={16}
                  />
                  70.5%
                </span>
              </div>
              <p className="text-gray-500 text-sm">
                You made an extra{" "}
                <span className="text-blue-500 font-bold">8,900</span> this year
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-md p-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-1">
                Total KG
              </h3>
              <div className="text-2xl font-bold text-gray-800">
                18,800{" "}
                <span className="bg-yellow-500 bg-opacity-25 text-yellow-500 text-sm rounded sm">
                  <FiTrendingDown
                    className="inline-block mr-1 text-yellow-500 align-middle"
                    size={16}
                  />
                  27.4%
                </span>
              </div>
              <p className="text-gray-500 text-sm">
                You made an extra{" "}
                <span className="text-yellow-500 font-bold">1,943</span> this
                year
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-md p-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-1">
                Total Sales
              </h3>
              <div className="text-2xl font-bold text-gray-800">
                N35,078{" "}
                <span className="bg-yellow-500 bg-opacity-25 text-yellow-500 text-sm rounded sm">
                  <FiTrendingDown
                    className="inline-block mr-1 text-yellow-500 align-middle"
                    size={16}
                  />
                  27.4%
                </span>
              </div>
              <p className="text-gray-500 text-sm">
                You made an extra{" "}
                <span className="text-yellow-500 font-bold">$20,395</span> this
                year
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-md overflow-x-auto">
            <div className="p-4 font-semibold text-gray-700">Recent Sales</div>
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 font-semibold text-gray-700">
                    CUSTOMER
                  </th>
                  <th className="py-2 px-4 font-semibold text-gray-700">
                    KIT NO
                  </th>
                  <th className="py-2 px-4 font-semibold text-gray-700">
                    NO. OF KG
                  </th>
                  <th className="py-2 px-4 font-semibold text-gray-700">
                    PRICE PER KG
                  </th>
                  <th className="py-2 px-4 font-semibold text-gray-700">
                    TOTAL AMOUNT
                  </th>
                  <th className="py-2 px-4 font-semibold text-gray-700">
                    DATE
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4">Hassan</td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4">N6,000.00</td>
                  <td className="py-2 px-4">N30,000.00</td>
                  <td className="py-2 px-4">Apr 21, 2025, 10:23:59 PM</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4">Manasseh</td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4">1,500.00</td>
                  <td className="py-2 px-4">N33,00.00</td>
                  <td className="py-2 px-4">Apr 22, 2025, 9:51:13 PM</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4">Manasseh</td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4">5,000.00</td>
                  <td className="py-2 px-4">N75,000.00</td>
                  <td className="py-2 px-4">Apr 22, 2025, 9:46:47 PM</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4">Hassan</td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4">N6,000.00</td>
                  <td className="py-2 px-4">N60,000.00</td>
                  <td className="py-2 px-4">Apr 22, 2025, 7:19:01 AM</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4">Hassan</td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4">N5,500.00</td>
                  <td className="py-2 px-4">N82,500.00</td>
                  <td className="py-2 px-4">Apr 22, 2025, 7:15:32 AM</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4">Hassan</td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4">N1,500.00</td>
                  <td className="py-2 px-4">N7,500.00</td>
                  <td className="py-2 px-4">Apr 22, 2025, 6:48:11 AM</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4">Hassan</td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4">N1,000.00</td>
                  <td className="py-2 px-4">N50,000.00</td>
                  <td className="py-2 px-4">Apr 21, 2025, 9:16:37 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
      <footer className="bg-white py-4 px-6 text-center text-gray-500 text-sm">
        Copyright © Sohclick Technology Ltd |
        <a href="#" className="hover:underline">
          Home
        </a>{" "}
        |{" "}
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="#" className="hover:underline">
          Contact us
        </a>
      </footer>
    </div>
  );
}

export default Dashboard;
