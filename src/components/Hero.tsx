"use client";

import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleClicking = () => {
    alert("Sorry dynamically Images are not loading because of cost of APIs");
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x ">
        <h1 className="hero__title">Getting Car is Easy</h1>

        <p className="hero__subtitle">
          Find your dream car at affordable prices.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleClicking}
        />

        <p className="hero__subtitle">
          Sorry, Images are not loading dynamically because of costing of APIs, Since it is just a demo project , I am not using the paid version of APIs.
        </p>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/rolls.png" alt="hero" fill className="object-contain" />
        </div>
        {/* <div className="hero__image-overlay" /> */}
      </div>
    </div>
  );
};

export default Hero;
