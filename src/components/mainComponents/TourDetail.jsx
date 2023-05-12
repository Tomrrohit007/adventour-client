import React from "react";
import { useParams } from "react-router-dom";
import { getRequest, apiUrl } from "../../utils/APIendpoints";
import monthYearString from "../reuseableComponents/randomMonth";
import Carousel from "./Carousel";
import Map from "./Map";
import ContactSection from "../reuseableComponents/ContactSection";
import ReviewCarousel from "./ReviewCard";

const TourDetail = () => {
  const { id } = useParams();
  const [tour, setTour] = React.useState({});

  React.useEffect(() => {
    const getTour = async () => {
      getRequest(`${apiUrl}tours/${id}`, setTour);
    };
    getTour();
  }, []);

  console.log(tour);

  const {
    startLocation,
    name,
    duration,
    maxGroupSize,
    price,
    ratingsAverage,
    ratingsQuantity,
    summary,
    difficulty,
    description,
    imageCover,
    images,
    startDates,
    guides,
    locations,
    durationWeeks,
    reviews,
  } = tour;

  const arr = [
    {
      icon: "/src/assets/schedule.png",
      title: "NEXT DATE",
      desc: monthYearString,
    },
    {
      icon: "/src/assets/climb-arrow.png",
      title: "DIFFICULTY",
      desc: difficulty,
    },
    {
      icon: "/src/assets/groups.png",
      title: "PARTICIPANTS",
      desc: maxGroupSize,
    },
    {
      icon: "/src/assets/star-v.png",
      title: "RATING",
      desc: `${ratingsAverage}/${ratingsQuantity}`,
    },
  ];

  const leftSection = () => {
    return (
      <div className="w-[100%] md:w-[45%] px-4 z-10 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-6">
          <h1 className="detail-heading my-5">QUICK FACTS</h1>
          {arr.map((each) => (
            <span key={each.title} className="span-icons flex items-center gap-2 justify-between">
              <img
                className="h-[25px] px-6 brightness-[0.3]"
                src={each.icon}
                alt={each.title}
              />
              <p className="text-[15px] tracking-[2px] font-semibold w-[140px] text-[#5e5e5e]">
                {each.title}
              </p>
              <p className="text-[14px] tracking-[2px] text-[#757575] w-[150px] first-letter:uppercase">
                {each.desc}
              </p>
            </span>
          ))}
        </div>
        <div className="flex flex-col items-center gap-6">
          <h1 className="detail-heading my-5">YOUR TOUR GUIDES</h1>
          {guides &&
            guides.map((each) => (
              <span className="span-icons flex items-center gap-2 justify-between">
                <img src={each.image} className="h-[50px] px-3 rounded-[50%]" />
                <p className="text-[15px] tracking-[2px] font-semibold w-[140px] text-[#5e5e5e] uppercase">
                  {each.role}
                </p>
                <p className="text-[14px] tracking-[2px] text-[#757575] w-[150px] first-letter:uppercase">
                  {each.name}
                </p>
              </span>
            ))}
        </div>
      </div>
    );
  };

  const rightSection = () => {
    return (
      <div className="w-[100%] md:w-[50%] px-4 z-10 flex flex-col items-center gap-8">
        <h1 className="detail-heading my-5">ABOUT THE {name}</h1>
        <p className="leading-8 tracking-[1px] text-[#494949]">
          <span className="text-[24px] text-[#037750] font-semibold tracking-[3px] mr-2">
            {name}
          </span>
          is the perfect adventure for those looking to escape the hustle and
          bustle of city life and immerse themselves in the great outdoors. The
          tour offers a unique opportunity to stay in comfortable camping
          grounds located in some of the most beautiful national parks and
          scenic areas across the country. Guests will have access to a range of
          activities that will allow them to fully experience the beauty of
          nature, such as hiking through scenic trails, fishing in pristine
          lakes and streams, kayaking down winding rivers and observing wildlife
          in their natural habitat. The tour also offers
          <div className="py-3 h-[2px]" />
          Guided tours and educational sessions, providing participants with the
          opportunity to learn about the local ecosystems, flora, and fauna.
          With knowledgeable guides, guests can gain insight into the unique
          features of each area, including geological formations, plant and
          animal species, and historical landmarks. In addition to exploring the
          natural wonders of each location.
        </p>
      </div>
    );
  };

  return (
    <div className="tour-detail-section flex flex-col gap-10 md:gap-20">
      <div
        className="tour-hero overflow-hidden bg-cover h-[70vh] md:h-[100vh] bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${imageCover})` }}
      >
        <h1 className="text-[30px] md:text-[58px]">
          {name ? name.split(" ").splice(0, 2).join(" ") : ""}
        </h1>
        <h1 className="text-[30px] md:text-[58px]">
          {name ? name.split(" ")[2] : ""}
        </h1>
        <div className="flex gap-[100px] py-10">
          <span className="z-10 flex items-center gap-2 logo-span">
            <img
              src="/src/assets/time.png"
              alt="time icon"
              className="h-[25px]"
            />
            <p className="font-semibold text-white leading-10 textsha  pt-1">
              {duration} DAYS
            </p>
          </span>
          <span className="z-10 flex items-center gap-2 logo-span">
            <img
              src="/src/assets/location1.png"
              alt="location icon"
              className="h-[25px]"
            />
            <p className="font-semibold text-white leading-10  textsha pt-1">
              {startLocation ? startLocation.description : ""}
            </p>
          </span>
        </div>
      </div>
      <div className="inter-section flex justify-evenly items-center flex-wrap gap-y-6">
        <h1 className="overview w-full text-center detail-heading">OVERVIEW</h1>
        <div className="flex md:flex-row flex-col items-center gap-6 w-full">
          <Carousel images={images ? images : []} />
          <div className="w-full  md:w-[30%] flex flex-col gap-6 m-0 md:mx-12 md:items-start px-8 md:p-0 flex-grow">
            <p className="text-[30px] tracking-[5px] leading-6 text-[#5d6360] first-letter:uppercase flex gap-1">
              Duration - {duration} day
            </p>
            <p className="text-[14px] tracking-[3px] leading-8 text-[#6c7771] first-letter:uppercase flex gap-1">
              {summary}. Discover amazing destinations and book unforgettable
              experiences with ease. From breathtaking scenery to cultural
              hotspots, our app has something for everyone. Let's start
              exploring!
            </p>
            <div className="flex items-center gap-2">
              <p className="text-[30px] text-[#757575] font-semibold">
                $ {price}
              </p>
              <span className="text-[#757575] text-[14px] tracking-[3px] leading-8 first-letter:uppercase flex gap-1">
                per person
              </span>
            </div>
            <button className="md:w-[80%] w-full bg-[#0ac587] hover:bg-[#2fdfa2e8] transition-[background-color] mt-2 py-3 rounded-sm text-[14px] font-semibold tracking-[2px] text-[#ffffff]">
              Book Tour
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-2 flex-col md:flex-row">
        {leftSection()}
        {rightSection()}
      </div>

      {reviews && <ReviewCarousel reviews={reviews} />}
      <div className="p-2 flex justify-center flex-col items-center gap-1 py-8 md:gap-6 md:pb-14 w-full">
        <h1 className="detail-heading">MAP VIEW</h1>
        {startLocation !== undefined && (
          <Map {...startLocation} locations={locations} />
        )}
      </div>
      <ContactSection />
    </div>
  );
};

export default TourDetail;
