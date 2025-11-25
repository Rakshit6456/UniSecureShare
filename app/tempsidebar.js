"use client";
import { Sparkles, TrendingUp, Upload } from "lucide-react";
import Link from "next/link";
import React, { use, useState } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FiUpload } from "react-icons/fi";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { PiStudentBold } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { Faustina } from "next/font/google";

const Sidebar = () => {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState("announcements");
  const [selectedClass, setSelectedClass] = useState("BTECH-CSE-A-SEM1");
  const [menuActive, setmenuActive] = useState(true);

  const classes = [
    {
      course: "BTech",
      branch: "CSE",
      section: "A",
      semester: 1,
      id: "BTECH-CSE-A-SEM1",
      text: "BTech CSE - Section A - Sem 1",
    },
    {
      course: "BTech",
      branch: "CSE",
      section: "B",
      semester: 1,
      id: "BTECH-CSE-B-SEM1",
      text: "BTech CSE - Section B - Sem 1",
    },
    {
      course: "BTech",
      branch: "CSE",
      section: "C",
      semester: 1,
      id: "BTECH-CSE-C-SEM1",
      text: "BTech CSE - Section C - Sem 1",
    },
    {
      course: "BTech",
      branch: "CSE",
      section: "A",
      semester: 3,
      id: "BTECH-CSE-A-SEM3",
      text: "BTech CSE - Section A - Sem 3",
    },
    {
      course: "BTech",
      branch: "CSE",
      section: "A",
      semester: 5,
      id: "BTECH-CSE-A-SEM5",
      text: "BTech CSE - Section A - Sem 5",
    },
  ];

  return (
    <aside
      className={`${
        menuActive ? "w-[350px]" : "w-[80px]"
      } transition-[width] duration-300 ease-in-out h-screen p-3`}
    >
      <div className="w-full bg-[var(--darkShade)] h-full rounded-2xl flex flex-col shadow-xl transition-all duration-300 ease-in-out">
        {/* Logo */}
        <div
          className={`p-3 flex ${
            menuActive ? "justify-between" : "justify-center"
          } items-center transition-all duration-300 ease-in-out`}
        >
          <img
            src="/iilm-logo.webp"
            alt="University Logo"
            className={`${
              menuActive ? "opacity-100 w-36" : "opacity-0 w-0"
            } transition-all duration-300 ease-in-out h-auto object-contain rounded-xl`}
          />
          <div
            className="p-3 bg-[var(--primary)] text-[var(--pBlack)] rounded-full cursor-pointer hover:bg-[var(--pBlack)] hover:text-[var(--primary)] duration-150 flex-shrink-0 transition-transform ml-auto"
            onClick={() => setmenuActive(!menuActive)}
          >
            <TbMenu2 size={24} />
          </div>
        </div>

        {/* Upload Button */}
        <div className="p-4 transition-all duration-300 ease-in-out">
          <Link
            href={"/upload-file"}
            className="w-full cursor-pointer bg-[var(--pBlack)] hover:scale-[1.02] text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <FiUpload size={18} className="flex-shrink-0" />
            <span
              className={`${
                menuActive ? "opacity-100 w-auto" : "opacity-0 w-0"
              } transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap`}
            >
              Upload File
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 overflow-y-auto">
          <div className="space-y-2 flex flex-col">
            <Link
              href={"/"}
              onClick={() => setCurrentPage("announcements")}
              className={`sidebar-btn flex gap-1 items-center transition-all duration-300 ease-in-out ${
                pathname === "/" ? "sidebar-active" : ""
              }`}
            >
            <div className="h-auto w-fit aspect-square p-2 rounded-full flex-shrink-0 flex items-center justify-center">
                <HiOutlineSpeakerphone size={24} />
              </div>
              <span
                className={`${
                  menuActive ? "opacity-100 w-auto" : "opacity-0 w-0"
                } transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap`}
              >
                Announcements
              </span>
            </Link>

            <Link
              href={"/"}
              onClick={() => setCurrentPage("private")}
              className="sidebar-btn flex gap-2 items-center transition-all duration-300 ease-in-out"
            >
              <div className="h-auto w-fit aspect-square p-2 rounded-full flex-shrink-0 flex items-center justify-center">
                <IoFileTrayFullOutline size={24} />
              </div>
              <span
                className={`${
                  menuActive ? "opacity-100 w-auto" : "opacity-0 w-0"
                } transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap`}
              >
                Private Files
              </span>
            </Link>
          </div>

          {/* Classes */}
          <div
            className={`mt-6 transition-all duration-300 ease-in-out overflow-hidden ${
              menuActive ? "opacity-100 max-h-[400px]" : "opacity-0 max-h-0"
            }`}
          >
            <h3 className="px-3 text-sm font-semibold text-gray-500 mb-2 flex items-center gap-2 whitespace-nowrap">
              <PiStudentBold className="flex-shrink-0" />
              Your Classes
            </h3>

            <div className="classCon space-y-1.5 flex flex-col max-h-[280px] overflow-y-scroll">
              {classes.map((classItem) => (
                <Link
                  href={`/${classItem.id}`}
                  key={classItem.id}
                  onClick={() => setCurrentPage(classItem.id)}
                  className={`class-btn text-sm transition-all duration-300 ease-in-out ${
                    pathname === `/${classItem.id}` ? "sidebar-active" : ""
                  }`}
                >
                  {classItem.text}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Account Section */}
        <div className="place-self-end w-full my-3 transition-all duration-300 ease-in-out">
          <Link
            href={"/"}
            className={`${
              menuActive ? "w-[92%]" : "w-fit aspect-square"
            } flex items-center justify-center h-fit rounded-full bg-[var(--pBlack)]/50 text-white mx-auto transition-all duration-300 ease-in-out p-3 hover:scale-[1.05]`}
          >
            <FaUser size={24} className="flex-shrink-0" />
            <span
              className={`${
                menuActive ? "opacity-100 w-auto ml-3" : "opacity-0 w-0"
              } transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap`}
            >
              Account
            </span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;