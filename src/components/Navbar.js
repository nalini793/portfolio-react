import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Navbar() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("NaliniResume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "NaliniResume.pdf";
        alink.click();
      });
    });
  };
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="#about"
          className="title-font font-medium text-white mb-4 md:mb-0"
        >
          <a href="#about" className="ml-3 text-xl ">
            Nalini Mahajan
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white ">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
          <a href="#blogs" className="mr-5 hover:text-white">
            Food For Thought
          </a>
        </nav>
        <div className="inline-flex items-center">
          <a
            className="mr-3 focus:outline-none hover:bg-gray-700 rounded-3xl text-base mt-4 md:mt-0"
            href="https://www.linkedin.com/in/nalini-mahajan-3784906a/"
            target="blank"
          >
            <img
              className="w-8 h-8"
              alt="LinkedIn Link"
              src="./icons8-linkedin-circled.svg"
            />
          </a>
          <a
            className="mr-3 focus:outline-none hover:bg-gray-700 rounded-3xl text-base mt-4 md:mt-0"
            href="https://github.com/nalini793"
            target="blank"
          >
            <img
              className="w-8 h-8"
              alt="Github Link"
              src="./icons8-github.svg"
            />
          </a>
          <button
            onClick={onButtonClick}
            className="mr-3 focus:outline-none hover:bg-gray-700 rounded-lg text-base mt-4 md:mt-0"
          >
            <img
              className="w-8 h-8"
              alt="Download Resume"
              src="./icons8-resume-64.png"
            />
          </button>
          <a
            href="#contact"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            Hire Me<span> </span>
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </header>
  );
}
