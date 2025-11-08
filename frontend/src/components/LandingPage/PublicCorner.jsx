import { FaBullhorn, FaClock, FaFileAlt } from "react-icons/fa";

const PublicCorner = () => {
  // Example notices (you can replace these or fetch dynamically)
  const notices = [
    {
      title: "Post Matric Scholarship – Application Deadline Extended",
      date: "November 15, 2025",
      description: "Students are advised to submit their applications before the new deadline. Late submissions will not be accepted.",
    },
    {
      title: "New Scholarship Scheme for Meritorious Students",
      date: "October 28, 2025",
      description: "The department has introduced a new merit-based scholarship for top-performing students in the current academic year.",
    },
    {
      title: "Renewal Process for Existing Scholars",
      date: "October 20, 2025",
      description: "Existing beneficiaries can now renew their scholarships through the portal by verifying last year’s credentials.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          📢 Public Corner
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Stay informed with the latest updates, announcements, and notices related 
          to scholarships. Visit regularly to avoid missing important information.
        </p>

        {/* Notices Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {notices.map((notice, index) => (
            <div
              key={index}
              className="border border-gray-200 shadow-sm rounded-2xl p-6 bg-gray-50 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3 text-blue-600">
                <FaBullhorn size={20} />
                <h3 className="font-semibold text-lg">{notice.title}</h3>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <FaClock size={14} />
                <span>{notice.date}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {notice.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicCorner;
