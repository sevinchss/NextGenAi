// import React, { useState } from 'react';
// import { FaBell, FaUserCircle, FaBars, FaSearch, FaGlobe, FaMoon, FaSun, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

// const Navbar = ({ toggleSidebar }) => {
//   const [theme, setTheme] = useState('light');
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//     document.documentElement.classList.toggle('dark');
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center z-10">
//       {/* Left Side - Burger Menu and Logo */}
//       <div className="flex items-center space-x-6">
//         <FaBars
//           className="text-gray-600 dark:text-gray-300 cursor-pointer lg:hidden"
//           onClick={toggleSidebar}
//         />
//         <div className="text-2xl font-bold text-gray-700 dark:text-white tracking-wide">
//           MyAdmin
//         </div>
//       </div>

//       {/* Center - Search Bar */}
//       <div className="relative max-w-lg flex-1 mx-8">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-full pl-12 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <FaSearch className="absolute top-2.5 left-4 text-gray-500 dark:text-gray-400" />
//       </div>

//       {/* Right Side - Icons and User Info */}
//       <div className="flex items-center space-x-6">
//         {/* Language Selector */}
//         <div className="relative">
//           <FaGlobe className="text-gray-600 dark:text-gray-300 cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition duration-200" />
//         </div>

//         {/* Notifications */}
//         <div className="relative">
//           <FaBell className="text-gray-600 dark:text-gray-300 cursor-pointer hover:text-red-500 transition duration-200" />
//           <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
//         </div>

//         {/* Theme Toggle */}
//         <button onClick={toggleTheme} className="relative focus:outline-none">
//           <div className="w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center p-1 cursor-pointer">
//             <div
//               className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
//                 theme === 'dark' ? 'translate-x-6' : ''
//               }`}
//             ></div>
//           </div>
//         </button>

//         {/* User Info */}
//         <div className="relative flex items-center space-x-2 cursor-pointer" onClick={toggleDropdown}>
//           <FaUserCircle className="text-gray-600 dark:text-gray-300 text-2xl" />
//           <span className="text-gray-700 dark:text-white font-medium">Julia Hudda</span>
//           {dropdownOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-lg text-sm">
//               <div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
//                 <FaUser className="mr-2 text-gray-500 dark:text-gray-300" /> Profile
//               </div>
//               <div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
//                 <FaCog className="mr-2 text-gray-500 dark:text-gray-300" /> Settings
//               </div>
//               <div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
//                 <FaSignOutAlt className="mr-2 text-gray-500 dark:text-gray-300" /> Logout
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
