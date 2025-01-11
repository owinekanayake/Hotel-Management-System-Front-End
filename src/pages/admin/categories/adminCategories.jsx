import axios from "axios";
import { useEffect, useState } from "react";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [categoriesIsLoaded, setCategoriesIsLoaded] = useState(false);

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
  },[categoriesIsLoaded]);

  return (
    <div>
      <table className="table-auto w-full ">
        <thead className="h-14 bg-[#608BC1]">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Features</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody className="border border-black">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <tr className="h-28" key={index}>
                <td className="border border-black w-[8%] text-center">{index + 1}</td>
                <td className="border border-black w-[15%]">{category.name}</td>
                <td className="border border-black w-[10%] text-center">{category.price}</td>
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
                <td className="border border-black w-[36%]">{category.description}</td>
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
