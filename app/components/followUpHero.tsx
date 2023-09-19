"use client";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { BsChevronCompactLeft } from "@react-icons/all-files/bs/BsChevronCompactLeft";
import { BsChevronCompactRight } from "@react-icons/all-files/bs/BsChevronCompactRight";
import { BsDot } from "@react-icons/all-files/bs/BsDot";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const FollowUpHero = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1573812331441-d99117496acb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1668015642046-22044ddc7247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496438296155-bd1e7ece2b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];
  const [carouselCounterPosition, setCarouselCounterPosition] = useState(0);

  const handleLeftButtonClick = () => {
    const isItFirstIndex = carouselCounterPosition === 0;
    const newIndex = isItFirstIndex
      ? slides.length - 1
      : carouselCounterPosition - 1;
    setCarouselCounterPosition(newIndex);
  };

  const handleRightButtonClick = () => {
    const isItLastIndex = carouselCounterPosition === slides.length - 1;
    const newIndex = isItLastIndex ? 0 : carouselCounterPosition + 1;
    setCarouselCounterPosition(newIndex);
  };

  const goToSlide = (index: number) => {
    setCarouselCounterPosition(index);
  };

  return (
    <div id="aboutUs" className="w-full flex flex-col h-full pt-20 px-10 gap-4">
      <h1
        className={`${roboto.className} px-4 text-lg font-light text-[#0E585F]`}
      >
        Our Philosophy
      </h1>
      <p className="max-w-[680px] text-3xl font-light px-4 z-10">
        Welcome to Flock Travels! As a leading name in the travel industry, we
        take pride in curating immersive and{" "}
        <span className="font-normal">
          unforgettable experiences for every traveler
        </span>
        .
      </p>
      <div className="self-center w-[100%] max-w-[1400px] h-[700px] flex flex-col justify-between py-16 px-4 relative right-0 group">
        <div
          style={{
            backgroundImage: `url(${slides[carouselCounterPosition].url})`,
          }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        <div className="hidden group-hover:duration-300 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft size={30} onClick={handleLeftButtonClick} />
        </div>
        <div className="hidden  group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight size={30} onClick={handleRightButtonClick} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div className="text-3xl hover:cursor-pointer duration-700 hover:text-4xl">
              <BsDot onClick={() => goToSlide(slideIndex)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FollowUpHero;
