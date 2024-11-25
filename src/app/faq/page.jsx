"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Vector from "../../../public/assets/vector.svg";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";

const Page = () => {
  const [showGeneralFaqIndex, setShowGeneralFaqIndex] = useState(null);
  const [showBuyerFaqIndex, setShowBuyerFaqIndex] = useState(null);
  const [showSellerFaqIndex, setShowSellerFaqIndex] = useState(null);

  const generalFaqData = [
    {
      title: "Lorem Ipsum dolar sit ipsum dolar",
      description:
        "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar",
    },
    {
      title: "Lorem Ipsum dolar sit ipsum dolar",
      description:
        "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar",
    },
    {
      title: "Lorem Ipsum dolar sit ipsum dolar",
      description:
        "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar",
    },
  ];
  const buyerFaqData = [
    {
      title: "Lorem Ipsum dolar sit ipsum dolar",
      description:
        "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar",
    },
    {
      title: "Lorem Ipsum dolar sit ipsum dolar",
      description:
        "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar",
    },
    {
      title: "Lorem Ipsum dolar sit ipsum dolar",
      description:
        "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar",
    },
  ];
  const sellerFaqData = [
    {
      title: "Lorem Ipsum dolar sit ipsum dolar",
      description:
        "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar",
    },
    {
      title: "Lorem Ipsum dolar sit ipsum dolar",
      description:
        "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar",
    },
    {
      title: "Lorem Ipsum dolar sit ipsum dolar",
      description:
        "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar",
    },
  ];

  const toggleFaq = (index, type) => {
    if (type === "general") {
      setShowGeneralFaqIndex(showGeneralFaqIndex === index ? null : index);
    } else if (type === "buyer") {
      setShowBuyerFaqIndex(showBuyerFaqIndex === index ? null : index);
    } else if (type === "seller") {
      setShowSellerFaqIndex(showSellerFaqIndex === index ? null : index);
    }
  };

  const renderFaqSection = (data, activeIndex, type) =>
    data.map((faq, index) => (
      <div
        key={index}
        style={{cursor: "pointer"}}
        onClick={() => toggleFaq(index, type)}
        className={`montserrat faq-item card  border-0 shadow mb-3 ${
          activeIndex === index ? "bg-blue text-white" : "bg-light text-dark"
        }`}
      >
        <div className=" d-flex justify-content-between align-items-center p-3">
          <p className="m-0 fw-600 fs-20">{faq.title}</p>
          <RiArrowDropDownLine
            className={`display-6 fw-normal ${
              activeIndex === index ? "rotate-180 text-white" : ""
            }`}
          />
        </div>
        <div
          className={`card-body text-start p-3 ${
            activeIndex === index ? "d-block" : "d-none"
          }`}
        >
          {faq.description}
        </div>
      </div>
    ));

  return (
    <div className="position-relative">
      <Navbar
        color={"#0077B5"}
        btnBg={"#0077B5"}
        btnColor={"#fff"}
        hamburgerColor={"#000"}
      />

      <div className="position-absolute top-0 end-0 start-0" style={{zIndex: -1}}>
        <Image src={Vector} alt="Background vector" className="img-fluid w-100"  />
      </div>

      <div className="container text-center mt-5">
        <h1 className="fs-50 fw-bold">General Frequently Asked Questions</h1>
        <div className="mt-4">{renderFaqSection(generalFaqData, showGeneralFaqIndex, "general")}</div>

        <h1 className="fs-50 fw-bold mt-5">Seller Frequently Asked Questions</h1>
        <div className="mt-4">{renderFaqSection(sellerFaqData, showSellerFaqIndex, "seller")}</div>

        <h1 className="fs-50 fw-bold mt-5">Buyer Frequently Asked Questions</h1>
        <div className="mt-4">{renderFaqSection(buyerFaqData, showBuyerFaqIndex, "buyer")}</div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;






























// "use client"
// import Footer from '@/components/Footer'
// import Navbar from '@/components/Navbar'
// import React, { useState } from 'react'
// import Vector from '../../../public/assets/vector.svg'
// import Image from 'next/image'
// import { RiArrowDropDownLine } from "react-icons/ri";

// const Page = () => {



//   const [showGeneralFaqIndex, setShowGeneralFaqIndex] = useState(0);
//   const [showBuyerFaqIndex, setShowBuyerFaqIndex] = useState(null);
//   const [showSellerFaqIndex, setShowSellerFaqIndex] = useState(null);




//   const generalFaqData = [
//     { title: "Lorem Ipsum dolar sit ipsum dolar", description: "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar" },
//     { title: "Lorem Ipsum dolar sit ipsum dolar", description: "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar" },
//     { title: "Lorem Ipsum dolar sit ipsum dolar", description: "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar" }
//   ]
//   const buyerFaqData = [
//     { title: "Lorem Ipsum dolar sit ipsum dolar", description: "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar" },
//     { title: "Lorem Ipsum dolar sit ipsum dolar", description: "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar" },
//     { title: "Lorem Ipsum dolar sit ipsum dolar", description: "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar" }
//   ]
//   const sellerFaqData = [
//     { title: "Lorem Ipsum dolar sit ipsum dolar", description: "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar" },
//     { title: "Lorem Ipsum dolar sit ipsum dolar", description: "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar" },
//     { title: "Lorem Ipsum dolar sit ipsum dolar", description: "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar" }
//   ]


//   const toogleGeneralFaq = (index) => {
//     index == showGeneralFaqIndex ? setShowGeneralFaqIndex(null) : index !== setShowGeneralFaqIndex(index)
//   }
//   const toogleBuyerFaq = (index) => {
//     index == showBuyerFaqIndex ? setShowBuyerFaqIndex(null) : index !== setShowBuyerFaqIndex(index)
//   }
//   const toogleSellerrFaq = (index) => {
//     index == showSellerFaqIndex ? setShowSellerFaqIndex(null) : index !== setShowSellerFaqIndex(index)
//   }



//   return (

//     <div className='relative'>

//       <Navbar color={"#0077B5"} btnBg={"#0077B5"} btnColor={"#fff"} hamburgerColor={"#000"} />
// <br />
// <br />
// {/* <br /> */}

//       <div className='absolute top-[0] right-0 -z-40' >
//         <Image src={Vector} alt='' className='-z-50 bg-cover w-[100vw]' />
//       </div>


//       <h1 className='text-[2rem] sm:text-5xl  font-semibold text-center'>General Frequently Asked Question</h1>


//       <div className='my-[3rem] w-[100%] flex justify-center items-center flex-col gap-5'>
//         {generalFaqData.map((i, index) => (
//           <div onClick={() => toogleGeneralFaq(index)}  key={index} className={`cursor-pointer w-[95%] md:w-[70%] rounded-md p-5 mb-2 overflow-hidden transition duration-300 ease-in-out`} style={{ backgroundColor: index !== showGeneralFaqIndex ? "#fafafa" : "#0077B5" }}>
//             <div className='flex justify-between items-center'>
//               <p style={{ color: index === showGeneralFaqIndex ? "#ffff" : "#000" }} className={`${index !== showGeneralFaqIndex && "opacity-45"}`}>{i.title}</p>
//               <RiArrowDropDownLine style={{ color: index === showGeneralFaqIndex ? "#ffff" : "#0077B5" }} className={`text-[2.5rem] cursor-pointer transition transform duration-300 ease-in-out ${index === showGeneralFaqIndex ? "rotate-180" : ""}`}/>
//             </div>
//             <p className={`text-white ${index !== showGeneralFaqIndex ? "h-0" : "h-auto mt-2"} transition duration-300 ease-in-out`}>{i.description}</p>
//           </div>
//         ))}
//       </div>



//       <h1 className='text-[2rem] sm:text-5xl  font-semibold text-center mt-[1rem]'>Seller Frequently Asked Question</h1>


//       <div className='my-[3rem] w-[100%] flex justify-center items-center flex-col gap-5'>
//         {
//           sellerFaqData.map((i, index) => (
//             <div onClick={() => toogleSellerrFaq(index)} style={{ backgroundColor: index !== showSellerFaqIndex ? "#fafafa" : "#0077B5" }} key={index} className={`cursor-pointer w-[95%] md:w-[70%] rounded-md p-5 mb-2 overflow-hidden transition duration-300 ease-in-out`}>
//               <div className='flex justify-between items-center'>
//                 <p style={{ color: index === showSellerFaqIndex ? "#ffff" : "#000" }} className={`${index !== showSellerFaqIndex && "opacity-45"}`}>{i.title}</p>
//                 <RiArrowDropDownLine  style={{ color: index === showSellerFaqIndex ? "#ffff" : "#0077B5" }} className={`text-[2.5rem] cursor-pointer transition transform duration-300 ease-in-out ${index === showSellerFaqIndex ? "rotate-180" : ""}`}/>
//               </div>
//               <p className={`text-white ${index !== showSellerFaqIndex ? "hidden" : "block mt-2"} transition duration-300 ease-in-out `}>{i.description}</p>
//             </div>
//           ))
//         }
//       </div>



//       <h1 className='text-[2rem] sm:text-5xl  font-semibold text-center mt-[1rem]'>Buyer Frequently Asked Question</h1>


//       <div className='my-[3rem] w-[100%] flex justify-center items-center flex-col gap-5'>
//         {
//           buyerFaqData.map((i, index) => (
//             <div onClick={() => toogleBuyerFaq(index)}  style={{ backgroundColor: index !== showBuyerFaqIndex ? "#fafafa" : "#0077B5" }} key={index} className={`cursor-pointer w-[95%] md:w-[70%] rounded-md p-5 mb-2 overflow-hidden transition duration-300 ease-in-out`}>
//               <div className='flex justify-between items-center'>
//                 <p style={{ color: index === showBuyerFaqIndex ? "#ffff" : "#000" }} className={`${index !== showBuyerFaqIndex && "opacity-45"}`}>{i.title}</p>
//                 <RiArrowDropDownLine style={{ color: index === showBuyerFaqIndex ? "#ffff" : "#0077B5" }} className={`text-[2.5rem] cursor-pointer transition transform duration-300 ease-in-out ${index === showBuyerFaqIndex ? "rotate-180" : ""}`} />
//               </div>
//               <p className={`text-white ${index !== showBuyerFaqIndex ? "hidden" : "block mt-2"} transition duration-300 ease-in-out `}>{i.description}</p>
//             </div>
//           ))
//         }
//       </div>




//       {/* FOOTER  */}
//       <Footer />

//     </div>


//   )
// }

// export default Page