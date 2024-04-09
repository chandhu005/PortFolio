import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
    {
      id: 6,
      link: "certifications",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-20 px-4 text-white bg-black fixed">
      <div className="mb-4 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-signature ml-2">Chandhu</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-2 md:px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={1000}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 md:hidden">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-2 py-4 cursor-pointer capitalize text-2xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={1000}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
