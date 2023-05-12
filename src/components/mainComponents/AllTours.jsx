import { useState, useEffect } from "react";
import { apiUrl, getRequest } from "../../utils/APIendpoints";
import TourSection from "../reuseableComponents/TourSection";
import ContactSection from "../reuseableComponents/ContactSection";

const AllTours = () => {
  const [tours, setTours] = useState([]);



  useEffect(() => {
    const getTours = () => {
      getRequest(`${apiUrl}tours`, setTours);
    };
    getTours();
  }, []);


  return (
      <div className="pt-[60px] flex flex-col gap-y-20">
        <TourSection tours={tours} heading="ALL UPCOMING TOURS" />
        <ContactSection/>
      </div>
  );
};

export default AllTours;
