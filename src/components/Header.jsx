import React from "react";
import HeroDesktop from "../images/image-hero-desktop.png";
import HeroMobile from "../images/image-hero-mobile.png";
import DataBiz from "../images/client-databiz.svg";
import AudioPhile from "../images/client-audiophile.svg";
import Meet from "../images/client-meet.svg";
import Maker from "../images/client-maker.svg";

export default function Header() {
  return (
    <div className=" flex flex-col md:flex-row items-center bg-gray-50">
      <div className="flex-1 text-center md:text-left p-6 md:p-16 flex flex-col gap-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Make remote work
        </h1>
        <p className="text-gray-600 text-lg">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="px-8 py-4 text-white hover:text-black bg-black hover:bg-gray-50 font-bold rounded-lg border-2 border-black inline-block ">
          Learn more
        </button>
        <div className="flex justify-center md:justify-start gap-6 mt-4">
          <div>
            <img src={DataBiz} alt="Databiz" className="h-8 md:6" />
          </div>
          <div>
            <img src={AudioPhile} alt="Audiophile" className="h-8 md:6" />
          </div>
          <div>
            <img src={Meet} alt="Meet" className="h-8 md:6" />
          </div>
          <div>
            <img src={Maker} alt="Maker" className="h-8 md:6" />
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <picture>
          <source className="" srcSet={HeroDesktop} media="(min-width: 556px)" />
          <img
            src={HeroMobile}
            alt="Hero Section"
            className="max-w-3/4 object-cover p-6"
          />
        </picture>
      </div>
    </div>
  );
}
