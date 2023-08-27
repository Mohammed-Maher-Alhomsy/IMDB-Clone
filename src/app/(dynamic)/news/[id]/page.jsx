import React from "react";

const getDate = async (id) => {
  // const res = await fetch();

  console.log(id);
};

const News = ({ params }) => {
  console.log(params.id);

  getDate(1);

  return <div>News</div>;
};

export default News;
