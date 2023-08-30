import Image from "next/image";
import React from "react";

const getDate = async (movieID) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.API_KEY}`
  );

  const movieDate = await res.json();
  return movieDate;
};

const Page = async ({ params }) => {
  const movieID = params.id;
  const movieData = await getDate(movieID);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movieData.backdrop_path || movieData.poster_path
          }`}
          width={500}
          height={300}
          alt="Movie poster"
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{ maxWidth: "100%", height: "100%" }}
        />

        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movieData.title || movieData.name}
          </h2>

          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview: </span>
            {movieData.overview}
          </p>

          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movieData.release_date || movieData.first_air_date}
          </p>

          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movieData.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
