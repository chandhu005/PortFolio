import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

import useTypingAnimation from "./UseTypingAnimation";  // Rename the import to useTypingAnimation

const Home = () => {
  const targetWord = "FrontEnd";
  const word = useTypingAnimation(targetWord);  // Rename the hook to useTypingAnimation

  return (
    <div
      name="home"
      className="min-h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-4 sm:px-8 md:px-0">
        <div className="flex flex-col justify-center h-full md:w-1/2">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
            I'm a <span className="animate-typing text-pink-500">{word}</span> Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-center md:text-left">
            I have 2 years of experience building and designing Software. Currently, I love to work on web applications using technologies like React, TailwindCss, Next Js, React-Redux, and GraphQL.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-full md:w-2/3 lg:w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
