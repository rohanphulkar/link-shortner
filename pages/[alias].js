import React, { useEffect } from "react";
const Alias = ({ data }) => {
  function handleClick() {
    // do something meaningful, Promises, if/else, whatever, and then
    window.location.assign(`${data.link}`);
  }
  useEffect(() => handleClick());
  return <div className="text-center text-3xl">Redirecting.....</div>;
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
