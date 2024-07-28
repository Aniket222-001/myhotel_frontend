// import { useContext, useState } from "react"
// import { UserContext } from "../Usercontext"
// import { Navigate,Link, useParams } from "react-router-dom"
// import axios from "axios";
// import Placepage from "./PlaceForm";
// // import { Navigate } from "react-router-dom"

// export default function Acoountpage(){
//     let {subpage} = useParams();
//     console.log(subpage)
//     if(!subpage){
//         subpage = 'profile'
//     }
//     const {ready,user,setuser} = useContext(UserContext)
//     const [redirect,setredirect] = useState(null)

//     if(!ready){
//         return(
//             <div>loading..</div>
//         )
//     }
//     if(!user && !redirect){
//         return <Navigate to={'/Login'}></Navigate>
//     }
//     if(redirect){
//         return <Navigate to={'/'}></Navigate>
//     }
//     async function Logout(){
//         await axios.post('/Logout')
//         setredirect('/')
//         setuser(null)
//     }
    
//     function Linkclasses(type = null) {
//         let classes = 'py-2 px-6 ';
//         // console.log(`Type: ${type}, Subpage: ${subpage}`);
//         if (type === subpage) {
//             classes += ' bg-primary text-white rounded-full';
//         }else{
//             classes += 'bg-gray-200  rounded-full'
//         }
//         return classes;
//     }
//     return(
//         <div className="px-4 sm:px-6 lg:px-8">
//             <nav className="w-full flex justify-center mt-8 gap-2 flex-wrap">
//                 <Link className={Linkclasses('profile')} to={'/account'}>My profile</Link>
//                 <Link className={Linkclasses('booking')} to={'/account/booking'}>MY bookings</Link>
//                 <Link className={Linkclasses('places')} to={'/account/places'}>Accomedation</Link>
//             </nav>
//             {subpage === 'profile' && (
//                 <div className="text-center max-w-lg mx-auto">
//                     logeed in as {user.name} <br />
//                     <button className="bg-primary max-w-lg mt-2 rounded text-white" onClick={Logout}>Logout</button>
//                 </div>
//             )}
//             {subpage == 'places' &&(
//                 <Placepage/>
//             )}
//         </div>
//     )
// }
