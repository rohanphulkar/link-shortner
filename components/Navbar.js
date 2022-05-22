import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <nav className="w-full bg-white  md:bg-transparent">
        <div className="container m-auto px-2 md:px-12 lg:px-7">
          <div className="flex items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
            <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
              <Link href="/">
                <a aria-label="logo" className="flex space-x-2 items-center">
                  <div className="flex items-center mx-auto justify-center">
                    <img src="/img/logo.png" alt="logo " className="w-12" />
                    <h1 className="text-3xl font-bold text-black mx-2 ">
                      Linkrr
                    </h1>
                  </div>
                </a>
              </Link>
            </div>
            <div className="w-full flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
              <div className="text-gray-900 ">
                <ul className="space-y-6 tracking-wide font-medium  text-sm md:flex md:space-y-0">
                  <li className="text-md font-medium">
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
