import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4">
        <h1 className="text-xl font-bold mb-4">Dashboard</h1>
        <nav className="space-y-2">
          <NavLink to="posts" className="block p-2 hover:bg-gray-200 rounded">
            Posts
          </NavLink>
          <NavLink to="users" className="block p-2 hover:bg-gray-200 rounded">
            Users
          </NavLink>
          {/* Add more navigation items here */}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}
