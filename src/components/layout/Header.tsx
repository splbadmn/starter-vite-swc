import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { themeColors } from "@/lib/theme";

interface NavItem {
  name: string;
  path: string;
  dropdown?: { name: string; path: string }[];
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
      <div className="hidden md:block bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span className="text-sm">info@monorays.org</span>
            </div>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">
              123 Engineering Way, City, State 12345
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-t-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-primary">Monorays</div>
              <div className="text-sm text-gray-600 ml-2">
                Engineering Solutions
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div className="flex items-center cursor-pointer">
                      <Link
                        to={item.path}
                        className="text-gray-700 hover:text-primary font-medium"
                      >
                        {item.name}
                      </Link>
                      <ChevronDown
                        className="h-4 w-4 ml-1 text-gray-500 group-hover:text-primary"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDropdown(item.name);
                        }}
                      />
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-gray-700 hover:text-primary font-medium"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition duration-200 ease-in-out z-50">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
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
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-2">
              {navItems.map((item) => (
                <div key={item.name} className="py-2">
                  {item.dropdown ? (
                    <div>
                      <div
                        className="flex items-center justify-between py-2"
                        onClick={() => toggleDropdown(item.name)}
                      >
                        <Link
                          to={item.path}
                          className="text-gray-700 font-medium"
                        >
                          {item.name}
                        </Link>
                        <ChevronDown
                          className={`h-4 w-4 text-gray-500 transition-transform ${activeDropdown === item.name ? "transform rotate-180" : ""}`}
                        />
                      </div>

                      {activeDropdown === item.name && (
                        <div className="pl-4 border-l-2 border-gray-200 mt-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className="block py-2 text-sm text-gray-600 hover:text-primary"
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
                      className="block py-2 text-gray-700 font-medium hover:text-primary"
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
