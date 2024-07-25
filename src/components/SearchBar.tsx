"use client";

import React from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className="searchbar__button">
      Search
    </button>
  );
};

const SearchBar = () => {
  return (
    <form className="searchbar" onSubmit={console.log("hello")}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={"manufacturer"}
          setManufacturer={() => {}}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="search"
          width={20}
          height={20}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={"model"}
          onChange={() => {}}
          placeholder="Search by car model"
          className="searchbar__input"
        />
        <SearchButton otherClasses={"sm: hidden"} />
      </div>
      <SearchButton otherClasses={"max-sm:hidden"} />
    </form>
  );
};

export default SearchBar;
