import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRegClock,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
const Nav = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="container mx-auto flex flex-row justify-between  text-gray-500 py-5">
        <div className="flex flex-row space-x-12">
          <div className="flex flex-row space-x-2 items-center">
            <FaMapMarkerAlt className="w-5 h-5 text-gray-500" />
            <p>2507 Parker Boulevard, Oakland, CA 76107</p>
          </div>
          <div className="flex flex-row space-x-2">
            <FaMobileAlt className="w-5 h-5 text-gray-500" />
            <p> (0481) 123 987 2411</p>
          </div>
          <div className="flex flex-row space-x-2">
            <FaRegClock className="w-5 h-5 text-gray-500" />
            <p>Mon-Sat: 07:00 - 17:00</p>
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          <FaFacebook className="w-6 h-6 text-gray-500" />
          <FaInstagram className="w-6 h-6 text-gray-500" />
          <FaWhatsapp className="w-6 h-6 text-gray-500" />
        </div>
      </div>
    </div>
  );
};
export default Nav;
