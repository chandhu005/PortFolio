import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="text-xl mt-20 md:text-xl">
          <p>
            I am Chandrasekharchadalawada, a dedicated System Engineer at Infosys,
            Bengaluru, with a profound expertise in modern web technologies. My
            core strengths lie in leveraging advanced frontend frameworks such as
            React and Next.js to architect scalable and responsive user
            interfaces. Proficient in state management, I frequently employ Redux
            to manage application states efficiently, ensuring seamless user
            experiences. I also possess hands-on experience in implementing
            dynamic styling using Tailwind CSS, optimizing both performance and
            aesthetic appeal.
          </p>
          <br />
          <p>
            My technical acumen extends to backend integration through RESTful
            APIs, enabling robust data communication and seamless application
            functionality. I am adept at utilizing Git and GitHub for version
            control, ensuring collaborative and streamlined development workflows
            Recognized for my technical prowess, I have earned esteemed
            certificates in React and Front End Development from Coding Ninjas,
            underscoring my commitment to continuous learning and professional
            growth.I am passionate about staying abreast of the latest
            technological advancements and best practices in the industry. As a
            proactive problem-solver with a keen eye for detail, I am always eager
            to tackle new challenges and contribute to transformative projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
