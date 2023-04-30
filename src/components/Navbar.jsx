import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion as m } from "framer-motion";
const navLinks = [
  { name: "Home", value: "/" },
  { name: "All Tours", value: "/all-tours" },
  { name: "Profile", value: "/profile" },
];

const Navbar = () => {
  const active = useLocation().pathname;
  return (
    <>
      <nav className="navbar bg-[#333] h-[70px] md:h-[85px] px-8 md:px-[80px] flex items-center justify-between">
        <Link to="/">
          <button className="button flex items-center gap-3">
            <img src="src/assets/logo.webp" alt="logo" className="h-[60px] md:h-[75px]" />
            <span className="text-[28px] hidden md:flex font-semibold">
              Aventour
            </span>
          </button>
        </Link>
        <ul className={`hidden md:flex text-[#cccbcb] items-center gap-[40px]`}>
          {navLinks.map((each) => (
            <li
              className={`${active === each.value && "text-white"} relative`}
              key={each.name}
            >
                {active === each.value && (
                  <m.div
                    layoutId="active-link"
                    transition={{ duration: 0.2, ease:"easeInOut" }}
                    className="absolute bg-white z-[10] top-[95%] bottom-[-5%] left-0 right-0 rounded-full"
                  />
                  )}
              <Link to={each.value}>
                {each.name}
              </Link>
            </li>
          ))}
          <button className="login-btn">Login</button>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
