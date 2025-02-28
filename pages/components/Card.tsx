import React from "react";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  heading1: string;
  heading2: string;
  text?: string;
  handleClick: () => void;
}

export const Card = ({
  imageSrc,
  heading1,
  heading2,
  handleClick,
}: CardProps) => {
  return (
    <div
      className="flex bg-[#0D1719] shadow-xl rounded-lg p-3 gap-4 items-center hover:cursor-pointer  h-24"
      onClick={() => {
        handleClick();
      }}
    >
      <Image
        src={imageSrc}
        alt="alt"
        width={70}
        height={150}
        className="rounded-lg"
      />
      <div className="font-poppins">
        <p className="font-semibold">{heading1}</p>
        <p className="text-gray-400 text-xs">{heading2}</p>
      </div>
    </div>
  );
};
