import AccountNav from "./AccountNav"
export default function MyfavouriteList(){
    return(
        <div>
            <AccountNav/>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Under Maintenance</h1>
        <p className="text-lg text-gray-600 mb-6">
          This page is still under devlopment. Please check back later.
        </p>
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/150" // Replace with an actual image URL
            alt="Under Maintenance"
            className="w-40 h-40 mb-6"
          />
        </div>
        <p className="text-sm text-gray-500">
          If you need immediate assistance, please contact us at <a href="aniketkushwahadtu0408@gmail.com" className="text-primary hover:underline">support@gmail.com</a>
        </p>
      </div>
    </div>
    </div>
    )
}
