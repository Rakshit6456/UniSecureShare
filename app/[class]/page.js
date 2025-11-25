"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import FileBox from "../components/FileBox";
import { useRouter } from 'next/navigation';

const page = () => {
  const [activeTab, setActiveTab] = useState("all");
  const path = usePathname();
  const router = useRouter();
 
  

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

  const classesData = [
  {
    classId: "BTECH-CSE-A-SEM1",
    course: "BTech",
    branch: "CSE",
    section: "A",
    semester: 1,
    text: "BTech CSE - Section A - Sem 1",
    files: [
      { id: 1, title: "Linux File System Hierarchy", date: "19/11/2023", tag: "notes", downloadable: false },
      { id: 2, title: "User and Group Management", date: "19/11/2023", tag: "assignments", downloadable: false },
      { id: 3, title: "File Permissions and Ownership", date: "19/11/2023", tag: "notes", downloadable: false },
      { id: 4, title: "Shell Scripting Basics", date: "19/11/2023", tag: "assignments", downloadable: false },
      { id: 5, title: "Linux Installation and Setup", date: "19/11/2023", tag: "notes", downloadable: false },
    ],
  },
  {
    classId: "BTECH-CSE-B-SEM1",
    course: "BTech",
    branch: "CSE",
    section: "B",
    semester: 1,
    text: "BTech CSE - Section B - Sem 1",
    files: [
      { id: 6, title: "Command Line Interface Essentials", date: "15/11/2023", tag: "notes", downloadable: false },
      { id: 7, title: "Process Management in Linux", date: "15/11/2023", tag: "assignments", downloadable: false },
      { id: 8, title: "Directory Navigation", date: "15/11/2023", tag: "notes", downloadable: false },
      { id: 9, title: "Text Processing Tools", date: "15/11/2023", tag: "assignments", downloadable: false },
    ],
  },
  {
    classId: "BTECH-CSE-C-SEM1",
    course: "BTech",
    branch: "CSE",
    section: "C",
    semester: 1,
    text: "BTech CSE - Section C - Sem 1",
    files: [
      { id: 10, title: "System Administration Fundamentals", date: "10/11/2023", tag: "notes", downloadable: false },
      { id: 11, title: "Package Management Systems", date: "10/11/2023", tag: "assignments", downloadable: false },
      { id: 12, title: "Network Configuration Basics", date: "10/11/2023", tag: "notes", downloadable: false },
    ],
  },
  {
    classId: "BTECH-CSE-A-SEM3",
    course: "BTech",
    branch: "CSE",
    section: "A",
    semester: 3,
    text: "BTech CSE - Section A - Sem 3",
    files: [
      { id: 13, title: "Advanced Shell Scripting", date: "20/11/2023", tag: "notes", downloadable: false },
      { id: 14, title: "System Logging and Monitoring", date: "20/11/2023", tag: "assignments", downloadable: false },
      { id: 15, title: "Backup and Recovery Strategies", date: "20/11/2023", tag: "notes", downloadable: false },
      { id: 16, title: "Security Hardening", date: "20/11/2023", tag: "assignments", downloadable: false },
    ],
  },
  {
    classId: "BTECH-CSE-A-SEM5",
    course: "BTech",
    branch: "CSE",
    section: "A",
    semester: 5,
    text: "BTech CSE - Section A - Sem 5",
    files: [
      { id: 17, title: "Kernel Configuration and Compilation", date: "25/11/2023", tag: "notes", downloadable: false },
      { id: 18, title: "Advanced User Management", date: "25/11/2023", tag: "assignments", downloadable: false },
      { id: 19, title: "Storage Management", date: "25/11/2023", tag: "notes", downloadable: false },
      { id: 20, title: "Virtualization and Containers", date: "25/11/2023", tag: "assignments", downloadable: false },
      { id: 21, title: "Performance Tuning", date: "25/11/2023", tag: "notes", downloadable: false },
    ],
  },
];



 const currentClass = classesData.filter(item => {
   console.log(`/${item.classId}`);
   console.log(path);
   return `/${item.classId}` === path
})

 console.log(currentClass);
 


  const defaultData = {
    program: "BTech CSE",
    section: "A",
    semester: 1,
    batch: "2025-2029",
    coordinator: "Dr. XYZ",
    coordinatorEmail: "xyz@iilm.edu",
  };

  const data = defaultData;

  return (
    <div className="min-h-screen px-5 py-4 flex flex-col w-full items-start space-y-2">
      <div className="w-full bg-white rounded-3xl p-8 shadow-md">
        {/* Top Row - 5 Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          {/* Program Card */}
          <div className="bg-purple-50 rounded-2xl p-6">
            <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-2">
              Program
            </p>
            <p className="text-gray-900 text-lg font-bold">{currentClass[0].course}</p>
          </div>

          {/* Section Card */}
          <div className="bg-blue-50 rounded-2xl p-6">
            <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-2">
              Section
            </p>
            <p className="text-gray-900 text-lg font-bold">{currentClass[0].section}</p>
          </div>

          {/* Semester Card */}
          <div className="bg-pink-50 rounded-2xl p-6">
            <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-2">
              Semester
            </p>
            <p className="text-gray-900 text-lg font-bold">{currentClass[0].semester}</p>
          </div>

          {/* Batch Card */}
          <div className="bg-green-50 rounded-2xl p-6">
            <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-2">
              Batch
            </p>
            <p className="text-gray-900 text-lg font-bold">{data.batch}</p>
          </div>

          {/* Coordinator Card */}
          <div className="bg-orange-50 rounded-2xl p-6">
            <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-2">
              Coordinator
            </p>
            <p className="text-blue-600 text-lg font-bold">
              {data.coordinator}
            </p>
          </div>
        </div>

        {/* Bottom Row - Coordinator Email + Upload Button */}
        <div className="border-t pt-6 flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-2">
              Coordinator Email
            </p>
            <p className="text-blue-600 text-lg font-semibold">
              {data.coordinatorEmail}
            </p>
          </div>

          {/* Upload Button */}
          <button onClick={() => router.push(`/upload-file?section=${currentClass[0].classId}`)} className="w-fit px-5 cursor-pointer bg-[var(--pBlack)] hover:scale-[1.02] text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
            <FiUpload size={20} />
            Upload File
          </button>
        </div>
      </div>

      <div className="my-8 w-full">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <div
            className={`w-1.5 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full`}
          ></div>
          Files uploaded for this class
        </h3>

        <div className="flex w-full items-center gap-6 border-b border-slate-200 mb-6">
          {["all", "hidden", "archived"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 font-semibold transition relative cursor-pointer ${
                activeTab === tab
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-800"
              }`}
            >
              {tab === "all"
                ? "All Files"
                : tab === "hidden"
                ? "Hidden Files"
                : "Archived Files"}
              {/* {activeTab === tab && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg"></div>
                        )} */}
            </button>
          ))}
          {/* <div className="ml-auto">
            <button className="text-sm text-slate-600 hover:text-slate-800 font-medium flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-slate-100 transition">
              Sort by
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div> */}
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentClass[0].files.map((file, index) => (
            <FileBox fileInfo={file} index={index} key={file.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
