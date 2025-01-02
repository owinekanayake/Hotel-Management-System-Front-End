import { CiBookmarkCheck } from "react-icons/ci";
import UserTag from "../../Components/userData/userData";
import { Link } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { FaBed, FaBookmark, FaUsers } from "react-icons/fa6";
import { MdBookmark, MdBookmarks, MdFeedback } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import "./admin-page.css"
import { IoBookmark } from "react-icons/io5";

export default function AdminPage() {
  return (
    <div className="w-full h-screen overflow-hidden  bg-[#D9D9D9] relative flex">
      <div className="w-full bg-[#608BC1] h-14 flex items-center absolute">
        <h1 className="text-black text-outline text-xl font-bold font-serif [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)] ml-16">
          Pathayi Hotel & Resort
        </h1>
        <UserTag />
      </div>

      <div className="w-[22%] bg-[#608BC1] flex flex-col mt-20 ml-5 h-[85%] rounded-lg">
        <div className="flex items-center pt-3 pl-8 mt-14 mx-6 pb-3 hover:bg-blue-700 cursor-pointer rounded-lg">
          <MdBookmarks size={35} />
          <Link className="text-white font-bold text-[22px] -tracking-tight pl-6">
            Bookings
          </Link>
        </div>

        <div className="flex items-center pt-3 pl-8 mt-4 mx-6 pb-3 hover:bg-blue-700 cursor-pointer rounded-lg">
          <BiCategory size={35} />
          <Link className="text-white font-bold text-[22px] -tracking-tight pl-6">
            Categories
          </Link>
        </div>

        <div className="flex items-center pt-3 pl-8 mt-4 mx-6 pb-3 hover:bg-blue-700 cursor-pointer rounded-lg">
          <FaBed size={35} />
          <Link className="text-white font-bold text-[22px] -tracking-tight pl-6">
            Rooms
          </Link>
        </div>

        <div className="flex items-center pt-3 pl-8 mt-4 mx-6 pb-3 hover:bg-blue-700 cursor-pointer rounded-lg">
          <FaUsers size={35} />
          <Link className="text-white font-bold text-[22px] -tracking-tight pl-6">
            Users
          </Link>
        </div>

        <div className="flex items-center pt-3 pl-8 mt-4 mx-6 pb-3 hover:bg-blue-700 cursor-pointer rounded-lg">
          <MdFeedback size={35} />
          <Link className="text-white font-bold text-[22px] -tracking-tight pl-6">
            Feedback
          </Link>
        </div>

        <div className="flex items-center pt-3 pl-8 mt-4 mx-6 pb-3 hover:bg-blue-700 cursor-pointer rounded-lg">
          <GrGallery size={35} />
          <Link className="text-white font-bold text-[22px] -tracking-tight pl-6">
            Gallery Item
          </Link>
        </div>
      </div>

      <div className="w-[74%] bg-red-400 flex flex-col h-[85%] mt-20 ml-5">

      </div>
    </div>
  );
}
