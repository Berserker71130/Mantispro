import { Link } from "react-router-dom";

function Income() {
  return (
    <body className="bg-gray-100 font-sans antialiased">
      <div className="p-6">
        <div className="mb-4 text-sm text-gray-500">
          <a href="#" className="hover:underline">
            Home
          </a>
          <span className="mx-2">{">"}</span>
          <span>Income</span>
        </div>
        <h2 className="text-xl font-semibold mb-4">Add Sales Record</h2>
        <hr className=" mb-6 border-t-2 border-gray-200" />
        <div className="mb-6 grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div>
            <label
              htmlFor="customer"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Customer
            </label>
            <input
              type="text"
              id="customer"
              placeholder="Search For Customer"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label
              htmlFor="noOfKg"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              No. Of Kg
            </label>
            <input
              type="number"
              id="noOfKg"
              placeholder="Enter Number Of Kilogram"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label
              htmlFor="pricePerKg"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Price Per Kilogram
            </label>
            <input
              type="number"
              id="pricePerKg"
              placeholder="Enter Price Per Kilogram"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label
              htmlFor="grade"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Grade
            </label>
            <input
              type="text"
              id="grade"
              placeholder="e.g 1 or 2"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="category" className="font-bold">
              Category
            </label>
            <select
              id="category"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
            >
              <option>SALES</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Save Record
          </button>
        </div>

        <div className="mb-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label
              htmlFor="customer-search"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Customer
            </label>
            <input
              type="text"
              id="customer-search"
              placeholder="Search By Customer"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label
              htmlFor="amount"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Search By Amount"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="md:col-span-2 flex items-center gap-2">
            <div>
              <label
                htmlFor="date-from"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Date From
              </label>
              <input
                type="date"
                id="date-from"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label
                htmlFor="date-to"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Date To
              </label>
              <input
                type="date"
                id="date-to"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  mt-7 ml-2">
                Filter
              </button>
            </div>
          </div>
        </div>
        <div className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 font-bold  ">
          <div className="grid grid-cols-9 gap-4">
            <div>#</div>
            <div>Customer</div>
            <div>No. Of Kg</div>
            <div>Date</div>
            <div>Price Per Kg</div>
            <div>Grade</div>
            <div>Category</div>
            <div>Amount</div>
            <div>Actions</div>
          </div>
          <hr className=" mb-6 border-t-2 border-gray-200" />
          <div className="mt-6 flex justify-center space-x-4">
            <button className="bg-gray-100 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Previous
            </button>
            <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Next
            </button>
          </div>
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
    </body>
  );
}
export default Income;
