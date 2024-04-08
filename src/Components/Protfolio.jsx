import React from "react";
import GptGenius from "../assets/protfolio/GptGenius.png";
import NetFlix from "../assets/protfolio/Netflix.png";
import youtube from "../assets/protfolio/youtube.png";
import bakasura from "../assets/protfolio/Swiggy.png";
import Weather from "../assets/protfolio/Weather.png";
import calculator from "../assets/protfolio/calculator.png";
import Nextjs from "../assets/protfolio/Nextjs.png";
import snakegame from "../assets/protfolio/snakegame.png";

const Protfolio = () => {
    
  
    const protfolios = [
        { id: 1, src: GptGenius, demoLink: "https://gptgeniusapp.vercel.app/", codeLink: "https://github.com/chandhu005/Gpt_Genius_APP" },
        { id: 2, src: NetFlix, demoLink: "https://moviegptai.netlify.app", codeLink: "https://github.com/chandhu005/NetFlixOpenAI" },
        { id: 3, src: youtube, demoLink: "https://youtubeflex.netlify.app", codeLink: "https://github.com/chandhu005/youtube-flex" },
        { id: 4, src: bakasura, demoLink: "https://bakasurafood.netlify.app", codeLink: "https://github.com/chandhu005/Bakasura" },
        { id: 5, src: Weather, demoLink: "https://chandhu005.github.io/WeatherWeb/", codeLink: "https://github.com/chandhu005/WeatherWeb" },
        { id: 6, src: calculator, demoLink: "https://chandhu005.github.io/Calculator/", codeLink: "https://github.com/chandhu005/Calculator" },
        { id: 7, src: Nextjs, demoLink: "https://nextjsintro-tau.vercel.app/", codeLink: "https://github.com/chandhu005/nextjsintro" },
        { id: 8, src: snakegame, demoLink: "https://chandhu005.github.io/SnakeGame/", codeLink: "https://github.com/chandhu005/SnakeGame" },
      ];


      return (
        <div id="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen" name="protfolio">
            <div className="max-w-screen-lg p-4 mx-auto">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>
    
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
                    {protfolios.map(({ id, src, demoLink, codeLink }, index) => (
                        <div key={id} className="portfolio-item">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md w-full h-64 object-cover duration-200 hover:scale-105"
                            />
                            <div className="flex justify-center space-x-4 mt-4">
                                <button 
                                    className={`px-6 py-3 rounded-md text-white shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out ${index % 2 === 0 ? 'from-purple-500 to-purple-700' : 'from-green-500 to-green-700'}`}
                                    onClick={() => window.open(demoLink, "_blank")}
                                >
                                    Demo
                                </button>
                                <button 
                                    className={`px-6 py-3 rounded-md text-white shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out ${index % 2 === 0 ? 'from-red-500 to-red-700' : 'from-yellow-500 to-yellow-700'}`}
                                    onClick={() => window.open(codeLink, "_blank")}
                                >
                                    Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Protfolio;
