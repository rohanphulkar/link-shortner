import React from "react";
import Link from "next/link";
import Head from "next/head";
const NotFound = () => {
  return (
    <div>
      <Head>
        <title>Not Found</title>
      </Head>
      <section className="flex items-center h-full p-16 dark:bg-coolGray-900 dark:text-coolGray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-4 font-extrabold text-9xl dark:text-coolGray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl my-6">
              Sorry, we couldn&apos;t find this page.
            </p>
            <Link href="/">
              <a className="px-8 py-3 font-semibold rounded bg-gray-900 hover:bg-gray-800 text-white">
                Back to homepage
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
