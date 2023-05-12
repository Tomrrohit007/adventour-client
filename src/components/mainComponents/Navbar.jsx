import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion as m } from "framer-motion";
import Modal from "./Modal";

const Navbar = () => {
  const navLinks = useMemo(() => {
    return [
      { name: "Home", value: "/" },
      { name: "Tours", value: "/tours" },
      { name: "Profile", value: "/profile" },
    ];
  }, []);

  const [toggle, setToggle] = useState(false);
  const active = useLocation().pathname;

  const toggleBar = () => {
    setToggle((prev) => !prev);
  };

  const MobileNav = () => {
    return (
      <div
        className={`mobile-ham`}
        aria-expanded={toggle.toString()}
      >
        <ul className="nav-item-list list-none w-screen h-screen flex justify-center gap-8 flex-col items-center ">
          {navLinks.map((nav, index) => (
            <li
              className={`font-poppins select-none font-semibold cursor-pointer text-[1rem] text-[#0f6e52] border-b-[3px] border-[#06613e] hover:border-[#06613e5d] ${
                navLinks.length - 1 === index ? "mr-0" : "mb-10"
              }`}
              key={nav.name}
            >
              <Link to={nav.value}>
                <button onClick={setToggle}>{nav.name}</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <nav className="relative navbar bg-[#333] h-[70px] md:h-[85px] px-8 md:px-[80px] flex items-center justify-between">
        <Link to="/">
          <button className="button flex items-center gap-3">
            <img
              src="../../src/assets/logo.webp"
              alt="logo"
              className="h-[60px] md:h-[75px]"
            />
            <span className="text-[28px] hidden md:flex font-semibold">
              Aventour
            </span>
          </button>
        </Link>
        <ul className={`hidden md:flex text-[#cccbcb] items-center gap-[40px]`}>
          {navLinks.map((each) => (
            <li
              className={`${
                active === each.value && "text-white font-semibold"
              } relative hover:font-semibold hover:text-white`}
              key={each.name}
            >
              {active === each.value && (
                <m.div
                  layoutId="active-link"
                  transition={{
                    type: "spring",
                    duration: 0.6,
                  }}
                  style={{ borderRadius: 100 }}
                  className="absolute bg-white z-[10] inset-0 top-[95%]  h-[3px]"
                />
              )}
              <Link to={each.value}>{each.name}</Link>
            </li>
          ))}
          <Modal />
        </ul>
        <div className="sm:block md:hidden">
          <svg
            className="button-three z-30 absolute"
            aria-controls="primary-navigation"
            aria-expanded={toggle.toString()}
            onClick={toggleBar}
            stroke="#fff"
            fill="none"
            viewBox="-25 -40 180 180"
            width="60"
          >
            <path
              className="line"
              strokeWidth="20"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m 15 20 h 100 a 1 1 0 0 1 0 45 h -100 a 1 1 0 0 1 0 -60 h 55 a 1 1 0 0 1 1 1 v 140"
            ></path>
          </svg>
          <MobileNav />
        </div>
      </nav>
      <div className="h-[70px] md:h-[85px]" />
    </>
  );
};

export default Navbar;
