"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FiUpload } from "react-icons/fi";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { PiStudentBold } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [menuActive, setmenuActive] = useState(true);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);

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

  const colors = [
    "bg-teal-500/40",
    "bg-pink-500/40",
    "bg-orange-500/40",
    "bg-blue-500/40",
    "bg-purple-500/40",
    "bg-yellow-500/40",
  ];

  function getRandomElement(arr) {
    if (arr.length === 0) return undefined;
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  const handlePageTransition = (page) => {
    if (page === "private") {
      router.push("/private-files");
    }
  };

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    console.log("Logout clicked");
    setProfileMenuOpen(false);
    // Add your logout logic here
  };

  const handleSettings = () => {
    console.log("Settings clicked");
    setProfileMenuOpen(false);
    // Add your settings logic here
  };

  return (
    <aside
      onMouseEnter={() => setmenuActive(true)}
      onMouseLeave={() => setmenuActive(false)}
      className={`${
        menuActive ? "w-[350px]" : "w-[110px]"
      } transition-all duration-300 ease-in-out h-screen p-3`}
    >
      <div className="w-full bg-[var(--darkShade)] h-full rounded-2xl flex flex-col shadow transition-all duration-300 ease-in-out">
        {/* Logo */}
        <div
          className={`p-3 flex ${
            menuActive ? "justify-between" : "justify-center"
          } items-center`}
        >
          <img
            src="/iilm-logo.webp"
            alt="University Logo"
            className={`${menuActive ? "block" : "hidden"} w-36 h-auto object-contain rounded-xl`}
          />
          <div
            className="p-3 bg-[var(--primary)] text-[var(--pBlack)] rounded-full cursor-pointer hover:bg-[var(--pBlack)] hover:text-[var(--primary)] duration-150 flex items-center justify-center"
            onClick={() => setmenuActive(!menuActive)}
          >
            <TbMenu2 size={24} />
          </div>
        </div>

        {/* Upload Button */}
        <div className="p-4">
          <Link
            href={"/upload-file"}
            className="w-full cursor-pointer bg-[var(--pBlack)] hover:scale-[1.02] text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <FiUpload size={18} />
            {menuActive ? "Upload File" : ""}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 overflow-y-auto">
          <div className="space-y-2 flex flex-col">
            <Link
              href={"/"}
              className={`sidebar-btn flex gap-2 items-center ${
                pathname === "/" ? "sidebar-active" : ""
              }`}
            >
              <div className="h-auto w-fit aspect-square p-2 rounded-full flex items-center justify-center">
                <HiOutlineSpeakerphone size={24} />
              </div>
              {menuActive ? "Announcements" : ""}
            </Link>

            <button
              onClick={() => handlePageTransition("private")}
              className="sidebar-btn flex gap-2 items-center w-full text-left"
            >
              <div className="h-auto w-fit aspect-square p-2 rounded-full flex items-center justify-center">
                <IoFileTrayFullOutline size={24} />
              </div>
              {menuActive ? "Private Files" : ""}
            </button>
          </div>

          {/* Classes */}
          <div className="mt-6">
            <h3 className="px-3 text-sm font-semibold text-gray-500 mb-2 flex items-center gap-2">
              <PiStudentBold />
              {menuActive ? "Your Classes" : ""}
            </h3>

            <div className="classCon space-y-1.5 flex flex-col max-h-[280px] overflow-y-scroll">
              {classes.map((classItem) => (
                <Link
                  href={`/${classItem.id}`}
                  key={classItem.id}
                  className={`class-btn text-sm flex items-center gap-2 ${
                    pathname === `/${classItem.id}` ? "class-active" : ""
                  }`}
                >
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[var(--primary)] text-[var(--pBlack)]">
                    <PiStudentBold size={16} />
                  </div>
                  {menuActive ? classItem.text : ""}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Account Button */}
        <div className="place-self-end w-full my-3">
          <button
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            ref={profileMenuRef}
            className={`${
              menuActive ? "w-[92%]" : "w-fit aspect-square"
            } flex items-center h-fit rounded-full ${getRandomElement(colors)} text-[var(--primary)] mx-auto justify-start py-3 px-4 hover:scale-[1.03] duration-150 ease-in-out font-medium gap-2 relative`}
          >
            <FaUser size={20} />
            {menuActive ? "Account" : ""}

            {profileMenuOpen && (
              <div className="absolute bottom-full left-0 mb-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <button
                  onClick={handleSettings}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 font-medium transition flex items-center gap-2"
                >
                  <CiSettings size={18} />
                  Settings
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 font-medium transition border-t border-gray-200 flex items-center gap-2"
                >
                  <MdLogout size={18} />
                  Logout
                </button>
              </div>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;