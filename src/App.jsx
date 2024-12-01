import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ProfileSettings from "./pages/ProfileSettings";
import ProfileView from "./pages/ProfileView";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <nav className="bg-blue-600 text-white py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className="text-xl font-semibold">My Website</div>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-gray-200">Dashboard</Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-gray-200">Profile</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-6 flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />}>
              <Route path="view" element={<ProfileView />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
