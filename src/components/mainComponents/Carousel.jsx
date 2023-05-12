import { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";

const Carousel = ({ images }) => {
  const [countArr, setCount] = useState([null, 0]);

  const direction = countArr[0] < countArr[1] ? 1 : -1;

  const variants = {
    initial: (direction) => ({ x: `${direction * 100}%` }),
    animate: {
      x: 0,
    },
    exit: (direction) => ({ x: `${direction * -100}%` }),
  };

  const absCount = Math.abs(countArr[1]);

  return (
    <div className="carousel w-full md:w-[50%] flex-grow h-full flex bg-[#e7e7e7] justify-center items-center py-8 rounded-[4px] gap-1">
      <button
        className=" hover:brightness-[0.9] hover:bg-[#d4f8e6] scale-75 md:scale-100"
        onClick={() => setCount((prev) => [prev[1], prev[1] - 1])}
      >
        <img src="/src/assets/left.png" alt="left" />
      </button>
      <div className="w-[380px] md:w-[600px] h-[250px] md:h-[400px] overflow-hidden flex justify-between items-center relative bg-black">
        <AnimatePresence custom={direction}>
          <m.img
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            transition={{
              type:'tween',
              duration:0.2
            }}
            custom={direction}
            className="absolute w-[380px] md:w-[600px] h-[250px] md:h-[400px]"
            src={images[absCount % 3]}
            alt="image"
            key={absCount % 3}
          />
        </AnimatePresence>
        <div className="absolute isolate z-10 inset-0top-[94%] bottom-[4%] flex justify-center items-center w-full gap-4">
          <span
            className={`w-2 h-2 p-1 bg-[#b4b4b4] brightness-50 rounded-full opacity-70 ${
              absCount % 3 === 0 && "scale-150 brightness-100"
            }`}
          />
          <span
            className={`w-2 h-2 p-1 bg-[#b4b4b4] brightness-50 rounded-full opacity-70 ${
              absCount % 3 === 1 && "scale-150 brightness-100"
            }`}
          />
          <span
            className={`w-2 h-2 p-1 bg-[#b4b4b4] brightness-50 rounded-full opacity-70 ${
              absCount % 3 === 2 && "scale-150 brightness-100"
            }`}
          />
        </div>
      </div>

      <button
        className="hover:brightness-[0.9] hover:bg-[#d4f8e6] p-[2px] scale-75 md:scale-100"
        onClick={() => setCount((prev) => [prev[1], prev[1] + 1])}
      >
        <img
          className="w-[40px]"
          src="/src/assets/right-arrow.png"
          alt="right"
        />
      </button>
    </div>
  );
};

export default Carousel;
