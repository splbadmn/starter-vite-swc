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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src={theme === 'dark' ? darkLogo : lightLogo} 
                alt="Monorays" 
                className="h-12 mb-4" 
              />
            </div>
            <p className="text-gray-400 mb-6">
              A leading developer of A-grade commercial, industrial and residential 
              projects in Australia. Since its foundation the company.
            </p>
            <div className="flex space-x-4">
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
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Company</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-red-500" />
                <div className="flex flex-col">
                  <span className="text-gray-400">0433362733</span>
                  <span className="text-gray-400">0434934118</span>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-red-500 mt-1" />
                <div className="flex flex-col">
                  <a href="mailto:kalai@monorays.org" className="text-gray-400 hover:text-white">kalai@monorays.org</a>
                  <a href="mailto:niro@monorays.org" className="text-gray-400 hover:text-white">niro@monorays.org</a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-red-500 mt-1" />
                <span className="text-gray-400">
                  22 MAIDEN STREET GREENACRE<br />
                  NSW 2190, Australia
                </span>
              </li>
              <li className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-red-500" />
                <a href="https://www.monorays.org" className="text-gray-400 hover:text-white">www.monorays.org</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 py-4 dark:bg-black">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          Developed by <a href="https://www.spirelab.net" className="hover:text-white transition-colors duration-300">Spirelab Solutions Ltd.</a> | © {new Date().getFullYear()} Monorays Pte Ltd. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
