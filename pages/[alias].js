import React, { useEffect } from "react";
const alias = ({ data }) => {
  function handleClick() {
    // do something meaningful, Promises, if/else, whatever, and then
    window.location.assign(`${data.link}`);
  }
  useEffect(() => handleClick());
  return <div className="text-center text-3xl">Redirecting.....</div>;
};

export default alias;

export async function getServerSideProps(context) {
  const { params } = context;
  const { alias } = params;
  const res = await fetch(`http://localhost:3001/link/${alias}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
