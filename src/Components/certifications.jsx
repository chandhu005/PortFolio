import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import NamesthaDev from "../assets/certifications/NamesthaDev.png";
import DBMS from "../assets/certifications/DBMS.png";
import js from "../assets/certifications/JavaScript.png";
import nodejs from "../assets/certifications/APIDevelopmentusingNodejsandExpress.png";
import python from "../assets/certifications/Python.png";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "React Certification",
      organization: "Namestha Dev",
      imgSrc: NamesthaDev,
      icon: <FaGraduationCap size={30} />,
      year: "2020",
      href: "https://namastedev.com/chandrasekharchadalawada7/certificates/namaste-react",
    },
    {
      id: 2,
      title: "DBMS",
      organization: "Coding Ninjas",
      imgSrc: DBMS,
      icon: <FaGraduationCap size={30} />,
      year: "2021",
      href: "https://certificate.codingninjas.com/view/dc12ee1f757af86e",
    },
    {
      id: 3,
      title: "HTML CSS and JavaScript",
      organization: "Coding Ninjas",
      imgSrc: js,
      icon: <FaGraduationCap size={30} />,
      year: "2022",
      href: "https://certificate.codingninjas.com/view/35de6f04c9d99d0d",
    },
    {
      id: 4,
      title: "API Development using Nodejs and Express",
      organization: "Airtribe",
      imgSrc: nodejs,
      icon: <FaGraduationCap size={30} />,
      year: "2022",
      href: "https://www.airtribe.live/api-development-masterclass/certificate/6LUVEHLKRCEJ",
    },
    {
      id: 5,
      title: "Python",
      organization: "Coding Ninjas",
      imgSrc: python,
      icon: <FaGraduationCap size={30} />,
      year: "2022",
      href: "https://ninjasfiles.s3.amazonaws.com/certificate24134334c7133f51641de016e36f2ac78e698e2.pdf",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black w-full py-10 min-h-screen" name="certifications">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center">
    
        <h2 className="mb-6 text-center text-white text-4xl font-bold inline border-b-4 border-gray-500 ">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {certifications.map(({ id, title, organization, imgSrc, icon, year, href }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="p-4">
                <img src={imgSrc} alt={title} className="w-full h-32 object-cover mb-4" />
                <div className="flex justify-between items-center">
                  <div>
                    {icon}
                    <h3 className="ml-2 text-lg font-semibold text-blue-500 hover:underline">
                      {title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">{organization}</p>
                    <p className="text-gray-500">{year}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
