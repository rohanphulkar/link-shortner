import React, { useEffect } from "react";
import Head from "next/head";
const Alias = ({ data }) => {
  function handleClick() {
    // do something meaningful, Promises, if/else, whatever, and then
    window.location.assign(`${data.link}`);
  }
  useEffect(() => handleClick());
  return (
    <>
      <Head>
        <title>Redirecting....</title>
      </Head>
      <div className="text-center text-3xl">Redirecting.....</div>
    </>
  );
};

export default Alias;

export async function getServerSideProps(context) {
  const { params } = context;
  const { alias } = params;
  const res = await fetch(`https://linkrr-backend.herokuapp.com/link/${alias}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
