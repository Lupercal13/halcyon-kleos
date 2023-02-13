import React from "react";
import News from "./News";

const About = () => {
  return (
    <div id="about" className=" mt-0 pt-0 mx-auto w-[75%] grid md:grid-cols-2">
      <div className="flex justify-center items-center text-gray-100 pl-8 ">
        <p className="text-lg tracking-wide text-gray-200  ">
          British DJ/Producer specializing in organ house music. I have been
          interested in the this particular style since the release of 'Robin S
          - Show Me Love' and 'Nightcrawlers - Push The Feeling On' from back in
          the 90's. The 'Organ' has continued it's progression throughout the
          years becoming one of the most distinctive and loved sounds in dance
          music history. It has found it's way into many genres and continues to
          transition through current mainstream and underground music.
        </p>
      </div>
      <div className="flex flex-col pt-20">
        <p className="text-gray-100 text-2xl text-center font-bold ">
          Latest News
        </p>
        <News />
      </div>
    </div>
  );
};

export default About;
