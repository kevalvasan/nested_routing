import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 p-8">
      {/* Main Dashboard Container */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">Welcome to Your Dashboard</h2>
        <p className="text-lg text-gray-700 mb-6">
          This is your central hub where you can navigate to different sections and manage your account settings.
        </p>

        {/* User Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-green-400 to-teal-500 p-4 rounded-lg shadow-md text-white">
            <h3 className="text-xl font-semibold">Your Posts</h3>
            <p className="text-2xl font-bold">24</p>
            <p className="text-sm">Total blog posts created</p>
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-lg shadow-md text-white">
            <h3 className="text-xl font-semibold">Followers</h3>
            <p className="text-2xl font-bold">130</p>
            <p className="text-sm">People following you</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-lg shadow-md text-white">
            <h3 className="text-xl font-semibold">Messages</h3>
            <p className="text-2xl font-bold">7</p>
            <p className="text-sm">Unread messages</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-teal-600 mb-4">Quick Links</h3>
          <div className="flex space-x-6">
            <Link
              to="/profile"
              className="bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-700 transition-all duration-300"
            >
              View Profile
            </Link>
            
          </div>
        </div>

        {/* Dashboard Stats */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-teal-600 mb-4">Recent Activity</h3>
          <ul className="space-y-4">
            <li className="p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="text-lg">New post created: "Understanding React State"</p>
              <p className="text-sm text-gray-500">2 days ago</p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="text-lg">Followed by: John Doe</p>
              <p className="text-sm text-gray-500">3 days ago</p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="text-lg">New message from: Sarah</p>
              <p className="text-sm text-gray-500">5 days ago</p>
            </li>
          </ul>
        </div>

        {/* Footer Section */}
        
      </div>
    </div>
  );
};

export default Dashboard;
