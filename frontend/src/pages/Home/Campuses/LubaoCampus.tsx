import coeLogo from "../../../assets/images/coe-logo.png";
import cbsLogo from "../../../assets/images/cbs-logo.png";
import ccsLogo from "../../../assets/images/ccs-logo.png";
import ceaLogo from "../../../assets/images/cea-logo.png";
import chtmLogo from "../../../assets/images/chtm-logo.png";

type Course = {
  category: string;
  sub: string[];
};

type College = {
  id: number;
  logo: string;
  title: string;
  courses: (string | Course)[];
};

const collegesLubao: College[] = [
  {
    id: 1,
    logo: ceaLogo,
    title: "College of Engineering and Architecture",
    courses: ["Bachelor of Science in Civil Engineering"],
  },
  {
    id: 2,
    logo: cbsLogo,
    title: "College of Business and Accountancy",
    courses: [
      {
        category: "Bachelor of Science in Business Administration",
        sub: ["Major in Marketing"],
      },
      "Bachelor of Science in Entrepreneurship",
    ],
  },
  {
    id: 3,
    logo: coeLogo,
    title: "College of Education",
    courses: [
      {
        category: "Bachelor in Elementary Education",
        sub: ["Major in General Education"],
      },
    ],
  },
  {
    id: 4,
    logo: ccsLogo,
    title: "College of Computing Studies",
    courses: ["Bachelor of Science in Information Technology"],
  },
  {
    id: 5,
    logo: cbsLogo,
    title: "College of Social Sciences and Humanities",
    courses: ["Bachelor of Science in Psychology"],
  },
  {
    id: 6,
    logo: chtmLogo,
    title: "College of Hospitality and Tourism Management",
    courses: ["Bachelor of Science in Tourism Management"],
  },
];

const LubaoCampus = () => {
  return (
    <div className="px-[20px] py-[20px] flex flex-col gap-5 max-w-screen-xl mx-auto justify-center items-center mb-10 md:mt-7 md:gap-8 lg:mt-20 lg:gap-16">
      {collegesLubao.map((college, index) => (
        <div
          key={college.id}
          className={`dep-container flex flex-col sm:flex-row ${
            index % 2 === 0
              ? "sm:flex-row bg-[#F1E8E7]"
              : "sm:flex-row-reverse bg-[#F1E2E0]"
          } gap-4 justify-center items-center border-brand border-[2px] px-4 py-4 rounded-lg  w-full shadow-[5px_5px_3px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out hover:translate-y-[-8px] hover:shadow-[4px_4px_10px_rgba(0,0,0,0.2)] md:gap-[50px] md:py-8 lg:py-10`}
        >
          {/* Logo Section */}
          <div className="md:w-1/3 lg:w-1/3">
            <img
              src={college.logo}
              alt={`${college.title} Logo`}
              className="w-[100px] h-auto md:w-[200px] lg:w-[300px]"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2">
            <h1 className="text-brand text-xl font-bold mb-2 md:text-2xl lg:text-4xl lg:mb-4">
              {college.title}
            </h1>
            <ul className="list-disc list-inside text-[15px] text-brand space-y-1 md:text-[20px] lg:text-[25px] lg:space-y-2">
              {college.courses.map((course, idx) =>
                typeof course === "string" ? (
                  <li key={idx}>{course}</li>
                ) : (
                  <li key={idx}>
                    <span className="font-semibold text-brand">
                      {course.category}
                    </span>
                    <ul className="list-[circle] list-inside pl-6 space-y-1 text-brand">
                      {course.sub.map((subCourse, subIdx) => (
                        <li key={subIdx}>{subCourse}</li>
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LubaoCampus;
