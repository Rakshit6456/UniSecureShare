"use client";
export const dynamic = "force-dynamic";
import { FiUpload, FiTag } from "react-icons/fi";
import { FaFileLines } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { useSearchParams } from "next/navigation";
import { useState, useRef, useEffect } from 'react';

export default function UploadPage() {
  const searchParams = useSearchParams();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadForm, setUploadForm] = useState({
    fileName: "",
    section: "",
    category: ""
  });
  const [isPublicAnnouncement, setIsPublicAnnouncement] = useState(false);
  const [uploadType, setUploadType] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sections = [
    { id: "BTECH-CSE-A-SEM1", name: "BTech CSE - Section A - Sem 1" },
    { id: "BTECH-CSE-B-SEM1", name: "BTech CSE - Section B - Sem 1" },
    { id: "BTECH-CSE-C-SEM1", name: "BTech CSE - Section C - Sem 1" },
    { id: "BTECH-CSE-A-SEM3", name: "BTech CSE - Section A - Sem 3" },
    { id: "BTECH-CSE-A-SEM5", name: "BTech CSE - Section A - Sem 5" },
  ];

  // Pre-fill section from URL params
  useEffect(() => {
    const sectionId = searchParams.get("section");
    if (sectionId) {
      const sectionName = sections.find(s => s.id === sectionId)?.name;
      if (sectionName) {
        setUploadForm(prev => ({...prev, section: sectionName}));
      }
    }
  }, [searchParams]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSelectSection = (sectionName) => {
    setUploadForm({...uploadForm, section: sectionName});
    setIsDropdownOpen(false);
  };

  const handleUploadSubmit = () => {
    console.log("Upload form:", uploadForm);
    console.log("Selected file:", selectedFile);
    alert("File uploaded successfully!");
    
    // Reset form
    setSelectedFile(null);
    setUploadForm({
      fileName: "",
      section: "",
      category: ""
    });
    setIsPublicAnnouncement(false);
    setUploadType("");
  };

  const colors = [
    "bg-teal-500/40",
    "bg-pink-500/40",
    "bg-orange-500/40",
    "bg-blue-500/40",
    "bg-purple-500/40",
    "bg-yellow-500/40",
  ];
  function getRandomElement(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Select File</h2>
          
          <div className="space-y-6">
            <div>
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-blue-400 transition-colors bg-gray-50">
                <input
                  type="file"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                  accept=".pdf,.doc,.docx,.ppt,.pptx"
                />
                <label htmlFor="file-upload" className="cursor-pointer block">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                      <FiUpload size={32} className="text-gray-400" />
                    </div>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">
                    {selectedFile ? selectedFile.name : "Click to upload or drag and drop"}
                  </p>
                  <p className="text-sm text-gray-400">
                    PDF, DOC, DOCX, PPT, PPTX (max 10MB)
                  </p>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-3">File Name</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <FaFileLines size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  value={uploadForm.fileName}
                  onChange={(e) => setUploadForm({...uploadForm, fileName: e.target.value})}
                  placeholder="Enter file name"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 transition text-gray-700"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-3 mb-6 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isPublicAnnouncement}
                  onChange={(e) => {
                    setIsPublicAnnouncement(e.target.checked);
                    setUploadForm({...uploadForm, category: "", section: ""});
                  }}
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
                />
                <span className="text-gray-700 font-semibold">Make it a Public Announcement</span>
              </label>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-3">Section</label>
              <div className="relative" ref={dropdownRef}>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <IoBookOutline size={18} className={isPublicAnnouncement ? "text-gray-300" : "text-gray-400"} />
                </div>
                <button
                  onClick={() => !isPublicAnnouncement && setIsDropdownOpen(!isDropdownOpen)}
                  disabled={isPublicAnnouncement}
                  className={`w-full pl-12 pr-4 py-3.5 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 transition text-left ${
                    isPublicAnnouncement 
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {uploadForm.section || "Select section"}
                </button>
                
                {isDropdownOpen && !isPublicAnnouncement && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-xl shadow-lg z-10">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => handleSelectSection(section.name)}
                        className={`w-full text-left px-4 py-3 hover:bg-blue-50 transition font-medium ${
                          uploadForm.section === section.name
                            ? "bg-blue-100 text-blue-600"
                            : "text-gray-700"
                        } border-b last:border-b-0`}
                      >
                        {section.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-3">Category</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <FiTag size={18} className="text-gray-400" />
                </div>
                <select
                  value={uploadForm.category}
                  onChange={(e) => setUploadForm({...uploadForm, category: e.target.value})}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 transition text-gray-700 cursor-pointer appearance-none"
                >
                  <option value="">Select category</option>
                  {isPublicAnnouncement ? (
                    <>
                      <option value="Time-Table">Time-Table</option>
                      <option value="Datesheet">Datesheet</option>
                      <option value="Circular">Circular</option>
                      <option value="Hackathon">Hackathon</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Seminar">Seminar</option>
                    </>
                  ) : (
                    <>
                      <option value="Notes">Notes</option>
                      <option value="Assignment">Assignment</option>
                      <option value="Quiz">Quiz</option>
                      <option value="Practice Problems">Practice Problems</option>
                      <option value="DPP">DPP</option>
                    </>
                  )}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-3">Upload Type</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="uploadType"
                    value="public"
                    checked={uploadType === "public"}
                    onChange={(e) => {
                      setUploadType(e.target.value);
                      setUploadForm({...uploadForm, category: "", section: ""});
                    }}
                    className="w-5 h-5 text-blue-600 focus:ring-blue-500 focus:ring-2 cursor-pointer"
                  />
                  <span className="text-gray-700 font-medium">Public</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="uploadType"
                    value="private"
                    checked={uploadType === "private"}
                    onChange={(e) => {
                      setUploadType(e.target.value);
                      setUploadForm({...uploadForm, category: "", section: ""});
                    }}
                    className="w-5 h-5 text-blue-600 focus:ring-blue-500 focus:ring-2 cursor-pointer"
                  />
                  <span className="text-gray-700 font-medium">Private</span>
                </label>
              </div>
            </div>

            <button
              onClick={handleUploadSubmit}
              className={`w-full ${getRandomElement(colors)} text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-103 duration-200 cursor-pointer`}
            >
              Upload File
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}
