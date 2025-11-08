// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import carouselImage1 from "/images/carousel1.jpg";
// import carouselImage2 from "/images/carousel2.jpg";

// const CarouselInfo = () => {
//   const images = [carouselImage1, carouselImage2];
//   const [index, setIndex] = useState(0);

//   // Faster carousel: change every 2.5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="bg-gray-100 shadow-xl rounded-2xl overflow-hidden relative flex flex-col">
//       {/* Carousel */}
//       <div className="w-full h-[240px] relative overflow-hidden">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={images[index]}
//             src={images[index]}
//             alt="Scholarship Process"
//             className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//           />
//         </AnimatePresence>
//       </div>

//       {/* Info Section */}
//       <div className="bg-white p-5 shadow-md rounded-b-2xl">
//         <h3 className="text-lg font-bold text-indigo-700">
//           Scholarship System Overview
//         </h3>
//         <p className="text-gray-600 text-sm mt-2 leading-relaxed">
//           Our Scholarship Management System ensures <b>transparency</b> and <b>efficiency</b> by:
//         </p>
//         <ul className="list-disc pl-5 text-gray-700 text-sm mt-2 space-y-1">
//           <li>Centralized portal for student document uploads</li>
//           <li>Automated verification by faculty members</li>
//           <li>Real-time application status tracking</li>
//           <li>Direct integration with academic results</li>
//           <li>One-click report generation for authorities</li>
//         </ul>

//         {/* Additional content */}
//         <h4 className="text-indigo-700 font-semibold mt-4">Eligibility Criteria:</h4>
//         <ul className="list-disc pl-5 text-gray-700 text-sm mt-1 space-y-1">
//           <li>Must be a registered student of the institution</li>
//           <li>Minimum CGPA requirement: 7.0 / 10</li>
//           <li>Submission of all required documents</li>
//         </ul>

//         <h4 className="text-indigo-700 font-semibold mt-4">Application Process:</h4>
//         <ul className="list-disc pl-5 text-gray-700 text-sm mt-1 space-y-1">
//           <li>Upload all necessary documents in PDF format</li>
//           <li>Faculty verification of uploaded documents</li>
//           <li>Status updates available in real-time on the portal</li>
//           <li>Final approval and scholarship disbursement</li>
//         </ul>

//         <h4 className="text-indigo-700 font-semibold mt-4">Benefits:</h4>
//         <ul className="list-disc pl-5 text-gray-700 text-sm mt-1 space-y-1">
//           <li>Financial support for eligible students</li>
//           <li>Streamlined verification and approval process</li>
//           <li>Transparency in tracking scholarship applications</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CarouselInfo;


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import carouselImage1 from "/images/carousel1.jpg";
import carouselImage2 from "/images/carousel2.jpg";

const CarouselInfo = () => {
  const images = [carouselImage1, carouselImage2];
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-gray-50 shadow-lg rounded-2xl overflow-hidden flex flex-col border border-gray-200">
      {/* Carousel Section */}
      <div className="relative w-full h-[280px] md:h-[320px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="Scholarship Process"
            className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Info Section */}
      <div className="bg-white p-4 md:p-5">
        {/* <h3 className="text-lg font-semibold text-indigo-700">
          Scholarship System Overview
        </h3> */}

        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
          Our Scholarship Management System is designed to ensure
          transparency, efficiency, and ease of access for both students and
          faculty. It provides a centralized platform where students can upload
          documents, and faculty members can verify them in real time.
        </p>

        <p className="text-gray-600 text-sm mt-3 leading-relaxed">
          The system automatically tracks each application, offering live status
          updates and quick access to reports for administrators. With automated
          verification and integrated academic records, it minimizes paperwork
          and processing delays.
        </p>

        <p className="text-gray-600 text-sm mt-3 leading-relaxed">
          Eligibility is based on academic performance, required documentation,
          and institutional registration. Students with a minimum CGPA of{" "}
          <b>7.0</b> are encouraged to apply and benefit from the financial
          support provided through this initiative.
        </p>

        <p className="text-gray-600 text-sm mt-3 leading-relaxed">
          Once all documents are uploaded, the faculty verification process
          begins. Approved applications move forward automatically for final
          approval and disbursement, making the process streamlined and
          transparent.
        </p>

        <p className="text-gray-600 text-sm mt-3 leading-relaxed">
          Overall, this system promotes accountability, reduces manual workload,
          and ensures that deserving students receive timely assistance without
          unnecessary complications.
        </p>
      </div>
    </div>
  );
};

export default CarouselInfo;
