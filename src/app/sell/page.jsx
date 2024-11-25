"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Secure from "../../../public/assets/secure.svg";
import line_arrow from "../../../public/assets/images/line_arrow.webp";
import Image from "next/image";
import { IoGlobeOutline, IoSearch } from "react-icons/io5";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import "./style.scss"
const Page = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar color={"#0077B5"} btnBg={"#0077B5"} btnColor={"#fff"} hamburgerColor={"#000"} />

      {/* Hero Section */}
      <div className="container text-center py-5">
        <h1 className="display-5 fw-bold text-black tw-capitalize">The new way to buy domains</h1>
        <p className="mt-3 mx-auto" style={{ maxWidth: "650px" }} >
          No matter what kind of domain you want to buy or lease, we make the transfer simple and safe.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="d-flex  justify-content-center gap-4 align-items-center position-relative my-5 overflow-hidden">
        <Image src={line_arrow} alt="progress-bar" className="position-absolute w-100 tw-h-3" style={{ zIndex: -1 }} />

        <div className="d-flex gap-5 flex-column flex-lg-row text-white" style={{ zIndex: 1 }}>
          {[
            { icon: <IoSearch className="tw-w-5" />, step: "01", title: "Search our database" },
            { icon: <IoGlobeOutline className="tw-w-5" />, step: "02", title: "Find your dream domain" },
            { icon: <RiShoppingBag4Fill className="tw-w-10" />, step: "03", title: "Purchase/lease a domain" },
          ].map(({ icon, step, title }, idx) => (
            <div
              key={idx}
              className="card1 tw-rounded-2xl tw-p-5"
            // className="card1 bg-gradient tw-border-none  rounded-3 p-3 text-white text-center shadow-lg"
            // style={{
            //   backgroundImage: "linear-gradient(to bottom right, #0077B5, #0095D7)",
            //   maxWidth: "20rem",
            //   minWidth: "20rem",
            // }}
            >
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div
                  className="d-flex justify-content-center align-items-center  tw-rounded-lg"
                  style={{ width: "2.5rem", height: "2.5rem", backgroundColor: "#80BEDE" }}
                >
                  {icon}
                </div>
                <h1 className="display-6 fw-bold">{step}</h1>
              </div>
              <h6 className="fw-bold">{title}</h6>
            </div>
          ))}
        </div>
      </div>

      {/* Secure Section */}
      <div className="container d-flex flex-column flex-xl-row  ">
        {/* Left Side Image */}
        <Image src={Secure} alt="secure" className="img-fluid " />

        {/* Right Side Content */}
        <div className="">
          <h2 className="display-5 fw-bold text-black">Buyer Protection Program</h2>
          <p className="lead mt-3">
            When you buy a domain name, you’re automatically covered by our Buyer Protection Program. It works like this:
          </p>

          {[
            {
              step: "01",
              title: "You buy or lease the domain name",
              description:
                "When you buy a domain name, you’re automatically covered by our Buyer Protection Program. It works like this.",
            },
            {
              step: "02",
              title: "We facilitate the transfer from the seller to you",
              description:
                "After securing your payment, we first request the domain owner to transfer the domain name to us. Then we send you the tailored transfer instructions and assist you with the process to obtain the domain name.",
            },
            {
              step: "03",
              title: "After the transfer, we pay the seller",
              description:
                "Now that the domain is officially in your hands, we pay the seller. Buyers pay no fees at Dan.com. The seller pays for our commission to handle the ownership transfer.",
            },
          ].map(({ step, title, description }, idx) => (
            <div key={idx} className="d-flex flex-column gap-3 align-items-start mt-3">
              <div className="d-flex align-items-center">

                <h1
                  className="display-1 fw-bold  "
                  style={{ color: "#CCE4F0", fontSize: "3rem", marginRight: "1rem", marginBottom: "0px" }}
                >
                  {step}
                </h1>
                <h5 className="fw-semibold tw-capitalize">{title}</h5>

              </div>
              <p className="text-start">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Banner Section */}
      <div style={{
        backgroundImage: "url('/assets/banner.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
        <div
          className="container py-5 my-5 text-white d-flex flex-wrap justify-content-between align-items-center rounded"

        >
          <div>
            <h3 className="fw-semibold inter">Need help after you’ve completed your purchase?</h3>
            <h3 className="fw-bold">We’re at your service. At no additional cost.</h3>
          </div>
          {/* <button className="btn btn-light d-flex align-items-center gap-2 shadow">
            Contact Us <LiaLongArrowAltRightSolid />
          </button> */}

          <button
            className="tw-border-none tw-outline-none flex-nowrap p-3 tw-rounded-xl d-flex flex-nowrap align-items-center gap-2 shadow"
            style={{ backgroundColor: "#fff", color: "#000",  }}
          >
            <h6 className="p-0 m-0">
            Contact Us

            </h6>
             <LiaLongArrowAltRightSolid />

          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
































// "use client"
// import Footer from '@/components/Footer'
// import Navbar from '@/components/Navbar'
// import React from 'react'
// import Secure from '../../../public/assets/secure.svg'
// import line_arrow from '../../../public/assets/images/line_arrow.webp'
// import Banner from '../../../public/assets/banner.svg'
// import { IoGlobeOutline, IoSearch } from "react-icons/io5";
// import { RiShoppingBag4Fill } from "react-icons/ri";
// import Image from 'next/image'
// import { LiaLongArrowAltRightSolid } from "react-icons/lia";

// const page = () => {


//   return (

//     <div>

//       <Navbar color={"#0077B5"} btnBg={"#0077B5"} btnColor={"#fff"} hamburgerColor={"#000"} />



//       {/* HERO  */}
//       <div className='flex justify-center items-center flex-col mt-[2rem] mx-10'>
//         <h1 className='text-[2.3rem] sm:text-5xl capitalize font-semibold text-center'>The new way to buy domains</h1>
//         <p className='text-sm mt-2 w-[100%] md:w-[40%] sm:text-lg text-center'>No matter what kind of domain you want to buy or lease, we make the transfer simple and safe.</p>
//       </div>

//       {/* PROGRESS BAR  */}
//       {/* <div className='container'> */}

//         <div className='flex lg:flex-row flex-col items-center justify-center gap-10 lg:gap-20 relative   mt-[2rem] overflow-x-auto'>

//         <Image src={line_arrow} className='w-full  absolute -z-10' alt="" />

//           {/* <div className='flex-1 h-[1px] bg-[#0077B5]'></div> */}

//           <div className='max-w-[323px] min-w-[323px] h-[129px] bg-gradient-to-br from-[#0077B5] to-[#0095D7] rounded-xl p-5'>

//             <div className='flex justify-between items-start'>

//               <div className='bg-[#80BEDE] flex justify-center items-center w-[2.5rem] h-[2.5rem] rounded-md'><IoSearch className='text-white text-[1.5rem]' /></div>
//               <h1 className='text-[2rem] font-bold text-white'>01</h1>
//             </div>

//             <h1 className='text-[1rem] mt-3 font-bold text-white'>Search our database</h1>

//           </div>

//           {/* <div className='max-w-[5rem] min-w-[5rem] h-[1px] bg-[#0077B5]'></div> */}


//           <div className='max-w-[323px] min-w-[323px] h-[129px] bg-gradient-to-br from-[#0077B5] to-[#0095D7] rounded-xl p-5'>

//             <div className='flex justify-between items-start'>

//               <div className='bg-[#80BEDE] flex justify-center items-center w-[2.5rem] h-[2.5rem] rounded-md'><IoGlobeOutline className='text-white text-[1.5rem]' /></div>
//               <h1 className='text-[2rem] font-bold text-white'>02</h1>
//             </div>

//             <h1 className='text-[1rem] mt-3 font-bold text-white'>Find your dream domain</h1>

//           </div>

//           {/* <div className='max-w-[5rem] min-w-[5rem] h-[1px] bg-[#0077B5]'></div> */}


//           <div className='max-w-[323px] min-w-[323px] h-[129px] bg-gradient-to-br from-[#0077B5] to-[#0095D7] rounded-xl p-5'>

//             <div className='flex justify-between items-start'>

//               <div className='bg-[#80BEDE] flex justify-center items-center w-[2.5rem] h-[2.5rem] rounded-md'><RiShoppingBag4Fill className='text-white text-[1.5rem]' /></div>
//               <h1 className='text-[2rem] font-bold text-white'>03</h1>
//             </div>

//             <h1 className='text-[1rem] mt-3 font-bold text-white'>Purchase/lease a domain</h1>

//           </div>

//           {/* <div className='flex-1 h-[1px] bg-[#0077B5]'></div> */}




//         </div>
//       {/* </div> */}


//       {/* SECURE  */}

//       <div className='container flex lg:flex-row flex-col items-start justify-center mt-[5rem]  '>
//         <Image src={Secure} className='w-full' alt="" height={500} />

//         <div className='w-full'>
//           <h1 className='text-[1.5rem] sm:text-5xl font-bold'>Buyer Protection Program</h1>
//           <p className='text-xs sm:text-xl mt-2 w-[100%]'>When you buy a domain name, you’re automatically covered by our Buyer Protection Program. It works like this:</p>

//           <div className='flex items-center gap-x-3 mt-2'>
//             <h1 className='text-[3rem]  font-bold text-[#0077B5] opacity-20'>01</h1>
//             <p className='sm:text-xl font-semibold capitalize'>You buy or lease the domain name </p>
//           </div>
//           <p className='text-sm mt-0 w-[100%]'>When you buy a domain name, you’re automatically covered by our Buyer Protection Program. It works like this</p>

//           <div className='flex items-center gap-x-3 mt-2'>
//             <h1 className='text-[3rem]  font-bold text-[#0077B5] opacity-20'>02</h1>
//             <p className='sm:text-xl font-semibold capitalize'>We facilitate the transfer from the seller to you</p>
//           </div>
//           <p className='text-sm mt-0 w-[100%]'>After securing your payment, we first request the domain owner to transfer the domain name to us. Then we send you the tailored transfer instructions and assist you with the process to obtain the domain name.</p>


//           <div className='flex items-center gap-x-3 mt-2'>
//             <h1 className='text-[3rem]  font-bold text-[#0077B5] opacity-20'>03</h1>
//             <p className='sm:text-xl font-semibold capitalize'>After the transfer, we pay the seller</p>
//           </div>
//           <p className='text-sm mt-0 w-[100%]'>Now that the domain is officially in your hands, we pay the seller. And we’re done! Buyers pay no fees at Dan.com. The seller pays for our commission to handle the ownership transfer.</p>
//         </div>
//       </div>


//       {/* BANNER  */}

//       <div className='container'>
//         <div style={{ backgroundImage: `url('/assets/banner.svg')` }} className='w-[100%] px-5 py-10 bg-no-repeat bg-cover flex items-center justify-between flex-wrap mt-[3rem]'>

//           <div>
//             <h1 className='md:text-[1.5rem] text-white font-semibold'>Need help after you’ve completed your purchase?</h1>
//             <h1 className='md:text-[1.5rem] text-white font-semibold'> We’re at your service. At no additional cost.</h1>
//           </div>


//           {/* <button className={`text-[#000] bg-white max-w-[8rem] min-w-[8rem] h-[2.3rem] rounded-md mt-2`}>Contact Us</button> */}
//           <button className="bg-white flex flex-nowrap items-center gap-2 text-black px-6 py-4 rounded-xl drop-shadow-lg text-xs">
//             Contact Us
//             <LiaLongArrowAltRightSolid className='w-5 h-5' />

//           </button>


//         </div>
//       </div>






//       {/* FOOTER  */}
//       <Footer />

//     </div>


//   )
// }

// export default page