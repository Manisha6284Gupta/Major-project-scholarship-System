




// // // import { useEffect, useState } from "react";
// // // import { motion } from "framer-motion";

// // // export default function NoticeBoard() {
// // //   const [notices, setNotices] = useState([]);

// // //   useEffect(() => {
// // //     const stored = JSON.parse(localStorage.getItem("public_notices")) || [];
// // //     const valid = stored.filter(
// // //       (n) => new Date(n.expiryDate) > new Date()
// // //     );
// // //     setNotices(valid);
// // //     localStorage.setItem("public_notices", JSON.stringify(valid));
// // //   }, []);

// // //   const isNewNotice = (datePosted) => {
// // //     const postedDate = new Date(datePosted);
// // //     const diffDays = (Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24);
// // //     return diffDays <= 7;
// // //   };

// // //   const NewBadge = () => (
// // //     <motion.span
// // //       className="inline-block px-2 py-0.5 text-xs font-semibold rounded-full text-white ml-2 shadow-sm"
// // //       style={{
// // //         background:
// // //           "linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)",
// // //         backgroundSize: "400% 400%",
// // //       }}
// // //       animate={{
// // //         backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
// // //       }}
// // //       transition={{
// // //         duration: 3,
// // //         repeat: Infinity,
// // //         ease: "linear",
// // //       }}
// // //     >
// // //       NEW
// // //     </motion.span>
// // //   );

// // //   return (
// // //     <div className="max-w-3xl mx-auto mt-10 bg-white rounded-lg shadow-lg p-6">
// // //       <h2 className="text-2xl font-semibold mb-4 text-gray-700">📢 Latest Notices</h2>

// // //       {notices.length === 0 ? (
// // //         <p className="text-gray-500 italic">No current notices available.</p>
// // //       ) : (
// // //         <ul className="space-y-4">
// // //           {notices.map((n) => (
// // //             <li
// // //               key={n.id}
// // //               className="border border-gray-200 rounded-lg p-4 hover:bg-green-50 transition"
// // //             >
// // //               <h3 className="font-semibold text-gray-800 flex items-center">
// // //                 {n.title}
// // //                 {isNewNotice(n.datePosted) && <NewBadge />}
// // //               </h3>
// // //               <p className="text-gray-600">{n.message}</p>
// // //               <p className="text-sm text-gray-400">
// // //                 📅 Posted on: {new Date(n.datePosted).toLocaleDateString()}
// // //               </p>

// // //               {n.file && (
// // //                 <a
// // //                   href={n.file.url}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="text-blue-600 underline text-sm mt-1 inline-block"
// // //                 >
// // //                   📎 View Attachment
// // //                 </a>
// // //               )}
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       )}
// // //     </div>
// // //   );
// // // }



// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function NoticeBoard() {
//   const [notices, setNotices] = useState([]);

//   // ✅ Load valid (non-expired) notices
//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("public_notices")) || [];
//     const valid = stored.filter(
//       (n) => new Date(n.expiryDate) > new Date()
//     );
//     setNotices(valid);
//     localStorage.setItem("public_notices", JSON.stringify(valid));
//   }, []);

//   // ✅ Determine if a notice is "new" (within 7 days)
//   const isNewNotice = (datePosted) => {
//     const postedDate = new Date(datePosted);
//     const diffDays =
//       (Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24);
//     return diffDays <= 7;
//   };

//   // ✅ Animated "NEW" badge
//   const NewBadge = () => (
//     <motion.span
//       className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded-full text-white ml-2 shadow-sm"
//       style={{
//         background:
//           "linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)",
//         backgroundSize: "400% 400%",
//       }}
//       animate={{
//         backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//       }}
//       transition={{
//         duration: 3,
//         repeat: Infinity,
//         ease: "linear",
//       }}
//     >
//       NEW
//     </motion.span>
//   );

//   // ✅ Animation for notice cards
//   const noticeVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="max-w-3xl mx-auto mt-10 mb-20 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
//       <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-700 text-center">
//         📢 Latest Notices
//       </h2>

//       {notices.length === 0 ? (
//         <p className="text-gray-500 italic text-center text-sm">
//           No current notices available.
//         </p>
//       ) : (
//         <motion.ul
//           className="space-y-5"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             visible: {
//               transition: { staggerChildren: 0.1 },
//             },
//           }}
//         >
//           {notices.map((n) => (
//             <motion.li
//               key={n.id}
//               variants={noticeVariants}
//               className="border border-gray-200 rounded-xl bg-gradient-to-br from-gray-50 to-green-50 hover:from-green-100 hover:to-white transition-all duration-300 shadow-md hover:shadow-lg p-4 sm:p-5"
//             >
//               <div className="flex items-center justify-between mb-2">
//                 <div className="flex items-center">
//                   <span className="font-semibold text-gray-800 text-sm sm:text-base">
//                     {isNewNotice(n.datePosted) ? " Notice" : "📄 Notice"}
//                   </span>
//                   {isNewNotice(n.datePosted) && <NewBadge />}
//                 </div>
//                 <span className="text-[11px] sm:text-xs text-gray-400">
//                   {new Date(n.datePosted).toLocaleDateString()}
//                 </span>
//               </div>

//               <p className="text-gray-700 text-xs sm:text-sm leading-snug mb-3">
//                 {n.message}
//               </p>

//               {n.file && (
//                 <a
//                   href={n.file.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block text-green-700 text-xs sm:text-sm font-medium underline hover:text-green-900"
//                 >
//                   📎 View Attachment
//                 </a>
//               )}
//             </motion.li>
//           ))}
//         </motion.ul>
//       )}
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import PublicCorner from "./PublicCorner";

export default function NoticeBoard() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("public_notices")) || [];
    const valid = stored.filter((n) => new Date(n.expiryDate) > new Date());
    setNotices(valid);
    localStorage.setItem("public_notices", JSON.stringify(valid));
  }, []);

  const isNewNotice = (datePosted) => {
    const postedDate = new Date(datePosted);
    const diffDays =
      (Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24);
    return diffDays <= 7;
  };

  const NewBadge = () => (
    <motion.span
      className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded-full text-white ml-2 shadow-sm"
      style={{
        background:
          "linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)",
        backgroundSize: "400% 400%",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      NEW
    </motion.span>
  );

  return (
    <div className="max-w-3xl mx-auto mt-1 mb-0 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
      {/* <PublicCorner/> */}
      <div className="md:col-span-1">
          {/* <PublicCorner /> */}
        </div>
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-700 text-center">
        Notice Board
      </h2>

      {notices.length === 0 ? (
        <p className="text-gray-500 italic text-center text-sm">
          No current notices available.
        </p>
      ) : (
        <motion.div
          className="bg-gray-50 rounded-xl p-4 border border-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="space-y-2">
            {notices.map((n) => (
              <li
                key={n.id}
                className="text-gray-700 text-sm border-b border-gray-200 pb-2 last:border-none"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">
                    {n.title || "Notice"}
                    {isNewNotice(n.datePosted) && <NewBadge />}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(n.datePosted).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-xs mt-1">{n.message}</p>

                {n.file && (
                  <a
                    href={n.file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 text-xs font-medium underline hover:text-green-900"
                  >
                    📎 View Attachment
                  </a>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}
