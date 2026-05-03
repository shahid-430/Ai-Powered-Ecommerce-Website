import React from 'react'
import my4 from "../assets/image5.png"
import my1 from "../assets/image2.png"
import my2 from "../assets/image3.png"
import my3 from "../assets/image4.png"

function Background({ heroCount }) {

  const images = [my4, my1, my2, my3];

  return (
    <img
      src={images[heroCount]}
      alt=""
      className="absolute right-[20px] top-[20px] rounded-lg right-0 w-1/2  border-l-4 border-white h-[560px] "
    />
  );
}

export default Background;