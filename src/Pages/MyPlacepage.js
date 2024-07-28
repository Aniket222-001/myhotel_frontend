import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
// import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";

export default function Placepage() {
  const {id} = useParams();
  const [place,setPlace] = useState(null);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then(response => {
      setPlace(response.data);
    }).catch(e=>console.log(e));
  }, [id]);

  if (!place) return '';

  // 
  return (
    <div className=" mt-4 bg-gray-100 -mx-0 px-8 pt-8">
      <h1 className="text-3xl">{place.title}</h1>
      <AddressLink>{place.address}</AddressLink>
      <PlaceGallery place={place} />
      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            {place.description}
          </div>
          Check-in: {place.checkIn}<br />
          Check-out: {place.checkOut}<br />
          Max number of guests: {place.maxGuests}
          type:{place.selectedOption}
        </div>
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-4">
          <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">ownerName: Anonymus</div>
          <p className="text-gray-700 text-base">Phone: xxxxxxxx</p>
          <p className="text-gray-700 text-base">Price: $xxx</p>
          </div>
        <div className="px-6 py-4">
        <button
          className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded"
        >
          Available
        </button>
         </div>
       </div>
      </div>
      {/* -------------------. */}
      <h1 className="text-center">perks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {place.perks?.map((perk, index) => (
        <div key={index} className="bg-gray-100 border border-gray-300 rounded p-4 text-center text-gray-800">
          {perk}
        </div>
      ))}
      
    </div>
      {/* ---------------------- */}
      
      <div className="bg-white -mx-0 px-8 py-8 border-t overflow-x-hidden">
        <div>
          <h2 className="font-semibold text-2xl">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">{place.extraInfo}</div>
      </div>
    </div>
  );
}
