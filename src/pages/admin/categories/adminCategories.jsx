import axios from "axios";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddIcon from "@mui/icons-material/Add";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function CategoriesPage() {
  
  
  const [categories, setCategories] = useState([]);
  const [categoriesIsLoaded, setCategoriesIsLoaded] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  if (token == null) {
    window.location.href = "/login";
  }

  useEffect(() => {
    if (!categoriesIsLoaded) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/category")
        .then((res) => {
          console.log(res.data.categories);
          setCategories(res.data.categories);
          setCategoriesIsLoaded(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [categoriesIsLoaded]);

  function handleDelete(name) {
    console.log(name);
    axios
      .delete(import.meta.env.VITE_BACKEND_URL + "/api/category/" + name, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        setCategoriesIsLoaded(false);
      })
      .catch((err) => {
        toast.error("Failed to delete category");
      });
  }
  function handlePlusClick() {
    navigate("/admin/add-category");
  }

  return (
    <div>
      <button  className="bg-[#608BC1] w-[50px] h-[50px] rounded-full justify-center items-center text-2xl fixed top-36 right-16"
        onClick={()=>{
          handlePlusClick()
        }}>
        <AddIcon />
      </button>
      <table className="table-auto w-full ">
        <thead className="h-14 bg-[#608BC1]">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Features</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="border border-black">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <tr className="h-28" key={index}>
                <td className="border border-black w-[8%] text-center">
                  {index + 1}
                </td>
                <td className="border border-black w-[15%]">{category.name}</td>
                <td className="border border-black w-[10%] text-center">
                  {category.price}
                </td>
                <td className="border border-black w-[18%] text-center">
                  {category.features && category.features.length > 0 ? (
                    <ul className="list-disc pl-6 text-left">
                      {category.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  ) : (
                    "No features"
                  )}
                </td>
                <td className="border border-black w-[36%]">
                  {category.description}
                </td>
                <td className="border border-black">
                  <button
                    onClick={() => {
                      console.log("Owin");
                    }}
                    className="mx-4"
                  >
                    <VisibilityIcon />
                  </button>
                  <Link className="mx-2"
                  to={"/admin/update-category"}
                  state={category}>
                    <EditIcon />
                  </Link>
                  <button
                    onClick={() => {
                      handleDelete(category.name);
                    }}
                    className="mx-2"
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No categories available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
