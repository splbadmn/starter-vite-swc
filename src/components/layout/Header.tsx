import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Moon, Sun } from "lucide-react";
import { themeColors } from "@/lib/theme";
import { useTheme } from "../../lib/theme-context";

// Import logo images
import darkLogo from "/monorays_dark_web.png";
import lightLogo from "/monorays_lite_web.png";

interface NavItem {
  name: string;
  path: string;
  dropdown?: { name: string; path: string }[];
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about-us",
      dropdown: [
        { name: "Our Company", path: "/about-us" },
        { name: "Our Team", path: "/about-us" },
        { name: "Our History", path: "/company-history" },
      ],
    },
    {
      name: "Services",
      path: "/our-services",
      dropdown: [
        { name: "Civil Engineering", path: "/our-services" },
        { name: "Structural Design", path: "/our-services" },
        { name: "Project Management", path: "/our-services" },
        {
          name: "Construction Supervision",
          path: "/our-services",
        },
      ],
    },
    {
      name: "Projects",
      path: "/projects",
      dropdown: [
        { name: "Commercial", path: "/projects" },
        { name: "Residential", path: "/projects" },
        { name: "Infrastructure", path: "/projects" },
      ],
    },
    { name: "Contact", path: "/contact-us" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden sm:block bg-white border-b text-gray-700 py-2 sm:py-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
        <div className="container mx-auto px-4">
          {/* Tablet and Desktop Layout */}
          <div className="hidden lg:flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1 text-red-600 dark:text-red-500" />
                <span className="text-sm">Call Us 24/7</span>
                <span className="text-sm ml-2 font-medium">0433 362 733</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1 text-red-600 dark:text-red-500" />
                <span className="text-sm">Send Us Mail</span>
                <a href="mailto:INFO@MONORAYS.ORG" className="text-sm ml-2 font-medium hover:text-red-600 dark:hover:text-red-400">INFO@MONORAYS.ORG</a>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-red-600 dark:text-red-500" />
              <span className="text-sm">Our Location</span>
              <span className="text-sm ml-2 font-medium">22 MAIDEN STREET GREENACRE NSW 2190</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="text-sm mr-2">Language</span>
                <span className="text-sm font-medium flex items-center">
                  <img src="https://flagcdn.com/w20/gb.png" alt="English" className="h-4 mr-1" />
                  English
                  <ChevronDown className="h-3 w-3 ml-1" />
                </span>
              </div>
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>
          
          {/* Tablet-specific Layout */}
          <div className="lg:hidden grid grid-cols-2 gap-3 py-1">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1 text-red-600 dark:text-red-500" />
              <a href="tel:0433362733" className="text-xs font-medium hover:text-red-600">0433 362 733</a>
            </div>
            <div className="flex items-center justify-end">
              <Mail className="h-4 w-4 mr-1 text-red-600 dark:text-red-500" />
              <a href="mailto:INFO@MONORAYS.ORG" className="text-xs font-medium hover:text-red-600 truncate dark:hover:text-red-400">INFO@MONORAYS.ORG</a>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-red-600 dark:text-red-500" />
              <span className="text-xs truncate">22 MAIDEN STREET GREENACRE</span>
            </div>
            <div className="flex items-center justify-end space-x-2">
              <div className="flex items-center">
                <img src="https://flagcdn.com/w20/gb.png" alt="English" className="h-4" />
              </div>
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4 text-yellow-500" />
                ) : (
                  <Moon className="h-4 w-4 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 dark:bg-gray-900 dark:shadow-gray-800/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={theme === 'dark' ? darkLogo : lightLogo}
                alt="Monorays"
                className="h-9 sm:h-10 lg:h-12"
              />
            </Link>

            {/* Desktop Navigation (Large screens only) */}
            <nav className="hidden lg:flex items-center">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div className="flex items-center cursor-pointer px-4 py-6">
                      <Link
                        to={item.path}
                        className="text-gray-800 hover:text-red-600 font-medium text-sm uppercase dark:text-gray-200 dark:hover:text-red-400"
                      >
                        {item.name}
                      </Link>
                      <ChevronDown
                        className="h-3 w-3 ml-1 text-gray-500 group-hover:text-red-600 dark:text-gray-400 dark:group-hover:text-red-400"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDropdown(item.name);
                        }}
                      />
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-gray-800 hover:text-red-600 font-medium text-sm uppercase px-4 py-6 dark:text-gray-200 dark:hover:text-red-400"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition duration-200 ease-in-out z-50 dark:bg-gray-800 dark:shadow-gray-700/30">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-red-400"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Tablet Navigation (Medium screens only) */}
            <nav className="hidden sm:flex lg:hidden items-center">
              {navItems.slice(0, 3).map((item) => (
                <div key={item.name} className="relative group px-2">
                  <Link
                    to={item.path}
                    className="text-gray-800 hover:text-red-600 font-medium text-xs uppercase dark:text-gray-200 dark:hover:text-red-400"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              {/* Tablet More Menu Dropdown */}
              <div className="relative group px-2">
                <div className="flex items-center cursor-pointer">
                  <span className="text-gray-800 hover:text-red-600 font-medium text-xs uppercase dark:text-gray-200 dark:hover:text-red-400">
                    More
                  </span>
                  <ChevronDown className="h-3 w-3 ml-1 text-gray-500" />
                </div>
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition duration-200 ease-in-out z-50 dark:bg-gray-800 dark:shadow-gray-700/30">
                  {navItems.slice(3).map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-red-400"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Get A Quote Button */}
            <div className="hidden sm:block">
              <Link 
                to="/contact-us" 
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded text-xs sm:text-sm uppercase font-medium tracking-wide dark:bg-red-700 dark:hover:bg-red-800"
              >
                GET A QUOTE →
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="sm:hidden text-gray-700 focus:outline-none dark:text-gray-300"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white border-t dark:bg-gray-900 dark:border-gray-800">
            <div className="container mx-auto px-4 py-3">
              {navItems.map((item) => (
                <div key={item.name} className="py-2 border-b border-gray-100 dark:border-gray-800">
                  {item.dropdown ? (
                    <div>
                      <div
                        className="flex items-center justify-between py-2"
                        onClick={() => toggleDropdown(item.name)}
                      >
                        <Link
                          to={item.path}
                          className="text-gray-800 font-medium text-sm uppercase dark:text-gray-200"
                        >
                          {item.name}
                        </Link>
                        <ChevronDown
                          className={`h-4 w-4 text-gray-500 transition-transform ${activeDropdown === item.name ? "transform rotate-180" : ""}`}
                        />
                      </div>

                      {activeDropdown === item.name && (
                        <div className="pl-4 border-l-2 border-red-200 mt-1 mb-2 dark:border-red-800">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className="block py-2 text-sm text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
                              onClick={toggleMenu}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block py-2 text-gray-800 font-medium text-sm uppercase hover:text-red-600 dark:text-gray-200 dark:hover:text-red-400"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
