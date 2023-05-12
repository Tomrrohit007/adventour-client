import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/mainComponents/Navbar";
import Footer from "./components/reuseableComponents/FooterSection";
import "./index.css";

const Home = lazy(() => import("./components/mainComponents/Home"));
const AllTours = lazy(() => import("./components/mainComponents/AllTours"));
const Profile = lazy(() => import("./components/mainComponents/Profile"));
const TourDetail = lazy(() => import("./components/mainComponents/TourDetail"));
const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="bg-[#e6e6e6] relative">
      <Navbar />
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<AllTours />} />
          <Route path={`/tours/:id`} element={<TourDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
