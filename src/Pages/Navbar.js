// import { Link } from "react-router-dom";
// import { UserContext, UserContextProvider } from "../Usercontext";
// import { useContext } from "react";

// const Navbar = () => {
//   const { user } = useContext(UserContext);
//   return (
//     <div>
//       <header className="p-4 flex justify-between">
//         <Link to={'/'} className="flex items-center gap-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             className="h-8 w-8"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
//             />
//           </svg>
//           <span className="fond-bold text-xl">airbnb</span>
//         </Link>
//         <div className="flex gap-2 border border-gray-300 rounded-full px-2 py-2 shadow-md shadow-gray-300">
//           <div>PG</div>
//           <div className="border-l border-gray-300"></div>
//           <div>Food</div>
//           <div className="border-l border-gray-300"></div>
//           <div>anywhere</div>
//           <button className="bg-pink-500 rounded-full text-white p-1">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke-width="1.5"
//               stroke="currentColor"
//               class="h-4 w-4"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//               />
//             </svg>
//           </button>
//         </div>
//         <Link
//           to={user?"/account":"/Login"}
//           className="cursor-pointer flex items-centre  gap-2 border border-gray-300 rounded-full px-2 py-2 shadow-md shadow-gray-300"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             className="h-6 w-6 overflow-hidden top-1"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//             />
//           </svg>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             className="h-6 w-6 bg-gray-500 text-white rounded-full relative "
//           >
//             <path
//               fill-rule="evenodd"
//               d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
//               clip-rule="evenodd"
//             />
//           </svg>
//           {!!user &&(
//             <div>
//             {user.name}
//             </div>
//           )}
//         </Link>
        
//       </header>
//     </div>
//   );
// };

// export default Navbar;
import { Link } from "react-router-dom";
import { UserContext } from "../Usercontext";
import { useContext } from "react";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <header className="p-4 flex justify-between items-center flex-wrap">
        <Link to={'/'} className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
            />
          </svg>
          <span className="font-bold text-xl">ExploreNEnjoy</span>
        </Link>
        <div className="flex gap-2 border border-gray-300 rounded-full px-2 py-2 shadow-md shadow-gray-300 mt-4 md:mt-0">
          <div>PG</div>
          <div className="border-l border-gray-300"></div>
          <div>Food</div>
          <div className="border-l border-gray-300"></div>
          <div>Anywhere</div>
          <button className="bg-pink-500 rounded-full text-white p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        <Link
          to={user ? "/account" : "/Login"}
          className="cursor-pointer flex items-center gap-2 border border-gray-300 rounded-full px-2 py-2 shadow-md shadow-gray-300 mt-4 md:mt-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 bg-gray-500 text-white rounded-full"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
          {!!user && (
            <div className="hidden sm:block">
              {user.name}
            </div>
          )}
        </Link>
      </header>
    </div>
  );
};

export default Navbar;
