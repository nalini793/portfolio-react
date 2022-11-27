import React from "react";
import { blogs } from "../Data";
import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";
const ReadingCorner = () => {
  return (
    <section id="blogs">
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-6">
          Browse along:
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-8">
          Every once in a while I come across people doing extraordinary things,
          showcasing their work, or just quenching their curiosity; all the
          while inspiring me in many ways. I would always like to have a
          dedicated corner in my space for these kinds of inspirations, ideas
          and solutions.
        </p>

        <div className="flex flex-wrap m-2">
          {blogs.map((testimonial) => (
            <a
              href={testimonial.url}
              target="blank"
              className="p-1 md:w-1/2 w-3/4 "
            >
              <div className="h-full bg-gray-800 bg-opacity-40 p-4 rounded hover:bg-gray-700 rounded text-lg">
                <CodeBracketSquareIcon className="inline w-8 text-gray-500 mb-1" />
                <span className="title-font font-small text-white ml-4">
                  {testimonial.name}
                </span>
                <p className="leading-relaxed text-base  mb-2">
                  {testimonial.quote}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadingCorner;
