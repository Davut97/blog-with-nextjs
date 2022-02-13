import React from "react";
import Image from "next/image";
import Link from "next/link";
const YoutubeVideos = ({ videosLink }) => {
  return (
    <div className='lg:col-span-1 col-span-1'>
      <iframe
        width='100%'
        height='500'
        src={`https://www.youtube.com/embed/${videosLink}`}
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default YoutubeVideos;
