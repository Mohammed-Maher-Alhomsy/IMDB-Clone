"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!search) return;

    router.push(`/search/${search}`);
    setSearch("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex max-w-6xl mx-auto justify-between items-center"
    >
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
      />

      <button
        disabled={!search}
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
