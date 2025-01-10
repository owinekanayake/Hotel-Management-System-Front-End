import UserTag from "../../Components/userData/userData";
import { Link, Route, Routes } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { FaBed, FaUsers } from "react-icons/fa6";
import { MdBookmarks, MdFeedback } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import CategoriesPage from "../admin/categories/adminCategories";
import AdminBooking from "../admin/booking/adminBooking";
import AdminFeedback from "../admin/feedback/feedback";
import AdminGalleryItem from "../admin/galleryItem.jsx/galleryItem";
import AdminRooms from "../admin/rooms/rooms";
import AdminUsers from "../admin/users/users";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";

export default function AdminPage() {
  const [age, setAge] = React.useState(""); // State for Select component

  const handleChange = (event) => {
    setAge(event.target.value); // Update state with selected value
  };
  return (
    <div className="w-full h-screen overflow-hidden  bg-[#D9D9D9] relative flex">
      <div className="w-full bg-[#608BC1] h-14 flex items-center absolute">
        <h1 className="text-black text-outline text-xl font-bold font-serif [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)] ml-16">
          Pathayi Hotel & Resort
        </h1>
        <UserTag />
      </div>

      <div className="w-[18%] bg-[#608BC1] flex flex-col mt-20 ml-5 h-[85%] rounded-lg">
        <div className="flex items-center pt-3 pl-3 mt-14 mx-6 pb-3 hover:bg-blue-700 cursor-pointer rounded-lg">
          <MdBookmarks size={35} />
          <Link
            to="/admin/bookings"
            className="text-white font-bold text-[22px] -tracking-tight pl-6"
          >
            Bookings
          </Link>
        </div>

        <div className="flex items-center pt-3 pl-3 mt-4 mx-6 pb-3 hover:bg-blue-700 cursor-pointer rounded-lg">
          <BiCategory size={35} />
          <Link
            to="/admin/categories"
            className="text-white font-bold text-[22px] -tracking-tight pl-6"
          >
            Categories
          </Link>
        </div>

        <div className="flex items-center pt-3 pl-3 mt-4 mx-6 pb-3 hover:bg-blue-700 cursor-pointer rounded-lg">
          <FaBed size={35} />
          <Link
            to="/admin/rooms"
            className="text-white font-bold text-[22px] -tracking-tight pl-6"
          >
            Rooms
          </Link>
        </div>

        <div className="flex items-center pt-3 pl-3 mt-4 mx-6 pb-3 hover:bg-blue-700 cursor-pointer rounded-lg">
          <FaUsers size={35} />
          <Link
            to="/admin/users"
            className="text-white font-bold text-[22px] -tracking-tight pl-6"
          >
            Users
          </Link>
        </div>

        <div className="flex items-center pt-3 pl-3 mt-4 mx-6 pb-3 hover:bg-blue-700 cursor-pointer rounded-lg">
          <MdFeedback size={35} />
          <Link
            to="/admin/feedback"
            className="text-white font-bold text-[22px] -tracking-tight pl-6"
          >
            Feedback
          </Link>
        </div>

        <div className="flex items-center pt-3 pl-3 mt-4 mx-6 pb-3 hover:bg-blue-700 cursor-pointer rounded-lg">
          <GrGallery size={35} />
          <Link
            to="/admin/gallery-item"
            className="text-white font-bold text-[22px] -tracking-tight pl-6"
          >
            Gallery Item
          </Link>
        </div>
      </div>

      <div className="w-[78%] flex flex-col h-[85%] mt-20 ml-5 ">
        <div className="w-[100%] bg-[#608BC1] h-[10%] rounded-lg text-white items-center flex">
          <h1 className="ml-6 font-bold underline">Bookings</h1>
        </div>

        <div className="w-[100%]  h-[90%] mt-3">
          <div className="w-full h-[10%] flex">
            <Box sx={{ width: "250px", height: "300px" }}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="demo-simple-select-label">
                  Select Option
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                  label="Select Option" // Ensure this matches InputLabel text
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <div className="ml-3"><TextField sx={{width : "300px", height: "300px"}} id="outlined-basic" label="All Records" variant="outlined"></TextField></div>
            
          </div>

          <div className="w-[100%] bg-black h-[90%] rounded-lg mt-3">
            <Routes path="/*">
              <Route path="bookings" element={<AdminBooking />}></Route>
              <Route path="categories" element={<CategoriesPage />}></Route>
              <Route path="rooms" element={<AdminRooms />}></Route>
              <Route path="users" element={<AdminUsers />}></Route>
              <Route path="feedback" element={<AdminFeedback />}></Route>
              <Route path="gallery-item" element={<AdminGalleryItem />}></Route>
              <Route
                path="*"
                element={<h1 className="text-white">404: Page Not Found</h1>}
              ></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
