import React, { useState } from "react";
import Logo from "../images/logo.svg"; 
import Todo from "../images/icon-todo.svg"
import Calendar from "../images/icon-calendar.svg"
import Reminders from "../images/icon-reminders.svg"
import Planning from "../images/icon-planning.svg"
import OpenMenu from "../images/icon-menu.svg"
import Close from "../images/icon-close-menu.svg"

export default function Navbar() {
  const [selectedFeature, setSelectedFeature] = useState("Features");
  const [selectedCompany, setSelectedCompany] = useState("Company");
  const [isFeatureMenuOpen, setFeatureMenuOpen] = useState(false);
  const [isCompanyMenuOpen, setCompanyMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // New state to control mobile menu

  let featureTimeout;
  let companyTimeout;

  const handleFeatureSelect = (feature) => {
    setSelectedFeature(feature);
    setFeatureMenuOpen(false);
  };

  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
    setCompanyMenuOpen(false); 
  };

  const showFeatureMenu = () => {
    clearTimeout(featureTimeout);
    setFeatureMenuOpen(true);
  };

  const showCompanyMenu = () => {
    clearTimeout(companyTimeout);
    setCompanyMenuOpen(true);
  };

  const hideFeatureMenu = () => {
    featureTimeout = setTimeout(() => {
      setFeatureMenuOpen(false);
    }, 500); 
  };

  const hideCompanyMenu = () => {
    companyTimeout = setTimeout(() => {
      setCompanyMenuOpen(false);
    }, 500); 
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-gray-50">
        <div className="flex gap-x-10 items-center">
          <div>
            <img src={Logo} alt="Logo" className="h-8" />
          </div>

          {/* Mobile Hamburger Menu */}
          <button 
            className="lg:hidden" 
            onClick={toggleMobileMenu}
          >
            <img src={isMobileMenuOpen ? Close : OpenMenu} alt="Menu Icon" className="h-6 w-6" />
          </button>

          {/* Navbar Links for larger screens */}
          <ul className="hidden lg:flex gap-x-8">
            <li
              className="relative"
              onMouseEnter={showFeatureMenu} 
              onMouseLeave={hideFeatureMenu}
            >
              <button className="cursor-pointer text-gray-500 hover:text-black font-medium text-left block">
                {selectedFeature}
              </button>
              {isFeatureMenuOpen && (
                <ul className="absolute bg-white shadow-lg rounded-md mt-2 w-48 text-black">
                  <li
                    onClick={() => handleFeatureSelect("Todo List")}
                    className="flex gap-4 cursor-pointer text-gray-500 hover:text-black  font-medium px-4 py-2"
                  >
                     <img src={Todo} alt="Todo" />
                    Todo List
                  </li>
                  <li
                    onClick={() => handleFeatureSelect("Calendar")}
                    className="flex gap-4 cursor-pointer text-gray-500 hover:text-black  font-medium px-4 py-2"
                  >
                     <img src={Calendar} alt="Calendar" />
                    Calendar
                  </li>
                  <li
                    onClick={() => handleFeatureSelect("Reminders")}
                    className="flex gap-4 cursor-pointer text-gray-500 hover:text-black  font-medium px-4 py-2"
                  >
                     <img src={Reminders} alt="Reminders" />
                    Reminders
                  </li>
                  <li
                    onClick={() => handleFeatureSelect("Planning")}
                    className="flex gap-4 cursor-pointer text-gray-500 hover:text-black  font-medium px-4 py-2"
                  >
                     <img src={Planning} alt="Planning" />
                    Planning
                  </li>
                </ul>
              )}
            </li>

            <li
              className="relative"
              onMouseEnter={showCompanyMenu} 
              onMouseLeave={hideCompanyMenu} 
            >
              <button className="cursor-pointer text-gray-500 hover:text-black font-medium text-left block">
                {selectedCompany}
              </button>
              {isCompanyMenuOpen && (
                <ul className="absolute bg-white shadow-lg rounded-md mt-2 w-48 text-black">
                  <li
                    onClick={() => handleCompanySelect("History")}
                    className="cursor-pointer text-gray-500 hover:text-black hover:bg-blue-100 font-medium px-4 py-2"
                  >
                    History
                  </li>
                  <li
                    onClick={() => handleCompanySelect("Our Team")}
                    className="cursor-pointer text-gray-500 hover:text-black hover:bg-blue-100 font-medium px-4 py-2"
                  >
                    Our Team
                  </li>
                  <li
                    onClick={() => handleCompanySelect("Blog")}
                    className="cursor-pointer text-gray-500 hover:text-black hover:bg-blue-100 font-medium px-4 py-2"
                  >
                    Blog
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a className="cursor-pointer text-gray-500 hover:text-black font-medium text-center block">
                Careers
              </a>
            </li>
            <li>
              <a className="cursor-pointer text-gray-500 hover:text-black font-medium text-center block">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="flex gap-4">
          <button className="cursor-pointer text-gray-500 hover:text-black font-medium text-center block mx-3 my-1">
            Login
          </button>
          <button className="cursor-pointer px-3 py-1 text-gray-500 border-2 border-gray-500 hover:text-black hover:border-black font-medium text-center rounded-lg">
            Register
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed top-0 right-0 w-64 h-full bg-gray-50 p-4 transition-transform ease-in-out transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col gap-4">
          <li>
            <button className="cursor-pointer text-gray-500 hover:text-black">
              {selectedFeature}
            </button>
          </li>
          <li>
            <button className="cursor-pointer text-gray-500 hover:text-black">
              {selectedCompany}
            </button>
          </li>
          <li>
            <a className="cursor-pointer text-gray-500 hover:text-black">
              Careers
            </a>
          </li>
          <li>
            <a className="cursor-pointer text-gray-500 hover:text-black">
              About
            </a>
          </li>
          <li>
            <button className="cursor-pointer text-gray-500 hover:text-black">
              Login
            </button>
          </li>
          <li>
            <button className="cursor-pointer px-3 py-1 text-gray-500 border-2 border-gray-500 hover:text-black hover:border-black">
              Register
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
