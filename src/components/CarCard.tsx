"use client";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import CardDetails from "./CardDetails";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  console.log(car);

  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p>
        <span className="font-bold">$</span> {carRent}
        <span className="text-sm">/day</span>
      </p>
      <div className="relative w-full h-40 my-3">
        <Image
          src="/hero.png"
          alt="car"
          priority
          fill
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray-300">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/steering-wheel.svg"}
              width={20}
              height={20}
              alt="steering-wheel"
            />
          </div>
          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{city_mpg} MPG</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-2">
        <CustomButton
          title="View More"
          containerStyles="w-full py-[16px] rounded-full bg-primary-blue hover:bg-red-400"
          textStyles="text-white text-[14px] leading-[17px] font-bold"
          rightIcon="/right-arrow.svg"
          handleClick={() => setIsOpen(true)}
        />
      </div>
      <CardDetails isOpen={isOpen} closeModel={() => setIsOpen(false)} />
    </div>
  );
};

export default CarCard;
