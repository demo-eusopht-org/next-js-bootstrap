"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({
  color = "#fff",
  btnBg = "#ffff",
  btnColor = "#0077B5",
  hamburgerColor = "#fff",
}) => {
  const [showNav, setShowNav] = useState(false);

  const sidebarRef = useRef(null);

  // Close the sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="container py-3 d-flex justify-content-between align-items-center ">
        {/* Logo */}
        <Link
          style={{ color: color, textDecoration: "none" }}

          href="/">
          <span
            id="decoration-none"
            className="display-5 fw-bold decoration-none "
            style={{ color: color }}
          >
            Jones.com
          </span>
        </Link>

        {/* Links for Desktop */}
        <div className="d-none d-md-flex align-items-center gap-3">
          <Link href="/" className="nav-link" style={{ color: color }}>
            Home
          </Link>
          <Link href="/buy" className="nav-link" style={{ color: color }}>
            Buy
          </Link>
          <Link href="/sell" className="nav-link" style={{ color: color }}>
            Sell
          </Link>
          <Link href="/faq" className="nav-link" style={{ color: color }}>
            FAQ
          </Link>
          <button
            className="tw-border-none tw-outline-none tw-py-2 rounded"
            style={{ backgroundColor: btnBg, color: btnColor, width: "8rem" }}
          >
            Signup
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <GiHamburgerMenu
          onClick={() => setShowNav(!showNav)}
          className="d-md-none"
          style={{ color: hamburgerColor, fontSize: "1.5rem", cursor: "pointer" }}
        />
      </div>

      {/* Overlay */}
      {showNav && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 z-3"
          onClick={() => setShowNav(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`position-fixed top-0 start-0 tw-z-1000 w-50 h-100 bg-dark text-white p-4  ${showNav ? "translate-x-0" : "translate-x-n100"
          }`}
        style={{
          transition: "transform 0.3s",
          transform: showNav ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <h3 className="text-center fw-bold py-3">JONES.COM</h3>
        <Link href="/" className="d-block mb-2 text-decoration-none text-white">
          Home
        </Link>
        <Link
          href="/buy"
          className="d-block mb-2 text-decoration-none text-white"
        >
          Buy
        </Link>
        <Link
          href="/sell"
          className="d-block mb-2 text-decoration-none text-white"
        >
          Sell
        </Link>
        <Link
          href="/faq"
          className="d-block mb-4 text-decoration-none text-white"
        >
          FAQ
        </Link>
        <button
          className="btn w-100 rounded"
          style={{ backgroundColor: "#0077B5", color: "#fff" }}
        >
          Signup
        </button>
      </div>
    </>
  );
};

export default Navbar;





























// "use client";
// import Link from "next/link";
// import React, { useState, useRef, useEffect } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";

// const Navbar = ({color = "#fff",btnBg = "#ffff",btnColor = "#0077B5",hamburgerColor = "#fff",}) => {
//     const [showNav, setShowNav] = useState(false);

//     const sidebarRef = useRef(null);

//     // Close the sidebar if clicked outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//                 setShowNav(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     return (
//         <>
//             {/* Navbar */}
//             <div className="container py-5  flex justify-between items-center max-h-fit">
//                 <Link href={"/"}>
//                     <h1 className={`text-2xl font-bold sm:text-4xl text-[${color}] sm:font-extrabold hover:border-b ${btnColor!="#0077B5" && "hover:border-b-[#0077B5]"}`}>Jones.com</h1>
//                 </Link>

//                 {/* Links for Desktop */}
//                 <div className="hidden md:flex items-center gap-x-6">
//                     <Link href={"/"} className={`text-[${color}] cursor-pointer hover:border-b ${btnColor!="#0077B5" && "hover:border-b-[#0077B5]"}`}>Home</Link>
//                     <Link href={"/buy"} className={`text-[${color}] cursor-pointer hover:border-b ${btnColor!="#0077B5" && "hover:border-b-[#0077B5]"}`}>Buy</Link>
//                     <Link href={"/sell"} className={`text-[${color}] cursor-pointer hover:border-b ${btnColor!="#0077B5" && "hover:border-b-[#0077B5]"}`}>Sell</Link>
//                     <Link href={"/faq"} className={`text-[${color}] cursor-pointer hover:border-b ${btnColor!="#0077B5" && "hover:border-b-[#0077B5]"}`}>FAQ</Link>
//                     <button style={{ backgroundColor: btnBg }} className={`text-[${btnColor}] w-[8rem] h-[2.3rem] rounded-md`}>Signup</button>
//                 </div>

//                 {/* Hamburger Icon for Mobile */}
//                 <GiHamburgerMenu
//                     onClick={() => setShowNav(!showNav)}
//                     className={`md:hidden block text-[${hamburgerColor}] cursor-pointer`}
//                 />
//             </div>

//             {/* Overlay */}
//             {showNav && ( <div className="fixed inset-0 bg-black bg-opacity-50 z-40"onClick={() => setShowNav(false)}></div>)}

//             {/* Sidebar */}
//             <div ref={sidebarRef} className={`fixed top-0 left-0 z-50 w-[12rem] h-full bg-[#07132D] px-5 transition-transform duration-300 ${showNav ? "translate-x-0" : "-translate-x-full"}`}>
//                 <h1 className="text-center text-white py-10 font-bold text-[1.2rem]">JONES.COM</h1>
//                 <Link href={"/"} className="text-[#fff] cursor-pointer block mb-2">Home</Link>
//                 <Link href={"/buy"} className="text-[#fff] cursor-pointer block mb-2">Buy</Link>
//                 <Link href={"/sell"} className="text-[#fff] cursor-pointer block mb-2">Sell</Link>
//                 <Link href={"/faq"} className="text-[#fff] cursor-pointer block mb-4">FAQ</Link>
//                 <button style={{ backgroundColor: "#0077B5" }} className={`button2 text-[${"#fff"}] w-full h-[2.3rem] rounded-md`}>Signup</button>
//             </div>
//         </>
//     );
// };

// export default Navbar;
