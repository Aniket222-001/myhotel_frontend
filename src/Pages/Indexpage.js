
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../Image.js";

export default function Indexpage() {
  const [places, setPlaces] = useState([]);
  const [selectedOption, setSelectedOption] = useState('All'); // State for selected option

  useEffect(() => {
    axios.get('/places').then(response => {
      setPlaces(response.data);
    });
  }, []);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  // Filter places based on the selected option
  const filteredPlaces = selectedOption === 'All' ? places : places.filter(place => place.selectedOption === selectedOption);

  return (
    <div className="mx-4 ml-2">
      <div className="text-center mb-4">
        <button
          onClick={() => handleOptionChange('All')}
          className={`px-4 py-2 rounded ${selectedOption === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          All
        </button>
        <button
          onClick={() => handleOptionChange('PG')}
          className={`px-4 py-2 rounded ml-2 ${selectedOption === 'PG' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          PG
        </button>
        <button
          onClick={() => handleOptionChange('Food')}
          className={`px-4 py-2 rounded ml-2 ${selectedOption === 'Food' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Food
        </button>
        <button
          onClick={() => handleOptionChange('Fun Places')}
          className={`px-4 py-2 rounded ml-2 ${selectedOption === 'Fun Places' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Fun Places
        </button>
      </div>

      <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {filteredPlaces.length > 0 && filteredPlaces.map(place => (
          <Link key={place._id} to={'/places/'+place._id}>
            <div className="bg-gray-500 mb-2 rounded-2xl flex h-60">
              {place.photos?.[0] && (
                <Image className="rounded-2xl object-cover aspect-square " src={place.photos?.[0]} alt=""/>
              )}
            </div>
            <h2 className="font-bold">{place.title}</h2>
            <h3 className="text-sm text-gray-500">{place.address}</h3>
            <div className="mt-1">
              <span className="font-bold">{place.price > 0 ? `(₹)${place.price}` : "Delicious "}</span>
               {place.price > 0 ? " per day" : "meals "}
            </div>

          </Link>
        ))}
      </div>
    </div>
  );
}
