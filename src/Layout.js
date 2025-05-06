import Header from "./Header";
import Sidebar from "./Sidebar";
function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
