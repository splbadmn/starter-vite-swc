import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { useTheme } from "../../lib/theme-context";

// Import logo images
import darkLogo from "/monorays_dark_web.png";
import lightLogo from "/monorays_dark_web.png";

const Footer = () => {
  const { theme } = useTheme();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Services", path: "/our-services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact-us" },
  ];

  const services = [
    { name: "Civil Engineering", path: "/our-services" },
    { name: "Structural Design", path: "/our-services" },
    { name: "Project Management", path: "/our-services" },
    { name: "Construction Supervision", path: "/our-services" },
  ];

  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-950">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-8 sm:mb-0">
            <div className="mb-4">
              <img 
                src={theme === 'dark' ? darkLogo : lightLogo} 
                alt="Monorays" 
                className="h-10 sm:h-12 mb-4" 
              />
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base max-w-xs">
              A leading developer of A-grade commercial, industrial and residential 
              projects in Australia. Since its foundation the company.
            </p>
            <div className="flex flex-wrap gap-2">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-400 hover:text-white bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300 dark:bg-gray-800">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300 dark:bg-gray-800">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300 dark:bg-gray-800">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300 dark:bg-gray-800">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300 dark:bg-gray-800">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 sm:mb-0">
            <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white inline-block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="mb-8 sm:mb-0">
            <h3 className="text-lg font-semibold mb-3 text-white">Our Services</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white inline-block py-1"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Contact Company</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-center">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-red-500 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:0433362733" className="text-gray-400 hover:text-white">0433 362 733</a>
                  <a href="tel:0434934118" className="text-gray-400 hover:text-white">0434 934 118</a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-red-500 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:kalai@monorays.org" className="text-gray-400 hover:text-white break-all">kalai@monorays.org</a>
                  <a href="mailto:niro@monorays.org" className="text-gray-400 hover:text-white break-all">niro@monorays.org</a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  22 MAIDEN STREET GREENACRE<br />
                  NSW 2190, Australia
                </span>
              </li>
              <li className="flex items-center">
                <Globe className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-red-500 flex-shrink-0" />
                <a href="https://www.monorays.org" className="text-gray-400 hover:text-white break-all">www.monorays.org</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 py-4 dark:bg-black">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2">
            <span>Developed by <a href="https://www.spirelab.net" className="hover:text-white transition-colors duration-300">Spirelab Solutions Ltd.</a></span> 
            <span className="hidden sm:inline">|</span> 
            <span>© {new Date().getFullYear()} Monorays Pte Ltd. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
