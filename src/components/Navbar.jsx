import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const categories = [
  "Bedding",
  "Kitchen",          
  "Sports",
  "Clothing",
  "Crafts",
  "Toys",
  "More",
];

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setDropdownOpen(false);
    }
  };

  return (
    <nav className="navbar fixed top-0 left-0 right-0 bg-primary text-white shadow-md z-50">
      <div className="navbar-container max-w-7xl mx-auto flex items-center px-6 py-3">
        {/* Left: Logo */}
        <h1 className="logo text-xl font-bold cursor-pointer select-none">ECOnomy</h1>

        {/* Center: Search */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex-grow mx-6"
          role="search"
          aria-label="Site-wide search"
        >
          <input
            type="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-full text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary-orange"
          />
        </form>

        {/* Right: Nav Links */}
        <ul className="nav-links flex items-center gap-6">
          {/* Home link */}
          <li>
            <NavLink
              to="/Home"
              className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
              onClick={() => setDropdownOpen(false)}
            >
              Home
            </NavLink>
          </li>

          {/* Categories dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="nav-link category-button flex items-center gap-1 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              aria-controls="categories-dropdown"
            >
              Categories ▾
            </button>
            {dropdownOpen && (
              <ul
                id="categories-dropdown"
                className="dropdown-menu absolute right-0 mt-2 bg-primary rounded-md shadow-lg py-2 min-w-[160px] z-50"
              >
                {categories.map((category) => (
                  <li key={category}>
                    <NavLink
                      to={`/category/${category.toLowerCase().replace(/[\s/]/g, '-')}`}
                      className="dropdown-link block px-4 py-2 hover:bg-secondary-orange transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {category}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
              onClick={() => setDropdownOpen(false)}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
              onClick={() => setDropdownOpen(false)}
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
              onClick={() => setDropdownOpen(false)}
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
