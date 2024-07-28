import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import { Routes,Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Home';
import Indexpage from './Pages/Indexpage';
import Signup from './Pages/Signup';
import axios from 'axios';
import { UserContextProvider } from './Usercontext';
// import Accountpage from './Pages/Acoountpage'
import PlacesPage from './Pages/PlacesPage';
import PlaceForm from './Pages/PlaceForm';
import ProfilePage from './Pages/ProfilePage';
import Placepage from './Pages/MyPlacepage'
import MyfavouriteList from './Myfav';

axios.defaults.baseURL = "https://myhotelserver-qgmu.vercel.app"
axios.defaults.withCredentials = true

function App() {
 
  return (
    <UserContextProvider>
    <Routes>
    
      <Route path='/' element={<Home/>}>
        <Route path='/' element={<Indexpage/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        {/* <Route path='/account' element={<Accountpage/>}></Route> */}
        {/* <Route path='/account/:subpage?' element={<Accountpage/>}></Route>
        <Route path='/account/places' element={<PlacesPage/>}></Route>
        <Route path='/account/places/:action' element={<PlaceForm/>}></Route> */}
        <Route path="/account" element={<ProfilePage />} />
        <Route path="/account/places" element={<PlacesPage />} />
        <Route path="/account/places/new" element={<PlaceForm />} />
        <Route path="/account/places/:id" element={<PlaceForm />} />
        <Route path="/places/:id" element={<Placepage/>} />
        {/* <Route path="/account/places/:id" element={<PlaceForm />} /> */}
        {/* <Route path='/account/places' element={<Accountpage/>}></Route> */}
        <Route path='/account/bookings' element={<MyfavouriteList/>}></Route>
      </Route>     
    </Routes>
    </UserContextProvider>
  );
}

export default App;
