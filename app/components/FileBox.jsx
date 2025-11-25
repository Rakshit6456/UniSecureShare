"use client";
import { FiDownload } from "react-icons/fi";
import React, { useState, useRef, useEffect } from "react";
import { FaFileLines } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { MdArrowOutward } from "react-icons/md";

const FileBox = ({ fileInfo, index }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const colors = [
    "teal-500/40",
    "pink-500/40",
    "orange-500/40",
    "blue-500/40",
    "purple-500/40",
    "yellow-500/40",
  ];

  function getColor(i) {
    return colors[i % colors.length];
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleRename = () => {
    console.log("Rename:", fileInfo.title);
    setIsMenuOpen(false);
    // Add your rename logic here
  };

  const handleLogbook = () => {
    console.log("Logbook:", fileInfo.title);
    setIsMenuOpen(false);
    // Add your logbook logic here
  };

  const handleRemove = () => {
    console.log("Remove:", fileInfo.title);
    setIsMenuOpen(false);
    // Add your remove logic here
  };

  return (
    <div
      className={`bg-${getColor(
        index
      )} rounded-2xl p-3 hover:shadow-lg transition-shadow duration-300 relative min-w-[300px] space-y-3`}
    >
      <div className="w-full flex justify-between items-center">
        <div className="bg-white p-3 rounded-full">
          <FaFileLines size={22} />
        </div>
        <div ref={menuRef} className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-[var(--primary)] duration-150 text-[var(--pBlack)] cursor-pointer transition"
          >
            <HiDotsVertical size={20} />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <button
                onClick={handleRename}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 font-medium transition"
              >
                Rename
              </button>
              <button
                onClick={handleLogbook}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 font-medium transition border-t border-gray-200"
              >
                Logbook
              </button>
              <button
                onClick={handleRemove}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 font-medium transition border-t border-gray-200"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>

      <h4 className="font-bold text-slate-800 mb-2 line-clamp-2 text-lg">
        {fileInfo.title}
      </h4>
      <p className="text-sm text-slate-700 mb-4">{fileInfo.date}</p>
      <div className="flex gap-2">
        <span
          key={index}
          className="bg-[var(--primary)] text-black rounded-full px-2 py-1 border border-slate-400 text-[14px]"
        >
          {fileInfo.tag}
        </span>
      </div>
      {fileInfo.downloadable ? (
        <button className="mt-auto w-full bg-[var(--primary)] text-[var(--pBlack)] font-semibold py-2.5 rounded-lg transition-all shadow-md cursor-pointer hover:shadow-2xl transform hover:-translate-y-[2px] hover:scale-102 duration-200 flex items-center justify-center gap-2">
          <FiDownload size={16} />
          Download
        </button>
      ) : (
        <button className="mt-auto w-full bg-[var(--primary)] text-[var(--pBlack)] font-semibold py-2.5 rounded-lg transition-all shadow-md cursor-pointer hover:shadow-2xl transform hover:-translate-y-[2px] hover:scale-102 duration-200 flex items-center justify-center gap-2">
          View
          <MdArrowOutward size={16} />
        </button>
      )}
    </div>
  );
};

export default FileBox;