// import React, { useState } from 'react';
// import { FaHome, FaUserAlt, FaChartBar, FaCog, FaChevronDown, FaChevronRight } from 'react-icons/fa';

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   const [isDashboardOpen, setIsDashboardOpen] = useState(false);
//   const [isUsersOpen, setIsUsersOpen] = useState(false);

//   const toggleDashboardMenu = () => {
//     setIsDashboardOpen(!isDashboardOpen);
//   };

//   const toggleUsersMenu = () => {
//     setIsUsersOpen(!isUsersOpen);
//   };

//   return (
//     <div
//       className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white flex flex-col transform ${
//         isOpen ? 'translate-x-0' : '-translate-x-full'
//       } lg:translate-x-0 transition-transform duration-200 ease-in-out z-20`}
//     >
//       <div className="text-2xl font-semibold p-4 border-b border-gray-700 flex justify-between items-center">
//         <span>Admin Panel</span>
//       </div>
//       <ul className="flex flex-col mt-4 space-y-2">
//         <li className="p-2 hover:bg-gray-700 cursor-pointer flex items-center justify-between" onClick={toggleDashboardMenu}>
//           <div className="flex items-center">
//             <FaHome className="mr-2" />
//             Dashboard
//           </div>
//           {isDashboardOpen ? <FaChevronDown /> : <FaChevronRight />}
//         </li>
//         {isDashboardOpen && (
//           <ul className="pl-8 space-y-2">
//             <li className="p-2 hover:bg-gray-700 cursor-pointer">Overview</li>
//             <li className="p-2 hover:bg-gray-700 cursor-pointer">Analytics</li>
//             <li className="p-2 hover:bg-gray-700 cursor-pointer">Reports</li>
//           </ul>
//         )}
//         <li className="p-2 hover:bg-gray-700 cursor-pointer flex items-center justify-between" onClick={toggleUsersMenu}>
//           <div className="flex items-center">
//             <FaUserAlt className="mr-2" />
//             Users
//           </div>
//           {isUsersOpen ? <FaChevronDown /> : <FaChevronRight />}
//         </li>
//         {isUsersOpen && (
//           <ul className="pl-8 space-y-2">
//             <li className="p-2 hover:bg-gray-700 cursor-pointer">All Users</li>
//             <li className="p-2 hover:bg-gray-700 cursor-pointer">Active Users</li>
//             <li className="p-2 hover:bg-gray-700 cursor-pointer">User Groups</li>
//           </ul>
//         )}
//         <li className="p-2 hover:bg-gray-700 cursor-pointer flex items-center">
//           <FaChartBar className="mr-2" />
//           Analytics
//         </li>
//         <li className="p-2 hover:bg-gray-700 cursor-pointer flex items-center">
//           <FaCog className="mr-2" />
//           Settings
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
