import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
const Home = () => {
  const [createdLink, setCreatedLink] = useState("");
  const [url, setUrl] = useState("");
  const [clickToCopy, setClickToCopy] = useState("Click to copy");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`https://linkrr-backend.herokuapp.com/link/add`, {
      method: "POST",
      body: JSON.stringify({
        link: url,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCreatedLink(data["alias"]);
        setLoading(false);
        toast.success("Link successfully created", {
          position: "top-center",
          autoClose: 4000,
          theme: "dark",
        });
      });
  };
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <div className=" w-full">
          <div className="">
            <div className="container m-auto px-6 md:pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
              <div className="flex items-center flex-wrap px-2 md:px-0">
                <div className=" lg:w-6/12 lg:py-24 xl:py-32">
                  <h1 className="font-bold text-4xl text-gray-900 md:text-5xl lg:w-10/12">
                    Linkrr - for a better web
                  </h1>
                  <form
                    action=""
                    method="POST"
                    onSubmit={handleSubmit}
                    className="w-full mt-12"
                  >
                    <div className=" flex p-1 rounded-full items-center bg-white border border-gray-200 shadow-md md:p-2">
                      <input
                        placeholder="Paste link here......"
                        className="w-full p-4 rounded-full focus:outline-none "
                        type="text"
                        name="link"
                        id="link"
                        onChange={(e) => setUrl(e.target.value)}
                      />
                      <button className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-gray-700 to-gray-900 hover:to-gray-600  focus:from-gray-900 md:px-12">
                        {loading ? (
                          <div className="flex items-center justify-center space-x-2 p-2">
                            <div className="w-2 h-2 rounded-full animate-pulse bg-white" />
                            <div className="w-2 h-2 rounded-full animate-pulse bg-white" />
                            <div className="w-2 h-2 rounded-full animate-pulse bg-white" />
                          </div>
                        ) : (
                          <span className="text-yellow-50 font-semibold ">
                            Create
                          </span>
                        )}
                      </button>
                    </div>
                  </form>
                  {createdLink && (
                    <div className=" ">
                      <div
                        className="flex justify-center items-center my-5  p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-full "
                        role="alert"
                      >
                        <div className="flex justify-between">
                          <a
                            passhref=""
                            className="text-base cursor-pointer md:text-lg font-medium"
                            target="_blank"
                          >
                            ‘https://linkrr.xyz/{createdLink}’
                          </a>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `https://linkrr.xyz/${createdLink}`
                          );
                          setClickToCopy("Copied !");
                          setTimeout(() => {
                            setClickToCopy("Click to copy");
                          }, [4000]);
                        }}
                        className="px-8 w-full py-3 font-semibold rounded-full bg-gray-900 text-gray-50"
                      >
                        {clickToCopy}
                      </button>
                    </div>
                  )}

                  <p className="mt-8 text-lg text-gray-700 lg:w-10/12">
                    Linkrr is a free, easy-to-use URL shortening service that
                    helps you protect your links and share them across the web.
                  </p>
                </div>
                <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
                  <img
                    src="/img/hero.svg"
                    className=""
                    alt="hero"
                    loading="lazy"
                    width={450}
                    height={450}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
