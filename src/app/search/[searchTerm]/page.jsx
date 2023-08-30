import Results from "@/components/Results";
import React from "react";

const getData = async (keyword) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${keyword}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Error Fetching Data");
  }

  const data = await res.json();

  return data;
};

const Page = async ({ params }) => {
  const keyword = params.searchTerm;
  const data = await getData(keyword);
  const results = data.results;

  if (results && results.length === 0) {
    return <h1 className="text-center font-bold pt-6">No Results Found</h1>;
  }

  return (
    <div>
      <Results results={results} />
    </div>
  );
};

export default Page;
