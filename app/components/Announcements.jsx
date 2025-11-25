import FileBox from "./FileBox";

export default function AnnouncementsPage() {
  const announcements = [
    {
      id: 1,
      title: "BTech CSE - Sem 1 Timetable",
      date: "15/11/2024",
      size: "2.4 MB",
      downloadable: true,
      tag: "time-table"
    },
    {
      id: 2,
      title: "BTech CSE - Sem 3 Timetable",
      date: "15/11/2024",
      size: "2.1 MB",
      downloadable: true,
      tag: "time-table"
    },
    {
      id: 3,
      title: "Exam Schedule 2024-25",
      date: "10/11/2024",
      size: "1.8 MB",
      downloadable: true,
      tag: "datesheet"
    },
    {
      id: 4,
      title: "Microprocessor 8085 Datasheet",
      date: "20/10/2024",
      size: "5.6 MB",
      downloadable: true,
      tag: "resource"
    },
    {
      id: 5,
      title: "Arduino UNO Datasheet",
      date: "18/10/2024",
      size: "3.2 MB",
      downloadable: true,
      tag: "resource"
    },
    {
      id: 6,
      title: "FPGA Development Guide",
      date: "12/10/2024",
      size: "4.1 MB",
      downloadable: true,
      tag: "time-table"
    },
    {
      id: 7,
      title: "Web Development Workshop 2024",
      date: "25/11/2024",
      size: "8.3 MB",
      downloadable: true,
      tag: "workshop"
    },
    {
      id: 8,
      title: "AI & ML Workshop Materials",
      date: "22/11/2024",
      size: "12.5 MB",
      downloadable: true,
      tag: "workshop"
    },
    {
      id: 9,
      title: "Cloud Computing Workshop",
      date: "20/11/2024",
      size: "6.7 MB",
      downloadable: true,
      tag: "workshop"
    },
    {
      id: 10,
      title: "Hackathon Rules & Guidelines",
      date: "01/12/2024",
      size: "1.2 MB",
      downloadable: true,
      tag: "hackathon"
    },
    {
      id: 11,
      title: "Hackathon Problem Statements",
      date: "01/12/2024",
      size: "3.4 MB",
      downloadable: true,
      tag: "hackathon"
    },
    {
      id: 12,
      title: "Hackathon Judging Criteria",
      date: "01/12/2024",
      size: "0.9 MB",
      downloadable: true,
      tag: "hackathon"
    },
    {
      id: 13,
      title: "Industry Expert Talk - Cloud & DevOps",
      date: "28/11/2024",
      size: "4.5 MB",
      downloadable: true,
      tag: "time-table"
    },
    {
      id: 14,
      title: "Cybersecurity Seminar Slides",
      date: "25/11/2024",
      size: "6.8 MB",
      downloadable: true,
      tag: "time-table"
    },
    {
      id: 15,
      title: "Data Science in 2024 - Seminar Notes",
      date: "20/11/2024",
      size: "5.3 MB",
      downloadable: true,
      tag: "time-table"
    },
  ];

  function getGreeting() {
    const hour = new Date().getHours(); // 0–23

    if (hour >= 0 && hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }

  const colors = [
    "text-teal-500",
    "text-pink-500",
    "text-orange-500",
    "text-blue-500",
    "text-purple-500",
    "text-yellow-500",
  ];
  function getRandomElement(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  return (
    <div className="min-h-screen px-5 py-8 flex flex-col w-full items-start space-y-2">
      <div className="w-fit">
        <b className="Averia text-[var(--pBlack)] font-normal text-8xl">
          Campus Sharing, <br />
          Redefined.
        </b>
      </div>

      <div className="text-2xl Poppins text-[var(--pBlack)]/70 text-left my-3">
        <small className="font-medium">
          {getGreeting()},{" "}
          <span className={getRandomElement(colors)}>Samridhi Singhal</span>
        </small>
        <br />
        <small className="">
          Welcome to <span className="font-semibold">UniSecureShare</span>
        </small>
      </div>

      {/* Files Box */}
      <div className="my-5 w-full">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <div
            className={`w-1.5 h-8 bg-gradient-to-b from-orange-400 to-red-400 rounded-full`}
          ></div>
          Announcements
        </h3>

        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {announcements.map((doc, index) => (
            <FileBox fileInfo={doc} key={doc.id} index={index} />
           
          ))}
        </div>
      </div>

     
    </div>
  );
}
