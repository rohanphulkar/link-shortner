import React from "react";
import { FiGithub, FiInstagram } from "react-icons/fi";
const about = () => {
  return (
    <div>
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
              Linkrr, shorten your links
            </h2>
            <p className="text-gray-800 lg:w-8/12 text-lg lg:mx-auto">
              Linkrr is a free web link shortener that allows you to shorten any
              link, and keep track of all the URLs you've shortened.
            </p>
          </div>
          <div className="grid mx-auto">
            <div className="space-y-4 text-center group">
              <div className="w-[14.5rem] h-[14.5rem] mx-auto rounded-full rotate-45 overflow-hidden md:w-40 md:h-40 lg:w-56 lg:h-56">
                <img
                  className="w-full h-full object-cover -rotate-45 scale-100 mx-auto transition duration-300 group-hover:scale-[1.1]"
                  src="/img/photo.jpg"
                  alt="rohanphulkar"
                  loading="lazy"
                  width={640}
                  height={805}
                />
              </div>
              <div className="pt-4">
                <h4 className="text-3xl font-semibold">Rohan Phulkar</h4>
              </div>
              <div className="flex justify-center space-x-4 text-gray-500">
                <a
                  href="https://github.com/rohanphulkar/"
                  target="_blank"
                  aria-label="github"
                >
                  <FiGithub size={28} />
                </a>
                <a
                  href="https://ww.instagram.com/_rohanphulkar/"
                  target="_blank"
                  aria-label="instagram"
                >
                  <FiInstagram size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
