


// // import { useState, useEffect } from "react";
// // import { motion } from "framer-motion";

// // export default function PostNotification() {
// //   const [title, setTitle] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [file, setFile] = useState(null);
// //   const [notices, setNotices] = useState([]);
// //   const [search, setSearch] = useState("");

// //   // ✅ Load existing notices
// //   useEffect(() => {
// //     const stored = JSON.parse(localStorage.getItem("admin_notices")) || [];
// //     const valid = stored.filter((n) => new Date(n.expiryDate) > new Date());
// //     setNotices(valid);
// //     localStorage.setItem("admin_notices", JSON.stringify(valid));
// //     localStorage.setItem("public_notices", JSON.stringify(valid));
// //   }, []);

// //   // ✅ Handle new post
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (!title || !message) {
// //       alert("Please enter both title and message");
// //       return;
// //     }

// //     let fileData = null;
// //     if (file) {
// //       fileData = { name: file.name, url: URL.createObjectURL(file) };
// //     }

// //     const newNotice = {
// //       id: Date.now(),
// //       title,
// //       message,
// //       file: fileData,
// //       datePosted: new Date().toISOString(),
// //       expiryDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
// //     };

// //     const updated = [...notices, newNotice];
// //     setNotices(updated);
// //     localStorage.setItem("admin_notices", JSON.stringify(updated));
// //     localStorage.setItem("public_notices", JSON.stringify(updated));

// //     alert("Notice posted successfully!");
// //     setTitle("");
// //     setMessage("");
// //     setFile(null);
// //   };

// //   // ✅ Delete notice
// //   const handleDelete = (id) => {
// //     const updated = notices.filter((n) => n.id !== id);
// //     setNotices(updated);
// //     localStorage.setItem("admin_notices", JSON.stringify(updated));
// //     localStorage.setItem("public_notices", JSON.stringify(updated));
// //   };

// //   const isNewNotice = (datePosted) => {
// //     const postedDate = new Date(datePosted);
// //     const diffDays = (Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24);
// //     return diffDays <= 7;
// //   };

// //   const NewBadge = () => (
// //     <motion.span
// //       className="inline-block px-2 py-0.5 text-xs font-semibold rounded-full text-white ml-2 shadow-sm"
// //       style={{
// //         background:
// //           "linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)",
// //         backgroundSize: "400% 400%",
// //       }}
// //       animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
// //       transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
// //     >
// //       NEW
// //     </motion.span>
// //   );

// //   const filteredNotices = notices.filter((n) =>
// //     n.title.toLowerCase().includes(search.toLowerCase())
// //   );

// //   return (
// //     <div className="max-w-3xl mx-auto bg-white shadow-xl p-8 mt-10 mb-20 rounded-xl border border-gray-200">
// //       {/* Header */}
// //       <div className="text-center mb-8">
// //         <h2 className="text-3xl font-bold text-gray-700 flex items-center justify-center gap-2">
// //           Admin Notice Board
// //         </h2>
// //         <div className="mt-2 h-1 w-32 mx-auto bg-green-600 rounded-full"></div>
// //       </div>

// //       {/* Notice Form */}
// //       <form onSubmit={handleSubmit} className="space-y-5 mb-8">
// //         <div>
// //           <label className="block text-gray-600 mb-1 font-medium">Title</label>
// //           <input
// //             type="text"
// //             value={title}
// //             onChange={(e) => setTitle(e.target.value)}
// //             placeholder="Enter notice title"
// //             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none text-gray-700"
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-gray-600 mb-1 font-medium">Message</label>
// //           <textarea
// //             rows="4"
// //             value={message}
// //             onChange={(e) => setMessage(e.target.value)}
// //             placeholder="Write message..."
// //             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none text-gray-700"
// //           ></textarea>
// //         </div>

// //         <div>
// //           <label className="block text-gray-600 mb-1 font-medium">
// //             Attach Document (Optional)
// //           </label>
// //           <input
// //             type="file"
// //             accept=".pdf,.doc,.docx,.xls,.xlsx"
// //             onChange={(e) => setFile(e.target.files[0])}
// //             className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-500 focus:outline-none"
// //           />
// //         </div>

// //         <button
// //           type="submit"
// //           className="w-full bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 transition duration-200 font-semibold shadow-md"
// //         >
// //           Post Notice
// //         </button>
// //       </form>

// //       {/* Search */}
// //       <input
// //         type="text"
// //         value={search}
// //         onChange={(e) => setSearch(e.target.value)}
// //         placeholder="🔍 Search notices..."
// //         className="w-full mb-5 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 text-gray-700"
// //       />

// //       {/* Posted Notices */}
// //       <h3 className="text-xl font-semibold mb-3 text-gray-700 flex items-center gap-2">
// //         Posted Notices
// //       </h3>

// //       {filteredNotices.length === 0 ? (
// //         <p className="text-gray-500 italic">No notices found.</p>
// //       ) : (
// //         <ul className="space-y-3">
// //           {filteredNotices.map((n) => (
// //             <li
// //               key={n.id}
// //               className="border border-gray-200 rounded-xl p-4 bg-gray-50 hover:bg-green-50 transition-all shadow-sm"
// //             >
// //               <h4 className="font-semibold text-gray-800 flex items-center">
// //                 {n.title}
// //                 {isNewNotice(n.datePosted) && <NewBadge />}
// //               </h4>

// //               <p className="text-gray-600 mt-1">{n.message}</p>

// //               <div className="text-sm text-gray-400 mt-2 space-y-0.5">
// //                 <p>Posted: {new Date(n.datePosted).toLocaleDateString()}</p>
// //                 <p>Expires: {new Date(n.expiryDate).toLocaleDateString()}</p>
// //               </div>

// //               {n.file && (
// //                 <a
// //                   href={n.file.url}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="text-green-700 underline text-sm mt-2 inline-block"
// //                 >
// //                   {n.file.name}
// //                 </a>
// //               )}

// //               <button
// //                 onClick={() => handleDelete(n.id)}
// //                 className="block mt-3 text-red-600 hover:text-red-800 text-sm font-medium"
// //               >
// //                 Delete
// //               </button>
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // }



// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// export default function PostNotification() {
//   const [title, setTitle] = useState("");
//   const [message, setMessage] = useState("");
//   const [file, setFile] = useState(null);
//   const [notices, setNotices] = useState([]);
//   const [search, setSearch] = useState("");
//   const [template, setTemplate] = useState("");

//   // ✅ Predefined dynamic messages
//   const templates = {
//     open: "Scholarship applications are now open! Submit your forms before the deadline.",
//     verification: "Document verification will take place between 5th–10th December 2025. Please bring all originals.",
//     result: "Scholarship results have been announced! Check your profile for details.",
//     renewal: "Scholarship renewal applications are now open for existing recipients.",
//     payment: "Scholarship funds have been disbursed to registered bank accounts.",
//   };

//   // ✅ Load existing notices
//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("admin_notices")) || [];
//     const valid = stored.filter((n) => new Date(n.expiryDate) > new Date());
//     setNotices(valid);
//     localStorage.setItem("admin_notices", JSON.stringify(valid));
//     localStorage.setItem("public_notices", JSON.stringify(valid));
//   }, []);

//   // ✅ Handle new post
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title || !message) {
//       alert("Please enter both title and message");
//       return;
//     }

//     let fileData = null;
//     if (file) {
//       fileData = { name: file.name, url: URL.createObjectURL(file) };
//     }

//     const newNotice = {
//       id: Date.now(),
//       title,
//       message,
//       file: fileData,
//       datePosted: new Date().toISOString(),
//       expiryDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
//     };

//     const updated = [...notices, newNotice];
//     setNotices(updated);
//     localStorage.setItem("admin_notices", JSON.stringify(updated));
//     localStorage.setItem("public_notices", JSON.stringify(updated));

//     alert("Notice posted successfully!");
//     setTitle("");
//     setMessage("");
//     setFile(null);
//     setTemplate("");
//   };

//   // ✅ Delete notice
//   const handleDelete = (id) => {
//     const updated = notices.filter((n) => n.id !== id);
//     setNotices(updated);
//     localStorage.setItem("admin_notices", JSON.stringify(updated));
//     localStorage.setItem("public_notices", JSON.stringify(updated));
//   };

//   const isNewNotice = (datePosted) => {
//     const postedDate = new Date(datePosted);
//     const diffDays = (Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24);
//     return diffDays <= 7;
//   };

//   const NewBadge = () => (
//     <motion.span
//       className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded-full text-white ml-2 shadow-sm"
//       style={{
//         background:
//           "linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)",
//         backgroundSize: "400% 400%",
//       }}
//       animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
//       transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//     >
//       NEW
//     </motion.span>
//   );

//   const filteredNotices = notices.filter((n) =>
//     n.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="max-w-3xl mx-auto bg-white shadow-lg p-6 mt-10 mb-20 rounded-xl border border-gray-200 text-sm">
//       {/* Header */}
//       <div className="text-center mb-6">
//         <h2 className="text-2xl font-bold text-gray-700">Admin Notice Board</h2>
//         <div className="mt-2 h-1 w-24 mx-auto bg-green-600 rounded-full"></div>
//       </div>

//       {/* Notice Form */}
//       <form onSubmit={handleSubmit} className="space-y-4 mb-8">
//         <div>
//           <label className="block text-gray-600 mb-1 font-medium">Select Template</label>
//           <select
//             value={template}
//             onChange={(e) => {
//               const selected = e.target.value;
//               setTemplate(selected);
//               setMessage(templates[selected] || "");
//             }}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 text-gray-700 text-sm"
//           >
//             <option value="">-- Choose a template --</option>
//             <option value="open">Application Open Notice</option>
//             <option value="verification">Document Verification Notice</option>
//             <option value="result">Result Announcement</option>
//             <option value="renewal">Renewal Notice</option>
//             <option value="payment">Payment Disbursement Notice</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-gray-600 mb-1 font-medium">Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Enter notice title"
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 text-gray-700 text-sm"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-600 mb-1 font-medium">Message</label>
//           <textarea
//             rows="3"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Write or select a message..."
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 text-gray-700 text-sm"
//           ></textarea>
//         </div>

//         <div>
//           <label className="block text-gray-600 mb-1 font-medium">
//             Attach Document (Optional)
//           </label>
//           <input
//             type="file"
//             accept=".pdf,.doc,.docx,.xls,.xlsx"
//             onChange={(e) => setFile(e.target.files[0])}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-500 text-sm focus:outline-none"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200 font-semibold shadow-sm text-sm"
//         >
//           Post Notice
//         </button>
//       </form>

//       {/* Search */}
//       <input
//         type="text"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="🔍 Search notices..."
//         className="w-full mb-4 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 text-gray-700 text-sm"
//       />

//       {/* Posted Notices */}
//       <h3 className="text-lg font-semibold mb-2 text-gray-700">Posted Notices</h3>

//       {filteredNotices.length === 0 ? (
//         <p className="text-gray-500 italic text-sm">No notices found.</p>
//       ) : (
//         <ul className="space-y-3">
//           {filteredNotices.map((n) => (
//             <li
//               key={n.id}
//               className="border border-gray-200 rounded-lg p-3 bg-gray-50 hover:bg-green-50 transition-all shadow-sm text-sm"
//             >
//               <h4 className="font-semibold text-gray-800 flex items-center text-sm">
//                 {n.title}
//                 {isNewNotice(n.datePosted) && <NewBadge />}
//               </h4>

//               <p className="text-gray-600 mt-1 text-xs leading-snug">{n.message}</p>

//               <div className="text-xs text-gray-400 mt-2 space-y-0.5">
//                 <p>Posted: {new Date(n.datePosted).toLocaleDateString()}</p>
//                 <p>Expires: {new Date(n.expiryDate).toLocaleDateString()}</p>
//               </div>

//               {n.file && (
//                 <a
//                   href={n.file.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-green-700 underline text-xs mt-1 inline-block"
//                 >
//                   {n.file.name}
//                 </a>
//               )}

//               <button
//                 onClick={() => handleDelete(n.id)}
//                 className="block mt-2 text-red-600 hover:text-red-800 text-xs font-medium"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }



// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// export default function PostNotification() {
//   const [message, setMessage] = useState("");
//   const [file, setFile] = useState(null);
//   const [notices, setNotices] = useState([]);
//   const [search, setSearch] = useState("");
//   const [template, setTemplate] = useState("");

//   // ✅ Predefined dynamic messages
//   const templates = {
//     open: "Scholarship applications are now open! Submit your forms before the deadline.",
//     verification: "Document verification will take place between 5th–10th December 2025. Please bring all originals.",
//     result: "Scholarship results have been announced! Check your profile for details.",
//     renewal: "Scholarship renewal applications are now open for existing recipients.",
//     payment: "Scholarship funds have been disbursed to registered bank accounts.",
//   };

//   // ✅ Load existing notices
//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("admin_notices")) || [];
//     const valid = stored.filter((n) => new Date(n.expiryDate) > new Date());
//     setNotices(valid);
//     localStorage.setItem("admin_notices", JSON.stringify(valid));
//     localStorage.setItem("public_notices", JSON.stringify(valid));
//   }, []);

//   // ✅ Handle new post
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!message) {
//       alert("Please enter a message or select a template");
//       return;
//     }

//     let fileData = null;
//     if (file) {
//       fileData = { name: file.name, url: URL.createObjectURL(file) };
//     }

//     const newNotice = {
//       id: Date.now(),
//       message,
//       file: fileData,
//       datePosted: new Date().toISOString(),
//       expiryDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
//     };

//     const updated = [...notices, newNotice];
//     setNotices(updated);
//     localStorage.setItem("admin_notices", JSON.stringify(updated));
//     localStorage.setItem("public_notices", JSON.stringify(updated));

//     alert("Notice posted successfully!");
//     setMessage("");
//     setFile(null);
//     setTemplate("");
//   };

//   // ✅ Delete notice
//   const handleDelete = (id) => {
//     const updated = notices.filter((n) => n.id !== id);
//     setNotices(updated);
//     localStorage.setItem("admin_notices", JSON.stringify(updated));
//     localStorage.setItem("public_notices", JSON.stringify(updated));
//   };

//   const isNewNotice = (datePosted) => {
//     const postedDate = new Date(datePosted);
//     const diffDays = (Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24);
//     return diffDays <= 7;
//   };

//   const NewBadge = () => (
//     <motion.span
//       className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded-full text-white ml-2 shadow-sm"
//       style={{
//         background:
//           "linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)",
//         backgroundSize: "400% 400%",
//       }}
//       animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
//       transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//     >
//       NEW
//     </motion.span>
//   );

//   const filteredNotices = notices.filter((n) =>
//     n.message.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="max-w-3xl mx-auto bg-white shadow-lg p-6 mt-10 mb-20 rounded-xl border border-gray-200 text-sm">
//       {/* Header */}
//       <div className="text-center mb-6">
//         <h2 className="text-2xl font-bold text-gray-700">Admin Notice Board</h2>
//         <div className="mt-2 h-1 w-24 mx-auto bg-green-600 rounded-full"></div>
//       </div>

//       {/* Notice Form */}
//       <form onSubmit={handleSubmit} className="space-y-4 mb-8">
//         <div>
//           <label className="block text-gray-600 mb-1 font-medium">Select Template</label>
//           <select
//             value={template}
//             onChange={(e) => {
//               const selected = e.target.value;
//               setTemplate(selected);
//               setMessage(templates[selected] || "");
//             }}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 text-gray-700 text-sm"
//           >
//             <option value="">-- Choose a template --</option>
//             <option value="open">Application Open Notice</option>
//             <option value="verification">Document Verification Notice</option>
//             <option value="result">Result Announcement</option>
//             <option value="renewal">Renewal Notice</option>
//             <option value="payment">Payment Disbursement Notice</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-gray-600 mb-1 font-medium">Message</label>
//           <textarea
//             rows="3"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Write or select a message..."
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 text-gray-700 text-sm"
//           ></textarea>
//         </div>

//         <div>
//           <label className="block text-gray-600 mb-1 font-medium">
//             Attach Document (Optional)
//           </label>
//           <input
//             type="file"
//             accept=".pdf,.doc,.docx,.xls,.xlsx"
//             onChange={(e) => setFile(e.target.files[0])}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-500 text-sm focus:outline-none"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200 font-semibold shadow-sm text-sm"
//         >
//           Post Notice
//         </button>
//       </form>

//       {/* Search */}
//       <input
//         type="text"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="🔍 Search notices..."
//         className="w-full mb-4 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 text-gray-700 text-sm"
//       />

//       {/* Posted Notices */}
//       <h3 className="text-lg font-semibold mb-2 text-gray-700">Posted Notices</h3>

//       {filteredNotices.length === 0 ? (
//         <p className="text-gray-500 italic text-sm">No notices found.</p>
//       ) : (
//         <ul className="space-y-3">
//           {filteredNotices.map((n) => (
//             <li
//               key={n.id}
//               className="border border-gray-200 rounded-lg p-3 bg-gray-50 hover:bg-green-50 transition-all shadow-sm text-sm"
//             >
//               {/* <h4 className="font-semibold text-gray-800 flex items-center text-sm">
              
//                 {isNewNotice(n.datePosted) && <NewBadge />}
//               </h4> */}
//               <div className="flex items-center text-sm font-semibold text-gray-800">
//   {isNewNotice(n.datePosted) && <NewBadge />}
// </div>


//               <p className="text-gray-600 mt-1 text-xs leading-snug">{n.message}</p>

//               <div className="text-xs text-gray-400 mt-2 space-y-0.5">
//                 <p>Posted: {new Date(n.datePosted).toLocaleDateString()}</p>
//                 <p>Expires: {new Date(n.expiryDate).toLocaleDateString()}</p>
//               </div>

//               {n.file && (
//                 <a
//                   href={n.file.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-green-700 underline text-xs mt-1 inline-block"
//                 >
//                   {n.file.name}
//                 </a>
//               )}

//               <button
//                 onClick={() => handleDelete(n.id)}
//                 className="block mt-2 text-red-600 hover:text-red-800 text-xs font-medium"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function PostNotification() {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [notices, setNotices] = useState([]);
  const [search, setSearch] = useState("");
  const [template, setTemplate] = useState("");

  // ✅ Predefined templates
  const templates = {
    open: "🎓 Scholarship applications are now open! Submit your forms before the deadline.",
    verification: "📑 Document verification will take place between 5th–10th December 2025. Bring all originals.",
    result: "🏆 Scholarship results have been announced! Check your profile for details.",
    renewal: "🔁 Scholarship renewal applications are open for existing recipients.",
    payment: "💰 Scholarship funds have been disbursed to registered bank accounts.",
  };

  // ✅ Load valid notices
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("admin_notices")) || [];
    const valid = stored.filter((n) => new Date(n.expiryDate) > new Date());
    setNotices(valid);
    localStorage.setItem("admin_notices", JSON.stringify(valid));
    localStorage.setItem("public_notices", JSON.stringify(valid));
  }, []);

  // ✅ Post a new notice
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      alert("Please enter a message or select a template");
      return;
    }

    const newNotice = {
      id: Date.now(),
      message,
      file: file ? { name: file.name, url: URL.createObjectURL(file) } : null,
      datePosted: new Date().toISOString(),
      expiryDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
    };

    const updated = [...notices, newNotice];
    setNotices(updated);
    localStorage.setItem("admin_notices", JSON.stringify(updated));
    localStorage.setItem("public_notices", JSON.stringify(updated));

    alert("✅ Notice posted successfully!");
    setMessage("");
    setFile(null);
    setTemplate("");
  };

  // ✅ Delete notice
  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this notice?")) return;
    const updated = notices.filter((n) => n.id !== id);
    setNotices(updated);
    localStorage.setItem("admin_notices", JSON.stringify(updated));
    localStorage.setItem("public_notices", JSON.stringify(updated));
  };

  // ✅ Detect “new” notice (less than 7 days old)
  const isNewNotice = (datePosted) => {
    const diffDays = (Date.now() - new Date(datePosted)) / (1000 * 60 * 60 * 24);
    return diffDays <= 7;
  };

  // ✅ Animated “NEW” badge
  const NewBadge = () => (
    <motion.span
      className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded-full text-white ml-2 shadow-sm"
      style={{
        background:
          "linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)",
        backgroundSize: "400% 400%",
      }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    >
      NEW
    </motion.span>
  );

  // ✅ Filter notices by search
  const filteredNotices = notices.filter((n) =>
    n.message.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-xl p-8 mt-10 mb-20 rounded-2xl border border-gray-200 text-sm">
      {/* 🌟 Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <h2 className="text-3xl font-bold text-gray-800">Admin Notice Board</h2>
        <div className="mt-2 h-1 w-24 mx-auto bg-green-600 rounded-full"></div>
        <p className="text-gray-500 text-xs mt-2">Manage and share scholarship updates</p>
      </motion.div>

      {/* 📝 Notice Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 mb-8 bg-gray-50 p-5 rounded-lg border border-gray-200"
      >
        <div>
          <label className="block text-gray-600 mb-1 font-medium">Select Template</label>
          <select
            value={template}
            onChange={(e) => {
              const selected = e.target.value;
              setTemplate(selected);
              setMessage(templates[selected] || "");
            }}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 text-gray-700 text-sm"
          >
            <option value="">-- Choose a template --</option>
            {Object.keys(templates).map((key) => (
              <option key={key} value={key}>
                {templates[key].split(" ")[0]} Notice
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-600 mb-1 font-medium">Message</label>
          <textarea
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write or select a message..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 text-gray-700 text-sm"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-600 mb-1 font-medium">Attach Document (Optional)</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx,.xls,.xlsx"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-500 text-sm focus:outline-none"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200 font-semibold shadow-sm text-sm"
        >
          📢 Post Notice
        </motion.button>
      </form>

      {/* 🔍 Search */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Search notices..."
        className="w-full mb-4 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 text-gray-700 text-sm"
      />

      {/* 📜 Posted Notices */}
      <h3 className="text-lg font-semibold mb-3 text-gray-700">Posted Notices</h3>

      {filteredNotices.length === 0 ? (
        <p className="text-gray-500 italic text-sm">No notices found.</p>
      ) : (
        <ul className="space-y-3">
          {filteredNotices.map((n) => (
            <motion.li
              key={n.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-gray-200 rounded-lg p-4 bg-white hover:bg-green-50 transition-all shadow-sm text-sm"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800">Notice</span>
                {isNewNotice(n.datePosted) && <NewBadge />}
              </div>

              <p className="text-gray-600 mt-1 text-xs leading-snug">{n.message}</p>

              <div className="text-xs text-gray-400 mt-2 space-y-0.5">
                <p>📅 Posted: {new Date(n.datePosted).toLocaleDateString()}</p>
                <p>⏰ Expires: {new Date(n.expiryDate).toLocaleDateString()}</p>
              </div>

              {n.file && (
                <a
                  href={n.file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 underline text-xs mt-1 inline-block"
                >
                  📎 {n.file.name}
                </a>
              )}

              <button
                onClick={() => handleDelete(n.id)}
                className="block mt-2 text-red-600 hover:text-red-800 text-xs font-medium"
              >
                🗑 Delete
              </button>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
}
