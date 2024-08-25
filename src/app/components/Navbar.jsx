"use client";
import React from "react";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 border-b border-[#33353F]">
      <div className="container mx-auto flex items-center justify-center px-4 py-2 lg:py-4">
        {/* Navigation Links */}
        <div className="menu">
          <ul className="flex justify-center items-center space-x-4 sm:space-x-8 text-white">
            {navLinks.map((link, index) => (
              <li key={index} className="hover:text-blue-600 transition">
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;