import { LogOut } from "lucide-react";
import { currentUser, tabs } from "../data";

export default function Header({ activeTab, onTabChange }) {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <span className="text-lg font-semibold text-gray-800">
            submithub
          </span>
        </div>

        {/* Tabs */}
        <nav className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* User + Logout */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-semibold text-sm">
            {currentUser.initials}
          </div>
          <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
