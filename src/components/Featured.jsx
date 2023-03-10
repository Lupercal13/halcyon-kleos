import React from "react";
import ReactPlayer from "react-player/soundcloud";

const Featured = () => {
  return (
    <div className="w-[75%] mx-auto h-auto flex flex-col justif-center items-center border-t-2  border-pink-600  pb-8">
      <h1 className=" text-3xl font-extrabold my-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
        Featured Track:
      </h1>
      <ReactPlayer
        url="https://soundcloud.com/halcyonkleos/halcyon-kleos-summer-house-organ-sessions-mix-part-19?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        width="100%"
        height="100px"
      />
      <p className="text-gray-100 text-sm tracking-wide">
        Like what you hear? Join me on{" "}
        <a
          href="https://www.mixcloud.com/halcyon_kleos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-pink-400">Mixcloud</span>
        </a>{" "}
        for all new and exclusive mixes
      </p>
    </div>
  );
};

export default Featured;
