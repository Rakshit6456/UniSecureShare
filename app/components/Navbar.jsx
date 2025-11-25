"use client";
import { HelpCircle, Bell, User } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [notificationCount, setNotificationCount] = useState(3);

  return (
    <nav className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      {/* Left Section - Course Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          BTech CSE - Section A - Sem 1
        </h1>
      </div>

      {/* Right Section - Icons */}
      <div className="flex items-center gap-4">
        {/* Help Icon */}
        <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
          <HelpCircle size={24} className="text-gray-600" />
        </button>

        {/* Notification Icon with Badge */}
        <button className="relative w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
          <Bell size={24} className="text-gray-600" />
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {notificationCount}
            </span>
          )}
        </button>

        {/* User Profile Icon */}
        <button className="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center transition-colors shadow-md">
          <User size={24} className="text-white" />
        </button>
      </div>
    </nav>
  );
}



// "use client";
// import React from 'react';

// export default function Navbar() {
//   // Function that runs when help button is clicked
//   const handleHelpClick = () => {
//     alert('Help button clicked!');
//   };

//   // Function that runs when notification button is clicked
//   const handleNotificationClick = () => {
//     alert('You have 3 notifications!');
//   };

//   // Function that runs when profile button is clicked
//   const handleProfileClick = () => {
//     alert('Profile button clicked!');
//   };

//   return (
//     <>
//       {/* Navbar navigation bar */}
//       <div className="Navbar">
        
//         {/* Left side: Title */}
//         <div className="title">BTech CSE - Section A - Sem 1</div>
        
//         {/* Right side: Icons */}
//         <div className="icons">
          
//           {/* Help icon (question mark) */}
//           <button className="icon-button help-icon" onClick={handleHelpClick}>
//             ?
//           </button>
          
//           {/* Notification icon (bell with badge) */}
//           <button className="icon-button bell-icon" onClick={handleNotificationClick}>
//             🔔
//             {/* Red badge showing number 3 */}
//             <span className="notification-badge">3</span>
//           </button>
          
//           {/* Profile icon (user) */}
//           <button className="icon-button profile-icon" onClick={handleProfileClick}>
//             👤
//           </button>
          
//         </div>
//       </div>

//       {/* CSS Styles */}
//       <style jsx>{`
//         /* Remove default spacing */
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         /* Navbar bar */
//         .Navbar {
//           background-color: white;
//           padding: 15px 30px;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//         }

//         /* Left side - Title text */
//         .title {
//           font-size: 20px;
//           font-weight: 600;
//           color: #333;
//         }

//         /* Right side - Icons container */
//         .icons {
//           display: flex;
//           gap: 15px;
//           align-items: center;
//         }

//         /* Style for each icon button */
//         .icon-button {
//           width: 45px;
//           height: 45px;
//           border-radius: 50%;
//           background-color: #f0f0f0;
//           border: none;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 20px;
//           position: relative;
//           transition: all 0.3s;
//         }

//         /* Hover effect for icons */
//         .icon-button:hover {
//           background-color: #e0e0e0;
//           transform: scale(1.05);
//         }

//         /* Help icon styling */
//         .help-icon {
//           font-weight: bold;
//           color: #666;
//         }

//         /* Profile icon (purple) */
//         .profile-icon {
//           background-color: #6366f1;
//           color: white;
//         }

//         .profile-icon:hover {
//           background-color: #5558e3;
//         }

//         /* Notification badge (red circle with number) */
//         .notification-badge {
//           position: absolute;
//           top: -5px;
//           right: -5px;
//           background-color: #ff4757;
//           color: white;
//           width: 22px;
//           height: 22px;
//           border-radius: 50%;
//           font-size: 12px;
//           font-weight: bold;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//       `}</style>
//     </>
//   );
// }