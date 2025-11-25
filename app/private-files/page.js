"use client";
import { useState } from "react";
import FileBox from "../components/FileBox";

const PrivateFilesPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const privateFiles = [
    {
      id: 1,
      title: "Assignment 1",
      date: "20/11/2024",
      tag: "assignment",
      downloadable: true,
    },
    {
      id: 2,
      title: "Assignment 2",
      date: "18/11/2024",
      tag: "assignment",
      downloadable: true,
    },
    {
      id: 3,
      title: "Study Notes - Chapter 5",
      date: "15/11/2024",
      tag: "notes",
      downloadable: true,
    },
    {
      id: 4,
      title: "Project Report",
      date: "10/11/2024",
      tag: "project",
      downloadable: true,
    }
    // {
    //   id: 5,
    //   title: "Exam Preparation",
    //   date: "08/11/2024",
    //   tag: "exam",
    //   downloadable: true,
    // },
    // {
    //   id: 6,
    //   title: "Lab Experiment Data",
    //   date: "05/11/2024",
    //   tag: "lab",
    //   downloadable: true,
    // },
  ];

  return (
    <div className="min-h-screen px-5 py-4 flex flex-col w-full items-start space-y-2">
      <div className="w-full bg-white rounded-3xl p-8 shadow-md mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-2">
              My Files
            </p>
            <h1 className="text-4xl font-bold text-gray-900">Private Files</h1>
          </div>
          <div className="text-5xl opacity-20">🔒</div>
        </div>
      </div>

      <div className="my-8 w-full">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <div
            // className={`w-1.5 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full`}
          ></div>
          {/* My Private Files */}
        </h3>

        {/* <div className="flex w-full items-center gap-6 border-b border-slate-200 mb-6">
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
            </button>
          ))}
        </div> */}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {privateFiles.length > 0 ? (
            privateFiles.map((file, index) => (
              <FileBox fileInfo={file} index={index} key={file.id} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-500 text-lg">No private files yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivateFilesPage;