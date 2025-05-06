import { Link } from "react-router-dom";
import Layout from "./Layout";
function Expenses() {
  return (
    <Layout>
      <div className="mt-6 mb-6 p-4 bg-gray-200">
        <div className="mb-4">
          <a href="#" className="text-gray-500 hover:underline">
            Home
          </a>
          <span className="mx-2 text-gray-500">{">"}</span>
          <span className="text-gray-700">Expenses</span>
        </div>
        <div className="bg-gray-100">
          <h2 className="text-xl font-semibold mb-6">Add Expenditure Record</h2>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
            <div>
              <label
                htmlFor="supplier"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Supplier
              </label>
              <select
                id="supplier"
                className="shadow-sm focus:ringindigo-500 focus:border-indigo-500 block w-full sm-text-sm border border-gray-300 rounded-md p-2"
              >
                <option value="">Search For Supplier</option>
                <option value="">Local Supplier</option>
                <option value="">International Supplier</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="unitPrice"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Unit Price
              </label>
              <input
                type="number"
                id="unitPrice"
                placeholder="Enter Unit Price"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text:sm border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="w-flex">
              <label
                htmlFor="qty"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Qty
              </label>
              <input
                type="number"
                id="qty"
                placeholder="qty"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-32 sm:text:sm border border-gray-300 rounded-md p-2"
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
                type="text"
                id="amount"
                placeholder="Amount (Calculate)"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text:sm border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="itemDescription"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Item/Description
              </label>
              <input
                type="text"
                id="itemDescription"
                placeholder="Enter Description"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text:sm border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Category
              </label>
              <select
                id="category"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text;sm border border-gray-300 rounded-md p-2"
              >
                <option>ACQUISITION</option>
                <option>DISPENSATION</option>
                <option>RECOMMENDATION</option>
              </select>
            </div>
          </div>
          <div className="md:col-start-5 md:col-span-2 flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save Record
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                  #
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                  Supplier
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                  Amount
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                  Date
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                  Description
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                  Category
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-center">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded">
            Previous
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded">
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
    </Layout>
  );
}

export default Expenses;
