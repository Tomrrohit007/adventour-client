import React from "react";
import { useNavigate} from "react-router-dom"
import monthYearString from "./randomMonth";

const TourSection = (props)=>{
  const {tours, heading} = props
  const navigate = useNavigate()

  const TourCard = (props) => {
    const {
      id,
      name,
      duration,
      summary,
      imageCover,
      difficulty,
      startLocation,
      locations,
      maxGroupSize,
      price,
      ratingsAverage,
      ratingsQuantity,
    } = props;

  
    const icons = [
      {
        title: startLocation.description,
        icon: "/src/assets/location.png",
      },
      {
        title: monthYearString,
        icon: "/src/assets/schedule.png",
      },
      {
        title: `${locations.length} stops`,
        icon: "/src/assets/flag.png",
      },
      {
        title: `${maxGroupSize} people`,
        icon: "/src/assets/groups.png",
      },
    ];

    return(
    <li className="tour-card list-type-none h-[550px] w-[340px] rounded-sm bg-[#fff]">
      <div className="tour-card-image-section relative">
        <img src={imageCover} />
        <h1>{name.split(" ").splice(0, 2).join(" ")}</h1>
        <h1>{name.split(" ")[2]}</h1>
        <div />
      </div>
      <div className="text-cont px-6 py-6 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h1 className="text-[#727272] text-[22px] font- font-semibold flex items-center gap-2">
            ${price}.99
          </h1>
          <span className="text-[#5a5a5a] text-[10px] font- font-semibold flex items-center gap-1">
            <img src="src/assets/star.png" className="w-4" alt="rating stars" />
            <h1 className="text-[12px] flex mt-[3px]">
              {`${ratingsAverage}`.length === 3
                ? ratingsAverage
                : `${ratingsAverage}.0`}
            </h1>
            <p className="flex items-center mt-[4px]">
               ({ratingsQuantity})
            </p>
          </span>
        </div>
        <p className="uppercase text-[12px] font-semibold text-[#6e6e6e] tracking-[1px] mt-2">
          {difficulty} {duration}-day tour
        </p>
        <p className="text-[14px] font-[100] text-[#8d8d8d] leading-6 italic">
          {summary}
        </p>
        <ul className="icons-cont flex flex-wrap justify-between gap-4 mt-2">
          {icons.map((each, i) => (
            <span
              key={each.title}
              className={`flex gap-2 items-center basis-[47%] ${
                i % 2 !== 0 && "justify-end"
              }`}
            >
              <img
                className={`w-6 ${
                  each.icon === "/src/assets/flag.png" && "w-5"
                }`}
                src={each.icon}
                alt={each.title}
              />
              <p className="text-[12px] text-[#8b8b8b]">{each.title}</p>
            </span>
          ))}
        </ul>
        <button className="w-full bg-[#0ac587] hover:bg-[#2fdfa2e8] transition-[background-color] mt-2 py-2 rounded-sm text-[14px] font-semibold tracking-[2px] text-[#ffffff]"
        onClick={()=>{
          navigate(`/tours/${id}`)
        }}
        >
          DETAILS
        </button>
      </div>
    </li>
  );
};

  return (
    <div className="tour-cont z-10">
      <h1 className="tracking-[3px] text-center md:tracking-[6px] font-semibold">
        {heading}
      </h1>
      <ul className="flex justify-evenly flex-wrap gap-4 gap-y-12 mt-10">
        {tours.map((each) => (
          <TourCard key={each.id} {...each} />
        ))}
      </ul>
    </div>
  );
};

export default TourSection
