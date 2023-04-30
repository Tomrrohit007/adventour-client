import { lazy, useEffect, useState } from "react";
import { getRequest } from "../utils/APIendpoints";
const cards = [
  {
    title: "EXPLORE THE WORLD",
    description:
      "Embark on a journey of discovery to the world’s most iconic landmarks and hidden gems with our curated travel experiences.",
    image: "src/assets/globe.gif",
  },
  {
    title: "MEET NATURE",
    description:
      "Get up close and personal with Mother Nature and explore the breathtaking beauty of our natural wonders with our eco-tours and wildlife encounters.",
    image: "src/assets/compass.gif",
  },
  {
    title: "FIND YOUR WAY",
    description:
      "Chart your own course and unlock your full potential with our personalized coaching, mentorship, and personal development programs.",
    image: "src/assets/map.gif",
  },
  {
    title: "LIVE A HEALTHIER LIFE",
    description:
      "Transform your health and wellbeing with our fitness classes, nutrition counseling, and wellness retreats, and live your best life.",
    image: "src/assets/running.gif",
  },
];

const reviews = [
  {
    name: "Aria Mary",
    title: "THE SEA EXPLORER",
    description: `I recently used this tour app to plan a family vacation. Thank you for helping us make unforgettable memories with our loved ones!`,
    image: "https://natours.netlify.app/img/nat-8.jpg",
  },
  {
    name: "Gary Grey",
    title: "THE FOREST HIKER",
    description:
      "I had the pleasure of using this tour app to plan my family's vacation and it was an incredible experience.",
    image: "https://natours.netlify.app/img/nat-9.jpg",
  },
];

const TourCard = lazy(() => import("./TourCard"));

const Home = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const getTours = () => {
      getRequest("http://localhost:4000/tours?limit=3", setTours);
    };
    getTours()
  }, []);
  const Hero = () => {
    return (
      <section className="hero-main flex flex-col justify-center items-center gap-10 bg-gradient-to-br from-green-400 to-blue-500 text-center ">
        <h1 className="text-4xl lg:text-7xl font-semibold text-white tracking-[12px] md:tracking-[50px]">
          OUTDOORS
        </h1>
        <p className="text-xl lg:text-2xl text-white tracking-[6px] md:tracking-[16px] font-semibold">
          WHERE LIFE HAPPENS
        </p>
        <button className="bg-white text-blue-500 rounded-full py-3 px-6 mt-8 hover:bg-[#93ffcd] hover:shadow-lg transition-all duration-300 ease-in-out">
          DISCOVER OUR TOURS
        </button>
      </section>
    );
  };

  const About = () => {
    return (
      <div className="about-cont">
        <h1>EXCITING TOURS FOR ADVENTUROUS PEOPLE</h1>
        <div className="about-content">
          <h2>YOU'RE GOING TO FALL IN LOVE WITH NATURE</h2>
          <p>
            Nature has a way of capturing our hearts and souls with its serene
            beauty, majestic landscapes, and enchanting wildlife. From the
            tranquility of a forest to the vastness of the ocean, there is
            something incredibly captivating about the natural world that draws
            us in. Get out there, immerse yourself in nature, and allow yourself
            to fall in love with its magic.
          </p>
          <h2>LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE</h2>
          <p>
            Get ready for an adventure like no other with our live events.
            Offering a unique and unparalleled experience, you'll have the
            chance to explore thrilling new activities and discover the world in
            a whole new way. Come and join us for a journey you'll never forget.
          </p>
        </div>
        <div className="image-wrapper">
          <img
            className="image-1"
            src="src/assets/nat-1.webp"
            alt="forests image"
          />
          <img
            className="image-2"
            src="src/assets/nat-2.webp"
            alt="montains image"
          />
          <img
            className="image-3"
            src="src/assets/nat-3.webp"
            alt="plains image"
          />
        </div>
      </div>
    );
  };

  const Details = () => {
    return (
      <section className="details flex flex-col justify-center items-center gap-3 ">
        <div className="image-cont" />
        <div className="inline-cont" />
        <ul>
          {cards.map((each) => (
            <li
              className="bg-[#e6e6e6] h-[220px] lg:h-[320px] w-[240px] flex-grow flex items-center font-extrabold rounded-[8px] flex-col justify-center gap-4"
              key={each.title}
            >
              <img className="icons" src={each.image} alt={each.title} />
              <h1 className="font-semibold md:text-[20px] text-[#504e4e]">
                {each.title}
              </h1>
              <p className="text-[11px] md:text-[13px] px-4 text-[#6d6d6d] flex-grow-1">
                {each.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    );
  };

  const Reviews = () => {
    return (
      <div className="relative">
        <div className="feedback-cont">
          <img src="src/assets/video.webp" alt="ocean" />
          <div className="feedback">
            <h1 className="text-[23px] md:text-[50px] tracking-[3px] md:tracking-[6px] font-semibold">
              WE MAKE PEOPLE GENUINELY HAPPY
            </h1>
            <ul className="flex flex-col items-center gap-[40px] px-5 md:p-100">
              {reviews.map((each) => (
                <li
                  className="feedback-card w-full md:w-[70%] h-[220px] md:h-[260px] bg-gray-100 p-7 md:p-8 rounded list-none"
                  key={each.title}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-3 h-3 md:w-5 md:h-5  text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6 font-semibold text-[#727272] text-[12px] md:text-[16px] ">
                    {each.description}
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src={each.image}
                      className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font text-[#6d6d6d] font-bold text-[12px] md:text-[20px]">
                        {each.title}
                      </span>
                      <span className="text-gray-500 text-sm">{each.name}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ContactSection />
        <Footer />
      </div>
    );
  };

  const ContactSection = () => {
    return (
      <div className="contact-section">
        <div className="image-card">
          <div className="w-full h-full md:w-[50%] relative z-10 flex flex-col justify-center items-center gap-8">
            <h1 className="text-[--h1-color] md:text-[36px] text-[20px] font-semibold tracking-[2px] md:tracking-[5px]">
              START BOOKING NOW
            </h1>
            <form className="flex flex-col items-center gap-6 px-4">
              <input
                type="text"
                className="h-[50px] rounded-[4px] outline-none p-5 text-[16px] text-[#686868]"
                placeholder="Enter your full name"
              />
              <input
                type="email"
                className="h-[50px] rounded-[4px] outline-none p-5 text-[16px] text-[#686868]"
                placeholder="Enter your email"
              />
              <input
                type="phone"
                className="h-[50px] rounded-[4px] outline-none p-5 text-[16px] text-[#686868]"
                placeholder="Enter your number"
              />
              <div className="flex flex-col md:flex-row gap-1 ">
                <label className="label p-1 flex gap-2">
                  <input type="radio" name="tour" checked />
                  <span />
                  Small tour group
                </label>
                <label className="label p-1 flex gap-2">
                  <input type="radio" name="tour" />
                  <span />
                  Large tour group
                </label>
              </div>
              <button className="submit-btn w-[80%] text-[#e0e0e0] bg-[#707070] p-5 py-3 rounded-md">
                {`Submit ->`}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const Footer = () => {
    return (
      <footer className="flex justify-evenly md:p-7 p-3 footer bg-[#202020] gap-2 md:gap-10 ">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 border-r-2 px-2 md:px-4">
          <img
            src="src/assets/logo1.webp"
            className="w-[100px] md:w-[200px]"
            alt="logo"
          />
        </a>
        <p className="text-[12px] md:text-sm text-gray-500  flex items-center md:border-l-2 md:border-r-2 md:px-4">
          Copyright © by Rohit
          <span className="hidden md:flex pl-1">
            {" "}
            Tomar. You are 100% allowed to use this webpage, but NOT to claim it
            as your own design.
          </span>
        </p>
        <span className="flex items-center border-l-2 px-2 md:px-4">
          <a className="text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 md:w-5 md:h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 md:w-5 md:h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 md:w-5 md:h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-4 h-4 md:w-5 md:h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </footer>
    );
  };
  console.log(tours)

  const TourSection = () => {
    return (
      <div className="tour-cont z-10">
        <h1 className="tracking-[3px] text-center md:tracking-[6px] font-semibold">
          MOST POPULAR TOURS
        </h1>
        <ul className="flex justify-evenly flex-wrap gap-4 gap-y-12 mt-10">
          {tours.map((each)=><TourCard key={each.id} {...each} />)}
        </ul>
      </div>
    );
  };
  

  return (
    <div className="flex flex-col gap-[40px] md:gap-[70px] bg-[#e6e6e6]">
      <Hero />
      <About />
      <Details />
      <TourSection />
      <Reviews />
    </div>
  );
};

export default Home;
