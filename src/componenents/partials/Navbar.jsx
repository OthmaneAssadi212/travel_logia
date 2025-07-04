import { Link } from 'react-router-dom';
import './Navbar.css';



export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-gray-800 tracking-wide">
          TravelPlan
        </a>

        {/* Search bar */}
        <div className="mx-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-64 md:w-80 bg-gray-100 border border-gray-200 rounded-lg py-2 px-4 pl-10 text-sm font-sans placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow shadow-inner hover:shadow-md"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Auth buttons */}
        <div className="flex items-center space-x-4">
          <a
            href="/login"
            className="text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors"
          >
            Connexion
          </a>
          <a
            href="/signup"
            className="bg-indigo-600 text-white px-4 py-1.5 rounded-md hover:bg-indigo-700 text-sm font-medium transition-colors"
          >
            Inscription
          </a>
        </div>
      </div>
    </nav>
  );
}
