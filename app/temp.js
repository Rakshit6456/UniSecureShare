"use client";
import { Bell, HelpCircle, User, MoreVertical, FileText, Sparkles, TrendingUp, ArrowLeft, Upload, Calendar, Tag, BookOpen, Download, Folder, Mail, Phone, Briefcase, MapPin, LogOut } from 'lucide-react';
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("class");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [openMenuId, setOpenMenuId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedClass, setSelectedClass] = useState(0);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [uploadForm, setUploadForm] = useState({
    fileName: "",
    section: "",
    category: "",
    date: ""
  });

  const userProfile = {
    name: "Dr. Samridhi Singhal",
    title: "Assistant Professor",
    department: "Computer Science & Engineering",
    email: "samridhi@iilm.edu.in",
    phone: "+91 9827846226",
    qualification: "Ph.D. in Computer Science",
    experience: "8 years",
    office: "Block A, Room 301",
    specialization: ["Cloud Computing", "Data Science", "AI/ML", "Web Development"],
    availability: "Mon-Fri, 2:00 PM - 4:00 PM"
  };

  const filesByClass = {
    0: [
      { id: 1, title: "Linux File System Hierarchy", date: "19/11/2023", color: "from-blue-500 to-cyan-500" },
      { id: 2, title: "User and Group Management", date: "19/11/2023", color: "from-purple-500 to-pink-500" },
      { id: 3, title: "File Permissions and Ownership", date: "19/11/2023", color: "from-orange-500 to-red-500" },
      { id: 4, title: "Shell Scripting Basics", date: "19/11/2023", color: "from-green-500 to-emerald-500" },
      { id: 5, title: "Linux Installation and Setup", date: "19/11/2023", color: "from-indigo-500 to-blue-500" },
    ],
    1: [
      { id: 6, title: "Command Line Interface Essentials", date: "15/11/2023", color: "from-blue-500 to-cyan-500" },
      { id: 7, title: "Process Management in Linux", date: "15/11/2023", color: "from-purple-500 to-pink-500" },
      { id: 8, title: "Directory Navigation", date: "15/11/2023", color: "from-orange-500 to-red-500" },
      { id: 9, title: "Text Processing Tools", date: "15/11/2023", color: "from-green-500 to-emerald-500" },
    ],
    2: [
      { id: 10, title: "System Administration Fundamentals", date: "10/11/2023", color: "from-blue-500 to-cyan-500" },
      { id: 11, title: "Package Management Systems", date: "10/11/2023", color: "from-purple-500 to-pink-500" },
      { id: 12, title: "Network Configuration Basics", date: "10/11/2023", color: "from-orange-500 to-red-500" },
    ],
    3: [
      { id: 13, title: "Advanced Shell Scripting", date: "20/11/2023", color: "from-blue-500 to-cyan-500" },
      { id: 14, title: "System Logging and Monitoring", date: "20/11/2023", color: "from-purple-500 to-pink-500" },
      { id: 15, title: "Backup and Recovery Strategies", date: "20/11/2023", color: "from-orange-500 to-red-500" },
      { id: 16, title: "Security Hardening", date: "20/11/2023", color: "from-green-500 to-emerald-500" },
    ],
    4: [
      { id: 17, title: "Kernel Configuration and Compilation", date: "25/11/2023", color: "from-blue-500 to-cyan-500" },
      { id: 18, title: "Advanced User Management", date: "25/11/2023", color: "from-purple-500 to-pink-500" },
      { id: 19, title: "Storage Management", date: "25/11/2023", color: "from-orange-500 to-red-500" },
      { id: 20, title: "Virtualization and Containers", date: "25/11/2023", color: "from-green-500 to-emerald-500" },
      { id: 21, title: "Performance Tuning", date: "25/11/2023", color: "from-indigo-500 to-blue-500" },
    ],
  };

  const announcements = {
    timetables: [
      { id: 1, title: "BTech CSE - Sem 1 Timetable", date: "15/11/2024", size: "2.4 MB", color: "from-blue-500 to-cyan-500" },
      { id: 2, title: "BTech CSE - Sem 3 Timetable", date: "15/11/2024", size: "2.1 MB", color: "from-blue-500 to-cyan-500" },
      { id: 3, title: "Exam Schedule 2024-25", date: "10/11/2024", size: "1.8 MB", color: "from-blue-500 to-cyan-500" },
    ],
    datasheets: [
      { id: 4, title: "Microprocessor 8085 Datasheet", date: "20/10/2024", size: "5.6 MB", color: "from-purple-500 to-pink-500" },
      { id: 5, title: "Arduino UNO Datasheet", date: "18/10/2024", size: "3.2 MB", color: "from-purple-500 to-pink-500" },
      { id: 6, title: "FPGA Development Guide", date: "12/10/2024", size: "4.1 MB", color: "from-purple-500 to-pink-500" },
    ],
    workshops: [
      { id: 7, title: "Web Development Workshop 2024", date: "25/11/2024", size: "8.3 MB", color: "from-orange-500 to-red-500" },
      { id: 8, title: "AI & ML Workshop Materials", date: "22/11/2024", size: "12.5 MB", color: "from-orange-500 to-red-500" },
      { id: 9, title: "Cloud Computing Workshop", date: "20/11/2024", size: "6.7 MB", color: "from-orange-500 to-red-500" },
    ],
    hackathon: [
      { id: 10, title: "Hackathon Rules & Guidelines", date: "01/12/2024", size: "1.2 MB", color: "from-green-500 to-emerald-500" },
      { id: 11, title: "Hackathon Problem Statements", date: "01/12/2024", size: "3.4 MB", color: "from-green-500 to-emerald-500" },
      { id: 12, title: "Hackathon Judging Criteria", date: "01/12/2024", size: "0.9 MB", color: "from-green-500 to-emerald-500" },
    ],
    seminars: [
      { id: 13, title: "Industry Expert Talk - Cloud & DevOps", date: "28/11/2024", size: "4.5 MB", color: "from-indigo-500 to-blue-500" },
      { id: 14, title: "Cybersecurity Seminar Slides", date: "25/11/2024", size: "6.8 MB", color: "from-indigo-500 to-blue-500" },
      { id: 15, title: "Data Science in 2024 - Seminar Notes", date: "20/11/2024", size: "5.3 MB", color: "from-indigo-500 to-blue-500" },
    ],
  };

  const classes = [
    "BTech CSE - Section A - Sem 1",
    "BTech CSE - Section B - Sem 1",
    "BTech CSE - Section C - Sem 1",
    "BTech CSE - Section A - Sem 3",
    "BTech CSE - Section A - Sem 5",
  ];

  const getClassDetails = (classIndex) => {
    const className = classes[classIndex];
    const match = className.match(/Section\s+([A-Za-z])\s+-\s+Sem\s+(\d+)/);
    return {
      program: "BTech CSE",
      section: match ? match[1] : "A",
      semester: match ? match[2] : "1",
      batch: "2025-2029",
      coordinator: "Dr. XYZ",
      coordinatorEmail: "xyz@iilm.edu"
    };
  };

  const handlePageTransition = (newPage, classIdx = null) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      if (classIdx !== null) {
        setSelectedClass(classIdx);
      }
      setIsTransitioning(false);
    }, 300);
  };

  const handleMenuClick = (fileId) => {
    setOpenMenuId(openMenuId === fileId ? null : fileId);
  };

  const handleMenuAction = (action, fileTitle) => {
    console.log(`${action} clicked for ${fileTitle}`);
    setOpenMenuId(null);
  };

  const handleDownload = (fileName) => {
    console.log(`Downloading: ${fileName}`);
    alert(`Downloading ${fileName}...`);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUploadSubmit = () => {
    console.log("Upload form:", uploadForm);
    console.log("Selected file:", selectedFile);
    alert("File uploaded successfully!");
    handlePageTransition("class");
    setSelectedFile(null);
    setUploadForm({
      fileName: "",
      section: "",
      category: "",
      date: ""
    });
  };

  const handleProfileMenuClick = () => {
    setOpenProfileMenu(!openProfileMenu);
  };

  function renderAnnouncementCategory(categoryTitle, categoryKey, color) {
    const docs = announcements[categoryKey] || [];
    return (
      <div key={categoryKey} className="mb-12">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <div className={`w-1.5 h-8 bg-gradient-to-b ${color} rounded-full`}></div>
          {categoryTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {docs.map((doc) => (
            <div
              key={doc.id}
              className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${doc.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
              
              <div className={`w-14 h-14 bg-gradient-to-br ${doc.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 relative mb-4`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${doc.color} rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                <FileText size={24} className="text-white relative z-10" />
              </div>
              
              <h4 className="font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">{doc.title}</h4>
              <p className="text-sm text-slate-500 mb-4">{doc.date}</p>
              <p className="text-xs text-slate-400 mb-4">Size: {doc.size}</p>
              
              <button
                onClick={() => handleDownload(doc.title)}
                className="mt-auto w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-2.5 rounded-lg transition shadow-md hover:shadow-lg transform hover:scale-105 duration-200 flex items-center justify-center gap-2"
              >
                <Download size={16} />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Sidebar */}
      

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white/70 backdrop-blur-xl border-b border-white/20 px-8 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            {(currentPage === "upload" || currentPage === "announcements" || currentPage === "profile") && (
              <button 
                onClick={() => handlePageTransition("class")}
                className="p-2 hover:bg-slate-100 rounded-xl transition duration-200"
              >
                <ArrowLeft size={20} className="text-slate-600" />
              </button>
            )}
            <h1 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              {currentPage === "upload" ? "Upload File" : currentPage === "announcements" ? "Public Announcements" : currentPage === "profile" ? "My Profile" : classes[selectedClass]}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2.5 hover:bg-slate-100 rounded-xl transition duration-200 relative group">
              <HelpCircle size={20} className="text-slate-600" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            </button>
            <button className="p-2.5 hover:bg-slate-100 rounded-xl transition duration-200 relative">
              <Bell size={20} className="text-slate-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-white text-xs flex items-center justify-center font-bold shadow-lg">3</span>
            </button>
            <div className="relative z-50">
              <button 
                onClick={handleProfileMenuClick}
                className="p-1 hover:scale-105 transition duration-200"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
                  <User size={20} className="text-white" />
                </div>
              </button>
              
              {openProfileMenu && (
                <div className="absolute right-0 top-14 w-56 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 z-50">
                  <div className="px-4 py-3 border-b border-slate-100">
                    <p className="text-sm font-semibold text-slate-800">{userProfile.name}</p>
                    <p className="text-xs text-slate-500">{userProfile.email}</p>
                  </div>
                  
                  <button
                    onClick={() => {
                      handlePageTransition("profile");
                      setOpenProfileMenu(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-slate-50 text-slate-700 font-medium text-sm transition flex items-center gap-3 border-b border-slate-100"
                  >
                    <User size={16} className="text-blue-600" />
                    My Profile
                  </button>
                  
                  <button
                    onClick={() => {
                      console.log("User logged out");
                      setOpenProfileMenu(false);
                      alert("Logged out successfully!");
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-red-50 text-red-600 font-medium text-sm transition flex items-center gap-3"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <div className={`transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            {currentPage === "profile" ? (
              <div className="max-w-6xl mx-auto px-8 py-8">
                <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 mb-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex flex-col items-center md:items-start gap-6">
                      <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
                        <div className="w-44 h-44 bg-white rounded-full flex items-center justify-center">
                          <User size={80} className="text-slate-400" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h1 className="text-4xl font-bold text-slate-800 mb-2">{userProfile.name}</h1>
                      <p className="text-xl text-blue-600 font-semibold mb-4">{userProfile.title}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-slate-700">
                          <Briefcase size={18} className="text-blue-600" />
                          <span>{userProfile.department}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700">
                          <Mail size={18} className="text-blue-600" />
                          <span className="text-blue-600 font-medium">{userProfile.email}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700">
                          <Phone size={18} className="text-blue-600" />
                          <span>{userProfile.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700">
                          <MapPin size={18} className="text-blue-600" />
                          <span>{userProfile.office}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
                          <p className="text-sm text-slate-600 font-semibold">Qualification</p>
                          <p className="text-slate-800 font-bold">{userProfile.qualification}</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
                          <p className="text-sm text-slate-600 font-semibold">Experience</p>
                          <p className="text-slate-800 font-bold">{userProfile.experience}</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200 col-span-2">
                          <p className="text-sm text-slate-600 font-semibold mb-1">Office Hours</p>
                          <p className="text-slate-800 font-bold">{userProfile.availability}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : currentPage === "announcements" ? (
              <div className="max-w-7xl mx-auto px-8 py-6">
                <div className="bg-white rounded-2xl p-8 mb-8 shadow-xl border border-slate-200">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                        <Folder size={28} className="text-blue-600" />
                        Public Documents Library
                      </h2>
                      <p className="text-slate-600">Access and download official documents, schedules, and resources</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {renderAnnouncementCategory("📚 Timetables", "timetables", "from-blue-600 to-cyan-600")}
                  {renderAnnouncementCategory("📊 Datasheets & Resources", "datasheets", "from-purple-600 to-pink-600")}
                  {renderAnnouncementCategory("🛠️ Workshop Details", "workshops", "from-orange-600 to-red-600")}
                  {renderAnnouncementCategory("🚀 Hackathon", "hackathon", "from-green-600 to-emerald-600")}
                  {renderAnnouncementCategory("📢 Seminars", "seminars", "from-indigo-600 to-blue-600")}
                </div>
              </div>
            ) : currentPage === "upload" ? (
              <div className="max-w-3xl mx-auto px-8 py-8">
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
                              <Upload size={32} className="text-gray-400" />
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
                          <FileText size={18} className="text-gray-400" />
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
                      <label className="block text-gray-700 font-semibold mb-3">Section</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                          <BookOpen size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          value={uploadForm.section}
                          onChange={(e) => setUploadForm({...uploadForm, section: e.target.value})}
                          placeholder="Enter section name"
                          className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 transition text-gray-700"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-3">Category</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                          <Tag size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          value={uploadForm.category}
                          onChange={(e) => setUploadForm({...uploadForm, category: e.target.value})}
                          placeholder="Enter category"
                          className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 transition text-gray-700"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-3">Date</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                          <Calendar size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="date"
                          value={uploadForm.date}
                          onChange={(e) => setUploadForm({...uploadForm, date: e.target.value})}
                          className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 transition text-gray-700"
                        />
                      </div>
                    </div>

                    <button
                      onClick={handleUploadSubmit}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition shadow-lg hover:shadow-xl transform hover:scale-[1.02] duration-200"
                    >
                      Upload File
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-7xl mx-auto px-8 py-6">
                <div className="bg-white rounded-2xl p-8 mb-8 flex items-start justify-between shadow-xl border border-slate-200 relative overflow-hidden">
                  <div className="space-y-2 relative z-10">
                    {(() => {
                      const details = getClassDetails(selectedClass);
                      return (
                        <>
                          <div className="flex text-sm">
                            <div className="w-48">
                              <span className="font-bold text-slate-800">Program:</span>{" "}
                              <span className="text-slate-600 font-medium">{details.program}</span>
                            </div>
                            <div className="w-48">
                              <span className="font-bold text-slate-800">Section:</span>{" "}
                              <span className="text-slate-600 font-medium">{details.section}</span>
                            </div>
                          </div>
                          <div className="flex text-sm">
                            <div className="w-48">
                              <span className="font-bold text-slate-800">Semester:</span>{" "}
                              <span className="text-slate-600 font-medium">{details.semester}</span>
                            </div>
                            <div className="w-48">
                              <span className="font-bold text-slate-800">Batch:</span>{" "}
                              <span className="text-slate-600 font-medium">{details.batch}</span>
                            </div>
                          </div>
                          <div className="text-sm">
                            <span className="font-bold text-slate-800">Section Coordinator:</span>{" "}
                            <span className="text-slate-600 font-medium">{details.coordinator}</span>
                          </div>
                          <div className="text-sm">
                            <span className="font-bold text-slate-800">Section Coordinator Email:</span>{" "}
                            <span className="text-blue-600 font-medium">{details.coordinatorEmail}</span>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                  <div className="relative z-10">
                    <div className="text-right mb-3">
                      <h3 className="text-lg font-semibold text-slate-800">
                        Linux Administration
                      </h3>
                    </div>
                    <button 
                      onClick={() => handlePageTransition("upload")}
                      className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transform duration-200"
                    >
                      Upload File for this section
                    </button>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    {/* <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div> */}
                    Files Uploaded for this class
                  </h2>

                  <div className="flex items-center gap-6 border-b border-slate-200 mb-6">
                    {["all", "hidden", "archived"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-4 px-2 font-semibold transition relative ${
                          activeTab === tab
                            ? "text-blue-600"
                            : "text-slate-600 hover:text-slate-800"
                        }`}
                      >
                        {tab === "all" ? "All Files" : tab === "hidden" ? "Hidden Files" : "Archived Files"}
                        {/* {activeTab === tab && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg"></div>
                        )} */}
                      </button>
                    ))}
                    <div className="ml-auto">
                      <button className="text-sm text-slate-600 hover:text-slate-800 font-medium flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-slate-100 transition">
                        Sort by
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {filesByClass[selectedClass].map((file) => (
                      <div
                        key={file.id}
                        className={`group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 flex items-start gap-4 hover:-translate-y-1 relative ${
                          openMenuId === file.id ? 'z-50' : 'z-0'
                        }`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${file.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                        
                        <div className={`w-16 h-16 bg-gradient-to-br ${file.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 relative`}>
                          <div className={`absolute inset-0 bg-gradient-to-br ${file.color} rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                          <FileText size={28} className="text-white relative z-10" />
                        </div>
                        <div className="flex-1 min-w-0 relative z-10">
                          <h3 className="font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">{file.title}</h3>
                          <p className="text-sm text-slate-500 mb-3">{file.date}</p>
                          <div className="flex gap-2">
                            <span className="px-3 py-1.5 bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 text-xs font-medium rounded-full border border-slate-200">
                              Notes
                            </span>
                            <span className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200">
                              Public
                            </span>
                          </div>
                        </div>
                        <div className="relative">
                          <button 
                            onClick={() => handleMenuClick(file.id)}
                            className="p-2 hover:bg-slate-100 rounded-xl transition relative z-10"
                          >
                            <MoreVertical size={18} className="text-slate-600" />
                          </button>
                          
                          {openMenuId === file.id && (
                            <div className="absolute left-0 top-12 w-48 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 z-50">
                              <button
                                onClick={() => handleMenuAction('rename', file.title)}
                                className="w-full text-left px-4 py-2.5 hover:bg-slate-50 text-slate-700 font-medium text-sm transition flex items-center gap-3"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                Rename
                              </button>
                              <button
                                onClick={() => handleMenuAction('logbook', file.title)}
                                className="w-full text-left px-4 py-2.5 hover:bg-slate-50 text-slate-700 font-medium text-sm transition flex items-center gap-3"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13M3 6.253A2.915 2.915 0 015.758 8.416A2.915 2.915 0 018.622 10.5h7.758A2.915 2.915 0 0119 13.584V6.253A2.915 2.915 0 0116.282 3.416A2.915 2.915 0 0113.416 5.758H5.758A2.915 2.915 0 013 6.253z" />
                                </svg>
                                Logbook
                              </button>
                              <button
                                onClick={() => handleMenuAction('remove', file.title)}
                                className="w-full text-left px-4 py-2.5 hover:bg-red-50 text-red-600 font-medium text-sm transition flex items-center gap-3"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                Remove
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}