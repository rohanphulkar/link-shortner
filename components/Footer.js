import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-full py-16 ">
        <div className="md:px-12 lg:px-28">
          <div className="container m-auto space-y-6 text-gray-600">
            <div className="flex items-center mx-auto justify-center">
              <img src="/img/logo.png" alt="logo " className="w-12" />
              <h1 className="text-3xl font-bold text-black mx-2 ">Linkrr</h1>
            </div>

            <div className="text-center">
              <span className="text-sm tracking-wide">
                Copyright © Linkrr 2022 | All right reserved
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
