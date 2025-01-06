import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CategoriesPage() {

  
  const [categories, setCategories] = useState([]);

  const[categoriesIsLoaded,setCategoriesIsLoaded] = useState(false)

  useEffect(() => {
    if (!categoriesIsLoaded) {
        axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/category")
      .then((res) => {
        setCategories(res.data.categories);
        setCategoriesIsLoaded(true)
      });    
    }

    
  }, [categoriesIsLoaded]);
  
  function deleteItem(name) {
    alert("Deleting Categori with name : " + name);
    axios
      .delete(import.meta.env.VITE_BACKEND_URL + "/api/category/" + name)
      .then((res) => {
        setCategoriesIsLoaded(false)
      });
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Image
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Price
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Features
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Description
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {category.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ${category.price}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {category.features.join(", ")}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {category.description}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => {
                      deleteItem(category.name);
                    }}
                    className="bg-red-500 text-white px-1 py-1 rounded-lg ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
