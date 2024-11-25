"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Card1 from "../../../public/assets/dollar.svg";
import Card2 from "../../../public/assets/group.svg";
import productivity from "../../../public/assets/images/productivity.svg";
import Card3 from "../../../public/assets/clock.svg";
import Service from "../../../public/assets/sitting.svg";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import "./style.scss"
const Page = () => {
  const data = [
    {
      title:
        "Every transaction and transfer is in good hands with us. Our Domain Transfer Service is rated as the fastest and most convenient service available",
    },
    {
      title:
        "We continuously add automation to our domain transfer process to provide the best service possible to Domain sellers & buyers.",
    },
    {
      title:
        "We happily answer all your questions about payments and technical transfers. Our Domain Transfer Team is extensively trained and can handle any type of transaction.",
    },
  ];

  return (
    <div>
      <Navbar color={"#0077B5"} btnBg={"#0077B5"} btnColor={"#fff"} hamburgerColor={"#000"} />

      {/* HERO SECTION */}
      <div className=" py-5 d-flex align-items-center position-relative ">
        <div className="container text-center py-5 ">
          <h1 className="display-5 fw-bold tw-capitalize text-black">Selling domains has never been this easy</h1>

          <div className="container">

            <p className=" mx-auto" style={{ maxWidth: "708px" }}>
              No matter what kind of domain you have for sale or lease we make the transfer simple and
              safe. You’re in complete control of your prices, models, and how you interact with buyers.
            </p>
          </div>
          <div className="d-flex flex-wrap gap-4 justify-content-center mt-4">
            {[
              "Fast & secure domain transfers",
              "+100,000 domains transferred",
              "Payouts within 2 business days",
            ].map((item, idx) => (
              <button
                key={item}
                className="bg-blue py-4  p-3 pe-sm-5 ps-sm-5 pe-xxl-5 ps-xxl-5 tw-border-none text-white  tw-rounded-xl"
                style={{
                  backgroundImage: "url('/assets/images/btn-bg.svg')",
                  backgroundSize: "cover",
                }}
              >
                {idx === 1 && <span>&nbsp;</span> }
                {item}
                {idx === 1 && <span>&nbsp;</span> }
              </button>
            ))}
          </div>
        </div>
        <Image src={productivity} alt="productivity" style={{ position: "absolute", right: "0px", }} className="img-fluid position-absolute mt-4 d-none d-lg-block" />
      </div>

      {/* METHOD SECTION */}
      <div className="py-5  ">
        <div className="container">
          <h1 className="text-center display-5 fw-bold mb-5 text-black">Sell it your way</h1>
          <div className=" row g-4">
            {[Card1, Card2, Card3].map((icon, idx) => {
              const titles = ["Set your price", "Get offers", "Lease your domain name"];
              const descriptions = [
                "First, decide on a price. Now that the hard part is out of the way, people can instantly buy your domain at your fixed price.",
                "Curious about what buyers are willing to pay for your domain? Start negotiations with the Make Offer option on your For Sale page.",
                "Lease-to-Own lets buyers pay in installments, eventually becoming the domain’s owner. Everybody wins: buyers can afford the domain, you get more and recurring revenue.",
              ];
              return (
                <div className="col-md-4" key={idx}>
                  <div className="card border-0 shadow tw-rounded-3xl p-4 text-start h-100">
                    <Image src={icon} alt={`Card ${idx}`} className="img-fluid mb-4" />
                    <h3 className="fw-bold">{titles[idx]}</h3>
                    <p className="">{descriptions[idx]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="container py-5 px-sm-2">
        <div className="row g-5 pe-xxl-4  h-100">
          {/* Left Side Image */}
          <div className="col-lg-5 h-100">
            <Image src={Service} alt="service" className="img-fluid rounded h-100" />
          </div>


          {/* Right Side Content */}
          <div className="col-lg-7 tw-h-100 ">
            <div
              className=" d-flex flex-column gap-4 p-4 tw-rounded-3xl h-100"
              style={{
                backgroundImage: "url('/assets/images/mask.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="text-white text-center display-4 mb-3 mt-4 fw-600">Domain Transfer Service</h1>
              <div className="d-flex flex-column gap-4 mt-1 px-sm-5">
                {data.map((item, idx) => (
                  <div key={idx} className="d-flex align-items-start gap-3">
                    <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center p-2">
                      <FaCheck />
                    </div>
                    <p className="text-white">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Page;









































// "use client"
// import Footer from '@/components/Footer'
// import Navbar from '@/components/Navbar'
// import React from 'react'
// import Card1 from '../../../public/assets/dollar.svg'
// import Card2 from '../../../public/assets/group.svg'
// import productivity from '../../../public/assets/images/productivity.svg'
// import Card3 from '../../../public/assets/clock.svg'
// import Service from '../../../public/assets/sitting.svg'
// import { TiTick } from "react-icons/ti";
// import { FaCheck } from "react-icons/fa6";

// import Image from 'next/image'

// const page = () => {

//   const data = [
//     {
//       title: "Every transaction and transfer is in good hands with us. Our Domain Transfer Service is rated as the fastest and most convenient service available",
//     },
//     {
//       title: "We continuously add automation to our domain transfer process to provide the best service possible to Domain sellers & buyers.",
//     },
//     {
//       title: "We happily answer all your questions about payments and technical transfers. Our Domain Transfer Team is extensively trained and can handle any type of transaction.",
//     }
//   ]


//   return (

//     <div>

//       <Navbar color={"#0077B5"} btnBg={"#0077B5"} btnColor={"#fff"} hamburgerColor={"#000"} />


//       {/* HERO  */}
//       <div className=' container relative overflow-hidden flex justify-center items-center flex-col mt-[2rem] sm:gap-10 gap-6'>
//         <h1 className='text-[2.3rem] sm:text-5xl capitalize font-semibold text-center'>Selling domains has never been this easy</h1>
//         <p className='text-sm mt-2 w-[100%] md:w-[40%] text-center'>No matter what kind of domain you have for sale or lease we make the transfer simple and safe. You’re in complete control of your prices, modals, and how you interact with buyers.</p>
//         <div className='flex justify-center gap-x-8 mt-[1.5rem] lg:flex-row flex-col gap-5 w-full '>
//           {
//             ["Fast & secure domain transfers",
//               "+100,000 domains transferred",
//               "Payouts within 2 business days"]
//               .map(item => <button key={item}
//                 style={{
//                   backgroundImage: `url('/assets/images/btn-bg.svg')`,
//                   backgroundRepeat: "no-repeat",
//                 }}
//                 className='flex justify-center w-full h-full text-nowrap py-5  bg-center bg-contain bg-[#0077b5]  px-4  rounded-md text-white text-sm'>{item}</button>

//               )
//           }
//         </div>
//         <Image src={productivity} className='h-[2rem] absolute -right-5 sm:h-32' alt='card' />

//       </div>

//       {/* METHOD  */}

//       <div className=' container bg-[#F6F7F8] w-[100%] mt-[6rem] py-[2rem]'>

//         <h1 className='text-[2.3rem] font-semibold text-center'>Sell it your way</h1>

//         <div className='flex lg:flex-row justify-between flex-col  gap-10  mt-[2rem]  '>
//           <div className='  bg-white rounded-3xl p-7 w-full drop-shadow-lg shadow-lg'>
//             <Image src={Card1} className='h-[2rem] sm:h-32' alt='card' />
//             <h1 className='text-[1rem] sm:text-3xl font-semibold mt-[2rem]'>Set your price</h1>
//             <p className='text-sm text-[#212833] mt-3'>First, decide on a price. Now that the hard part is out of the way, people can instantly buy your domain at your fixed price.</p>
//           </div>
//           <div className=' bg-white rounded-3xl p-7 w-full drop-shadow-lg'>
//             <Image src={Card2} className='h-[2rem] sm:h-32' alt='card' />
//             <h1 className='text-[1rem] sm:text-3xl font-semibold mt-[2rem]'>Get offers</h1>
//             <p className='text-sm text-[#212833] mt-3'>Curious about what buyers are willing to pay for your domain? Start negotiations with the Make Offer option on your For Sale page. </p>
//           </div>
//           <div className=' bg-white rounded-3xl p-7 w-full drop-shadow-lg'>
//             <Image src={Card3} className='h-[2rem] sm:h-32' alt='card' />
//             <h1 className='text-[1rem] sm:text-3xl font-semibold mt-[2rem]'>Lease your domain name</h1>
//             <p className='text-sm text-[#212833] mt-3'>Lease-to-Own lets buyers pay in installments, eventually becoming the domain’s owner. Everybody wins: buyers can afford the domain, you get more and recurring revenue</p>
//           </div>
//         </div>
//       </div>


//       {/* SERVICES  */}
//       <div className='container'>
//         <div className="flex items-stretch flex-col lg:flex-row justify-between  gap-y-10 lg:gap-x-10 mt-[3rem]  w-full ">

//           {/* Image Section */}
//             <Image src={Service} alt="card" className="w-full block h-full object-cover" />
//           {/* <div className="flex w-full lg:w-1/2  bg-gray-500">
//           </div> */}

//           {/* Text Section */}
//           <div
//             style={{
//               backgroundImage: `url('/assets/images/mask.png')`,
//             }}
//             className="flex flex-col bg-cover bg-center bg-no-repeat  w-full gap-8 sm:p-10 px-2 py-10 rounded-2xl"
//           >
//             <h1 className="text-white text-center text-xl sm:text-5xl font-bold mb-10">
//               Domain Transfer Service
//             </h1>

//             {/* Uncomment and add your dynamic content */}
//             {
//               data?.map((i, index) => (
//                 <div key={index} className="flex items-start gap-x-2 mb-4 mt">
//                   <div className="min-w-[1.5rem] min-h-[1.5rem] rounded-full flex justify-center items-center bg-[#fff]  mt-1 ">
//                     <FaCheck className="text-[#0077B5]" />
//                   </div>
//                   <p className="text-white text-sm lg:text-lg">{i.title}</p>
//                 </div>
//               ))
//             }
//           </div>


//         </div>

//       </div>



//       {/* FOOTER  */}
//       <Footer />

//     </div>


//   )
// }

// export default page