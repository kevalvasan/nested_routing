import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 to-blue-500 p-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Your Profile Dashboard
        </h1>

        {/* Profile Menu and Details Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Menu */}
          <div className="w-full lg:w-1/4 p-6 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Profile Menu</h2>
            <ul className="space-y-6">
              <li>
                <Link
                  to="view"
                  className="block text-xl font-medium hover:text-teal-300 transition-colors"
                >
                  View Profile
                </Link>
              </li>
              <li>
                <Link
                  to="settings"
                  className="block text-xl font-medium hover:text-teal-300 transition-colors"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Profile Details */}
          <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-teal-600 mb-6">Profile Details</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">Welcome to your profile dashboard! Here you can view and manage your account information.</p>
              <p className="text-lg text-gray-700">Feel free to update your personal details and preferences.</p>
            </div>

            {/* Outlet for dynamic content */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
