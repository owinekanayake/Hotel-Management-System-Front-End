import { useState } from "react";
import uploadMedia from "../../../utils/mediaUpload";
import { getDownloadURL } from "firebase/storage";
import axios from "axios";

export default function UpdateCategoryForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [features, setFeatures] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const[isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");
  if(token == null){
    window.location.href = "/login";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const featuresArray = features.split(",");
    
    uploadMedia(image).then((snapshot)=>{
        getDownloadURL(snapshot.ref).then((url)=>{
            const categoryInfo = {
                name: name,
                price: price,
                features: featuresArray,
                description: description,
                Image: url
            }
            
            axios.post(import.meta.env.VITE_BACKEND_URL+"/api/category" , categoryInfo, {
                headers: {
                    Authorization: "Bearer "+token
                }
            }).then((res)=>{
                console.log(res);
                setIsLoading(false);
            })
        })
    })
  };

  return (
    <div className="fixed w-[78%] h-[66%] bg-[#608BC1] text-white p-6 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Update Category</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name Field */}
        <div>
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter category name"
            className="w-full p-2 rounded bg-white text-black"
            required
          />
        </div>

        {/* Price Field */}
        <div>
          <label className="block mb-2 text-sm font-medium">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="Enter price"
            className="w-full p-2 rounded bg-white text-black"
          />
        </div>

        {/* Features Field */}
        <div>
          <label className="block mb-2 text-sm font-medium">Features</label>
          <textarea
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            placeholder="Enter features"
            className="w-full p-2 rounded bg-white text-black"
          ></textarea>
        </div>

        {/* Description Field */}
        <div>
          <label className="block mb-2 text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="w-full p-2 rounded bg-white text-black"
          ></textarea>
        </div>

        {/* Image Upload Field */}
        <div>
          <label className="block mb-2 text-sm font-medium">Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full p-2 rounded bg-white text-black"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 p-2 rounded text-white hover:bg-blue-600 flex justify-center"
        >
            {
                isLoading ?
                <div className="border-t-2 border-t-white w-[20px] min-h-[20px] rounded-full animate-spin"></div>
                :
                <span>Update Category</span>
            }
        </button>
      </form>
    </div>
  );
}
