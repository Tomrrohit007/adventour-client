import { useState, useMemo } from "react";
import { motion as m, AnimatePresence } from "framer-motion";

const ReviewCarousel = ({ reviews }) => {
  const [direction, setDirection] = useState(1);

  const [count, setCount] = useState([0, 1, 2]);
  const [mobCount, setMobCount] = useState(0);

  let reviewsObj = useMemo(()=>{
    return reviews
  }, [])
  const reviewObj = useMemo(()=>{
  
  return [
    {
      title: "Amazing Experience!",
      description: "This tour app made my trip so much better. Highly recommend!",
    },
    {
      title: "Great App!",
      description: "Easy to use and helped me discover new places I never would have found on my own.",
    },
    {
      title: "Excellent Tour",
      description: "The tour guide provided by the app was knowledgeable and friendly. Learned so much!",
    },
    {
      title: "Fantastic!",
      description: "The app helped me plan my itinerary and made my trip stress-free.",
    },
    {
      title: "Incredible Value",
      description: "For the price, this app is an absolute steal. Don't hesitate to download!",
    },
    {
      title: "Must Visit",
      description: "This app is a game changer for anyone looking to explore a new place. Loved it!",
    },
  ]}, [])
  

  const variants = {
    initial: (direction) => ({ x: `${direction * 100}%` }),
    animate: { x: 0 },
    exit: (direction) => ({ x: `${direction * -100}%` }),
  };

  const handleNext = () => {
    if (count[2] !== 5) {
      setCount((prev) => [prev[0] + 1, prev[1] + 1, prev[2] + 1]);
      setDirection(1);
    }
  };
  const handlePrev = () => {
    if (count[0] !== 0) {
      setCount((prev) => [prev[0] - 1, prev[1] - 1, prev[2] - 1]);
      setDirection(-1);
    }
  };

  const HeadingSection = () => {
    return (
      <div className="detail-heading text-center ltr:sm:text-left rtl:sm:text-right">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Read reviews from our customers
        </h2>
      </div>
    );
  };

  const PrevButton = () => {
    return (
      <button
        className="prev-button rounded-full border border-green-600 p-3 text-green-600 hover:bg-green-600 hover:text-white"
        onClick={handlePrev}
      >
        <span className="sr-only">Previous Slide</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5 rtl:rotate-180"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    );
  };

  const NextButton = () => {
    return (
      <button
        className="next-button rounded-full border border-green-600 p-3 text-green-600 hover:bg-green-600 hover:text-white"
        onClick={handleNext}
      >
        <span className="sr-only">Next Slide</span>
        <svg
          className="h-5 w-5 rtl:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5l7 7-7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>
    );
  };

  const ReviewCard = ({ user, rating, createdAt, content }) => {
    return (
      <AnimatePresence custom={direction}>
        <m.div
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={direction}
          key={user.name}
          transition={{
            type:'spring',
            mass: 0.1,
            damping: 10,
            duration: 0.2,
          }}
          className="shadow-xl w-[300px]"
        >
          <blockquote className="flex h-full flex-col justify-between bg-white p-6">
            <div>
              <div className="flex gap-0.5 text-green-500">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
                <p className="text-[14px] p-3 pl-1 text-[#575757] font-semibold">{rating} stars rating</p>

              <div className="mt-4">
                <p className="text-[20px] w-[100%] font-bold text-green-600 sm:text-[20px]">
                  {content.title}
                </p>
                
                <p className="mt-4 leading-relaxed text-gray-500"> 
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-3 h-3 md:w-5 md:h-5  text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                
                {content.description}</p>
              </div>
            </div>

            <footer className="mt-8 text-sm text-gray-500 flex items-center gap-2">
              <img className="w-8 rounded-full" src={user.image} alt="user image" />{user.name}
            </footer>
          </blockquote>
        </m.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="">
      <div className="">
        <HeadingSection />
        <div className="swiper-wrapper flex justify-evenly px-4 gap-2 items-center mt-10">
          <PrevButton />
          <div className="reviews-slider flex justify-center gap-14 px-3 h-[360px] overflow-hidden">
            <ReviewCard {...reviewsObj[count[0]]} content={reviewObj[count[0]]} />
            <ReviewCard {...reviewsObj[count[1]]} content={reviewObj[count[1]]} />
            <ReviewCard {...reviewsObj[count[2]]} content={reviewObj[count[2]]} />
          </div>
          <NextButton />
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
